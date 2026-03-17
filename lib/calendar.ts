import { createEvents, EventAttributes, DateArray } from 'ics';
import { Vernissage } from './types';

export function generateICSFile(event: Vernissage): string | null {
  try {
    const eventDate = new Date(event.data);
    const [hours, minutes] = event.horaInicio.split(':').map(Number);
    
    const startDate: DateArray = [
      eventDate.getFullYear(),
      eventDate.getMonth() + 1,
      eventDate.getDate(),
      hours,
      minutes
    ];

    const eventAttributes: EventAttributes = {
      start: startDate,
      duration: { hours: 3 },
      title: event.titulo,
      description: event.descricao,
      location: event.endereco ? `${event.local}, ${event.endereco}` : event.local,
      url: event.linkEvento,
      status: 'CONFIRMED',
      busyStatus: 'BUSY',
      organizer: { name: 'Calendário Cultural POA', email: 'contato@calendarioculturalpoa.com' }
    };

    const { error, value } = createEvents([eventAttributes]);
    
    if (error) {
      console.error('Erro ao criar arquivo ICS:', error);
      return null;
    }

    return value || null;
  } catch (error) {
    console.error('Erro ao gerar ICS:', error);
    return null;
  }
}

export function downloadICSFile(event: Vernissage): void {
  const icsContent = generateICSFile(event);
  
  if (!icsContent) {
    console.error('Não foi possível gerar o arquivo ICS');
    return;
  }

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.titulo.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function generateGoogleCalendarURL(event: Vernissage): string {
  const eventDate = new Date(event.data);
  const [hours, minutes] = event.horaInicio.split(':').map(Number);
  
  eventDate.setHours(hours, minutes, 0, 0);
  
  const endDate = new Date(eventDate);
  endDate.setHours(endDate.getHours() + 3);

  const formatDate = (date: Date): string => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  };

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.titulo,
    dates: `${formatDate(eventDate)}/${formatDate(endDate)}`,
    details: event.descricao + (event.linkEvento ? `\n\nMais informações: ${event.linkEvento}` : ''),
    location: event.endereco ? `${event.local}, ${event.endereco}` : event.local,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function openGoogleCalendar(event: Vernissage): void {
  const url = generateGoogleCalendarURL(event);
  window.open(url, '_blank', 'noopener,noreferrer');
}
