import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Termos de Uso - mil&dez',
  description: 'Termos e condicoes de uso dos servicos da mil&dez.',
}

export default function TermosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-8">
            Termos de Uso
          </h1>

          <p className="text-neutral-600 mb-8">
            Ultima atualizacao: Janeiro de 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">1. Aceitacao dos Termos</h2>
              <p className="text-neutral-600 leading-relaxed">
                Ao acessar e utilizar o site e servicos da mil&dez Automacao Ltda. (&quot;mil&dez&quot;), voce concorda com estes Termos de Uso. Se voce nao concordar com algum destes termos, por favor, nao utilize nossos servicos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">2. Descricao dos Servicos</h2>
              <p className="text-neutral-600 leading-relaxed">
                A mil&dez oferece servicos de automacao de processos de negocios, incluindo desenvolvimento, implementacao e manutencao de workflows automatizados para empresas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">3. Uso do Site</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Voce concorda em utilizar nosso site e servicos apenas para fins legais e de acordo com estes termos. Voce nao deve:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                <li>Violar qualquer lei ou regulamento aplicavel</li>
                <li>Infringir direitos de propriedade intelectual</li>
                <li>Transmitir conteudo prejudicial ou malicioso</li>
                <li>Tentar acessar sistemas sem autorizacao</li>
                <li>Interferir no funcionamento do site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">4. Propriedade Intelectual</h2>
              <p className="text-neutral-600 leading-relaxed">
                Todo o conteudo do site, incluindo textos, graficos, logos, icones, imagens e software, e propriedade da mil&dez ou de seus licenciadores e esta protegido por leis de direitos autorais e propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">5. Contratacao de Servicos</h2>
              <p className="text-neutral-600 leading-relaxed">
                A contratacao de servicos de automacao esta sujeita a termos especificos acordados em contrato separado. Os precos exibidos no site sao estimativas e podem variar conforme a complexidade do projeto.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">6. Limitacao de Responsabilidade</h2>
              <p className="text-neutral-600 leading-relaxed">
                A mil&dez nao sera responsavel por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou incapacidade de uso de nossos servicos, exceto nos casos previstos em lei.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">7. Modificacoes</h2>
              <p className="text-neutral-600 leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alteracoes entrarao em vigor apos publicacao no site. O uso continuado dos servicos apos alteracoes constitui aceitacao dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">8. Lei Aplicavel</h2>
              <p className="text-neutral-600 leading-relaxed">
                Estes termos sao regidos pelas leis da Republica Federativa do Brasil. Qualquer disputa sera submetida ao foro da comarca de Belo Horizonte, MG.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">9. Contato</h2>
              <p className="text-neutral-600 leading-relaxed">
                Para duvidas sobre estes termos, entre em contato:
              </p>
              <p className="text-neutral-600 mt-4">
                <strong>E-mail:</strong> contato@miledez.com.br<br />
                <strong>Endereco:</strong> Belo Horizonte, MG - Brasil
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
