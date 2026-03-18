export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--hero-from)] via-[var(--hero-via)] to-[var(--hero-to)] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-10 right-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-neutral-400 opacity-10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wide">
            Porto Alegre
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-display)] tracking-tight leading-tight">
            Agenda
            <br />
            Cultural
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto font-light">
            Descubra as melhores exposições de arte da cidade.
            <br className="hidden sm:block" />
            Adicione eventos ao seu calendário e nunca perca uma vernissage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendar.google.com/calendar/u/0/r?cid=https://calendar.google.com/calendar/ical/674378b8b7cc939f1f28ac8f6c68eb9b04bf97f5f5f818cf1cab7ae42ad33ec8@group.calendar.google.com/public/basic.ics"
              className="px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white font-bold rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 min-h-[44px] flex items-center gap-2"
            >
              <span>Adicionar calendário</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>

            <a
              href="#sobre"
              className="px-8 py-4 text-white font-semibold rounded-lg border-2 border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-200 min-h-[44px] flex items-center"
            >
              Saiba Mais
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]">
                  Cultura
                </div>
                <div className="text-sm sm:text-base text-white/80 mt-1">Centralizada</div>
              </div>
              <div className="hidden sm:block w-px bg-white/20"></div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]">
                  Gratuito
                </div>
                <div className="text-sm sm:text-base text-white/80 mt-1">Sempre</div>
              </div>
              <div className="hidden sm:block w-px bg-white/20"></div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]">
                  Atualizado
                </div>
                <div className="text-sm sm:text-base text-white/80 mt-1">Semanalmente</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 sm:h-16 text-[var(--background)]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 600,80 900,40 L1200,60 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
