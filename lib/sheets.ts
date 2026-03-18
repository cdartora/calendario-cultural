import { google } from 'googleapis';
import { Vernissage, VernissageRaw } from './types';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

function getGoogleSheetsClient() {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;

  if (!privateKey || !clientEmail) {
    throw new Error('Google Sheets credentials not configured');
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: SCOPES,
  });

  return google.sheets({ version: 'v4', auth });
}

export async function fetchEventsFromSheets(): Promise<Vernissage[]> {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!spreadsheetId) {
      console.warn('Google Sheets ID not configured, returning mock data');
      return getMockEvents();
    }

    const sheets = getGoogleSheetsClient();
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'A2:H',
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      console.warn('No data found in spreadsheet');
      return [];
    }

    const events = rows
      .map((row, index) => {
        const [titulo, data, horaInicio, local, endereco, descricao, linkEvento, artista] = row;

        if (!titulo || !data || !horaInicio || !local) {
          console.warn(`Row ${index + 2} missing required fields, skipping`);
          return null;
        }

        const eventDate = parseDate(data);
        if (!eventDate) {
          console.warn(`Row ${index + 2} has invalid date: ${data}`);
          return null;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (eventDate < today) {
          return null;
        }

        return {
          id: `${titulo.replace(/\s+/g, '-').toLowerCase()}-${eventDate.getTime()}`,
          titulo,
          data: eventDate,
          horaInicio,
          local,
          endereco: endereco || undefined,
          descricao: descricao || '',
          linkEvento: linkEvento || undefined,
          artista: artista || undefined,
        } as Vernissage;
      })
      .filter((event): event is Vernissage => event !== null)
      .sort((a, b) => a.data.getTime() - b.data.getTime());

    return events;
  } catch (error) {
    console.error('Error fetching events from Google Sheets:', error);
    return getMockEvents();
  }
}

function parseDate(dateString: string): Date | null {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return null;
    }
    return date;
  } catch {
    return null;
  }
}

function getMockEvents(): Vernissage[] {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);
  
  const twoWeeks = new Date(today);
  twoWeeks.setDate(today.getDate() + 14);
  
  const threeWeeks = new Date(today);
  threeWeeks.setDate(today.getDate() + 21);

  return [
    {
      id: 'exposicao-cores-do-sul-1',
      titulo: '[MAPA] Desenhos de Água | Bia Dorfman',
      data: nextWeek,
      horaInicio: '18:00',
      local: 'Museu de Arte de Porto Alegre (MAPA) – Sala Leste',
      endereco: 'Praça Montevideo, nº10, Centro',
      descricao: 'Uma celebração vibrante das cores e formas que definem a arte contemporânea gaúcha. A exposição reúne obras de 15 artistas locais.',
      artista: 'Bia Dorfman',
    },
    {
      id: 'tracos-urbanos-2',
      titulo: 'Movimentos Involuntários',
      data: twoWeeks,
      horaInicio: '19:00',
      local: 'Casa Baka',
      endereco: 'R. da República, 139 - Cidade Baixa',
      descricao: 'Fotografias que capturam a essência das ruas de Porto Alegre, revelando a beleza escondida no cotidiano urbano.',
      artista: 'Gabriela Bittencourt, Tiago Gasperi, Gabe Felds, Juan Pablo Trabalha, Nazú Ramos, Laura Yang & Ricardo Zigomático, Gabriel Andrade' 
    },
    {
      id: 'memorias-afetivas-3',
      titulo: 'Dias Normais',
      data: threeWeeks,
      horaInicio: '19:00',
      local: 'Instituto Ling',
      endereco: 'R. João Caetano, 440 - Três Figueiras',
      descricao: 'Instalação artística que explora a relação entre memória, identidade e pertencimento através de objetos cotidianos e narrativas pessoais.',
      linkEvento: 'https://institutoling.org.br/exposicoes/dias-normais-shirley-paes-leme',
      artista: 'Shirley Paes Leme',
    },
  ];
}
