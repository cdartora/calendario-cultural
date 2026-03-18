import Hero from '@/components/Hero';
import EventsList from '@/components/EventsList';
import { fetchEventsFromSheets } from '@/lib/sheets';

export const revalidate = 3600;

export default async function Home() {
  const events = await fetchEventsFromSheets();

  return (
    <div className="min-h-screen">
      <Hero />
      
      <EventsList events={events} />

      <section id="sobre" className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 font-[family-name:var(--font-display)] text-center">
            Sobre o Projeto
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-600 leading-relaxed mb-4">
              O <strong>Calendário Cultural POA</strong> é uma plataforma criada para conectar os
              amantes de arte às melhores vernissages e exposições de Porto Alegre.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Nossa missão é facilitar o acesso à cultura, reunindo em um só lugar informações
              sobre os eventos artísticos da cidade e permitindo que você adicione facilmente esses
              eventos ao seu calendário pessoal.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Seja você um artista ou apenas um apreciador de arte, este é o lugar
              para descobrir o que está acontecendo na cena cultural de Porto Alegre.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-display)]">
                Calendário Cultural
              </h3>
              <p className="text-neutral-400 text-sm">
                Descubra as melhores vernissages e exposições de arte em Porto Alegre.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>
                  <a href="#eventos" className="hover:text-white transition-colors">
                    Eventos
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <p className="text-neutral-400 text-sm mb-2">
                Tem uma sugestão ou evento para divulgar?
              </p>
              <p className="text-neutral-400 text-sm">
                Entre em contato conosco através das redes sociais.
              </p>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-500 text-sm">
            <p>
              © {new Date().getFullYear()} Calendário Cultural POA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
