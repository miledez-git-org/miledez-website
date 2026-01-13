import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Politica de Privacidade - mil&dez',
  description: 'Politica de privacidade e tratamento de dados pessoais da mil&dez, em conformidade com a LGPD.',
}

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-8">
            Politica de Privacidade
          </h1>

          <p className="text-neutral-600 mb-8">
            Ultima atualizacao: Janeiro de 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">1. Introducao</h2>
              <p className="text-neutral-600 leading-relaxed">
                A mil&dez Automacao Ltda. (&quot;mil&dez&quot;, &quot;nos&quot;, &quot;nosso&quot;) esta comprometida com a protecao da sua privacidade. Esta Politica de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informacoes pessoais em conformidade com a Lei Geral de Protecao de Dados (LGPD - Lei n. 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">2. Dados que Coletamos</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Coletamos os seguintes tipos de informacoes:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                <li><strong>Dados de identificacao:</strong> nome, e-mail, telefone, empresa</li>
                <li><strong>Dados de navegacao:</strong> endereco IP, tipo de navegador, paginas visitadas</li>
                <li><strong>Dados de comunicacao:</strong> mensagens enviadas atraves de formularios de contato</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">3. Como Usamos Seus Dados</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Utilizamos suas informacoes para:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                <li>Responder a solicitacoes e fornecer suporte</li>
                <li>Enviar informacoes sobre nossos servicos (com seu consentimento)</li>
                <li>Melhorar nosso site e servicos</li>
                <li>Cumprir obrigacoes legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">4. Base Legal para Tratamento</h2>
              <p className="text-neutral-600 leading-relaxed">
                O tratamento de dados pessoais e realizado com base em: consentimento do titular, execucao de contrato, cumprimento de obrigacao legal, ou interesse legitimo da mil&dez, conforme aplicavel.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">5. Compartilhamento de Dados</h2>
              <p className="text-neutral-600 leading-relaxed">
                Nao vendemos suas informacoes pessoais. Podemos compartilhar dados com prestadores de servicos que nos auxiliam em nossas operacoes, sempre mediante contratos que garantam a protecao adequada dos dados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">6. Seus Direitos (LGPD)</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Voce tem direito a:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                <li>Confirmar a existencia de tratamento de dados</li>
                <li>Acessar seus dados</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar anonimizacao, bloqueio ou eliminacao de dados</li>
                <li>Revogar consentimento</li>
                <li>Solicitar portabilidade dos dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">7. Retencao de Dados</h2>
              <p className="text-neutral-600 leading-relaxed">
                Mantemos seus dados pessoais pelo tempo necessario para cumprir as finalidades para as quais foram coletados, ou conforme exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">8. Seguranca</h2>
              <p className="text-neutral-600 leading-relaxed">
                Implementamos medidas tecnicas e organizacionais apropriadas para proteger seus dados contra acesso nao autorizado, alteracao, divulgacao ou destruicao.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">9. Contato</h2>
              <p className="text-neutral-600 leading-relaxed">
                Para exercer seus direitos ou esclarecer duvidas sobre esta politica, entre em contato conosco:
              </p>
              <p className="text-neutral-600 mt-4">
                <strong>E-mail:</strong> privacidade@miledez.com.br<br />
                <strong>Endereco:</strong> Belo Horizonte, MG - Brasil
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">10. Alteracoes</h2>
              <p className="text-neutral-600 leading-relaxed">
                Esta politica pode ser atualizada periodicamente. Recomendamos que voce revise esta pagina regularmente para se manter informado sobre nossas praticas de privacidade.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
