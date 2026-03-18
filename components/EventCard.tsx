import { Vernissage } from '@/lib/types';
import CalendarButton from './CalendarButton';

interface EventCardProps {
  event: Vernissage;
}

export default function EventCard({ event }: EventCardProps) {
  const eventDate = new Date(event.data);
  const dayOfMonth = eventDate.getDate();
  const month = eventDate.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '');
  const dayOfWeek = eventDate.toLocaleDateString('pt-BR', { weekday: 'long' });
  const year = eventDate.getFullYear();

  return (
    <article className="bg-white rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
      <div className="flex gap-4 p-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-lg flex flex-col items-center justify-center text-white shadow-md">
            <div className="text-2xl sm:text-3xl font-bold leading-none">{dayOfMonth}</div>
            <div className="text-xs sm:text-sm uppercase tracking-wide mt-1">{month}</div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-xs sm:text-sm text-neutral-500 capitalize mb-1">
            {dayOfWeek}, {year}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2 line-clamp-2 font-[family-name:var(--font-display)]">
            {event.titulo}
          </h3>
          
          {event.artista && (
            <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="truncate">{event.artista}</span>
            </div>
          )}

          <div className="flex items-start gap-2 text-sm text-neutral-600 mb-2">
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{event.horaInicio}</span>
          </div>

          <div className="flex items-start gap-2 text-sm text-neutral-600">
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="flex-1 min-w-0">
              <div className="font-medium">{event.local}</div>
              {event.endereco && (
                <div className="text-xs text-neutral-500 line-clamp-1">{event.endereco}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="px-6 pb-4 flex-1">
        <p className="text-sm text-neutral-700 line-clamp-3 leading-relaxed">
          {event.descricao}
        </p>
      </div> */}

      {event.linkEvento && (
        <div className="px-6 pb-4">
          <a
            href={event.linkEvento}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-600 hover:text-neutral-900 font-medium inline-flex items-center gap-1 transition-colors"
          >
            <span>Mais informações</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}

      {/* <div className="px-6 pb-6 border-t border-neutral-100 pt-4 mt-auto">
        <CalendarButton event={event} />
      </div> */}
    </article>
  );
}
