import { Vernissage } from '@/lib/types';
import EventCard from './EventCard';

interface EventsListProps {
  events: Vernissage[];
  isLoading?: boolean;
}

export default function EventsList({ events, isLoading = false }: EventsListProps) {
  if (isLoading) {
    return (
      <section id="eventos" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-[family-name:var(--font-display)]">
              Próximas Vernissages
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Carregando eventos...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-[var(--shadow-card)] overflow-hidden animate-pulse"
              >
                <div className="p-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-neutral-200 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1 space-y-3">
                      <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                      <div className="h-6 bg-neutral-200 rounded w-full"></div>
                      <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-neutral-200 rounded w-full"></div>
                    <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-4 border-t border-neutral-100">
                  <div className="h-12 bg-neutral-200 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (events.length === 0) {
    return (
      <section id="eventos" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-[family-name:var(--font-display)]">
              Próximas Vernissages
            </h2>
          </div>

          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-neutral-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-3 font-[family-name:var(--font-display)]">
              Nenhum evento programado
            </h3>
            <p className="text-neutral-600 mb-6">
              Não há vernissages agendadas no momento. Volte em breve para conferir as próximas
              exposições de arte em Porto Alegre.
            </p>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent-dark)] transition-colors"
            >
              <span>Saiba mais sobre o projeto</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="eventos" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-[family-name:var(--font-display)]">
            Próximas Vernissages
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {events.length} {events.length === 1 ? 'evento' : 'eventos'} programado
            {events.length === 1 ? '' : 's'} em Porto Alegre
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 text-neutral-700 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm">
              Os eventos são atualizados semanalmente
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
