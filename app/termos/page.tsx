import type { Metadata } from 'next'
import HeaderWithContact from '@/components/HeaderWithContact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Termos de Uso - mil&dez',
  description: 'Termos e condições de uso dos serviços da mil&dez.',
}

export default function TermosPage() {
  return (
    <>
      <HeaderWithContact />
      <main className="min-h-screen bg-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h1 className="heading-display text-3xl md:text-4xl text-brand-black mb-8">
            Termos de Uso
          </h1>

          <p className="text-neutral-600 mb-8">
            Última atualização: Janeiro de 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">1. Aceitação dos Termos</h2>
              <p className="text-neutral-600 leading-relaxed">
                Ao acessar e utilizar o site e serviços da mil&dez Automação Ltda. (&quot;mil&dez&quot;), você concorda com estes Termos de Uso. Se você não concordar com algum destes termos, por favor, não utilize nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">2. Descrição dos Serviços</h2>
              <p className="text-neutral-600 leading-relaxed">
                A mil&dez oferece serviços de automação de processos de negócios, incluindo desenvolvimento, implementação e manutenção de workflows automatizados para empresas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">3. Uso do Site</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Você concorda em utilizar nosso site e serviços apenas para fins legais e de acordo com estes termos. Você não deve:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                <li>Violar qualquer lei ou regulamento aplicável</li>
                <li>Infringir direitos de propriedade intelectual</li>
                <li>Transmitir conteúdo prejudicial ou malicioso</li>
                <li>Tentar acessar sistemas sem autorização</li>
                <li>Interferir no funcionamento do site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">4. Propriedade Intelectual</h2>
              <p className="text-neutral-600 leading-relaxed">
                Todo o conteúdo do site, incluindo textos, gráficos, logos, ícones, imagens e software, é propriedade da mil&dez ou de seus licenciadores e está protegido por leis de direitos autorais e propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">5. Contratação de Serviços</h2>
              <p className="text-neutral-600 leading-relaxed">
                A contratação de serviços de automação está sujeita a termos específicos acordados em contrato separado. Os preços exibidos no site são estimativas e podem variar conforme a complexidade do projeto.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">6. Limitação de Responsabilidade</h2>
              <p className="text-neutral-600 leading-relaxed">
                A mil&dez não será responsável por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou incapacidade de uso de nossos serviços, exceto nos casos previstos em lei.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">7. Modificações</h2>
              <p className="text-neutral-600 leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor após publicação no site. O uso continuado dos serviços após alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">8. Lei Aplicável</h2>
              <p className="text-neutral-600 leading-relaxed">
                Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida ao foro da comarca de Belo Horizonte, MG.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">9. Contato</h2>
              <p className="text-neutral-600 leading-relaxed">
                Para dúvidas sobre estes termos, entre em contato:
              </p>
              <p className="text-neutral-600 mt-4">
                <strong>E-mail:</strong> contato@miledez.com.br<br />
                <strong>Endereço:</strong> Belo Horizonte, MG - Brasil
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
