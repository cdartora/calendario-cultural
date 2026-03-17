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
      titulo: 'Cores do Sul',
      data: nextWeek,
      horaInicio: '19:00',
      local: 'Galeria Mamute',
      endereco: 'Rua da República, 500 - Cidade Baixa',
      descricao: 'Uma celebração vibrante das cores e formas que definem a arte contemporânea gaúcha. A exposição reúne obras de 15 artistas locais.',
      linkEvento: 'https://example.com/cores-do-sul',
      artista: 'Coletivo Artístico POA',
    },
    {
      id: 'tracos-urbanos-2',
      titulo: 'Traços Urbanos',
      data: twoWeeks,
      horaInicio: '18:30',
      local: 'Espaço Cultural CEEE Erico Verissimo',
      endereco: 'Rua dos Andradas, 1223 - Centro Histórico',
      descricao: 'Fotografias que capturam a essência das ruas de Porto Alegre, revelando a beleza escondida no cotidiano urbano.',
      artista: 'Marina Silva',
    },
    {
      id: 'memorias-afetivas-3',
      titulo: 'Memórias Afetivas',
      data: threeWeeks,
      horaInicio: '20:00',
      local: 'Atelier Livre da Prefeitura',
      endereco: 'Praça Montevidéu - Moinhos de Vento',
      descricao: 'Instalação artística que explora a relação entre memória, identidade e pertencimento através de objetos cotidianos e narrativas pessoais.',
      linkEvento: 'https://example.com/memorias-afetivas',
      artista: 'João Pedro Guimarães',
    },
  ];
}
