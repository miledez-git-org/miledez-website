import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidade - mil&dez',
  description: 'Política de privacidade e tratamento de dados pessoais da mil&dez, em conformidade com a LGPD.',
}

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h1 className="heading-display text-3xl md:text-4xl text-brand-black mb-8">
            Política de Privacidade
          </h1>

          <p className="text-neutral-600 mb-8">
            Última atualização: Janeiro de 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">1. Introdução</h2>
              <p className="text-neutral-600 leading-relaxed">
                A mil&dez Automação Ltda. (&quot;mil&dez&quot;, &quot;nós&quot;, &quot;nosso&quot;) está comprometida com a proteção da sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei n. 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">2. Dados que Coletamos</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Coletamos os seguintes tipos de informações:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                <li><strong>Dados de identificação:</strong> nome, e-mail, telefone, empresa</li>
                <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas</li>
                <li><strong>Dados de comunicação:</strong> mensagens enviadas através de formulários de contato</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">3. Como Usamos Seus Dados</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                <li>Responder a solicitações e fornecer suporte</li>
                <li>Enviar informações sobre nossos serviços (com seu consentimento)</li>
                <li>Melhorar nosso site e serviços</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">4. Base Legal para Tratamento</h2>
              <p className="text-neutral-600 leading-relaxed">
                O tratamento de dados pessoais é realizado com base em: consentimento do titular, execução de contrato, cumprimento de obrigação legal, ou interesse legítimo da mil&dez, conforme aplicável.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">5. Compartilhamento de Dados</h2>
              <p className="text-neutral-600 leading-relaxed">
                Não vendemos suas informações pessoais. Podemos compartilhar dados com prestadores de serviços que nos auxiliam em nossas operações, sempre mediante contratos que garantam a proteção adequada dos dados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">6. Seus Direitos (LGPD)</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Você tem direito a:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
                <li>Revogar consentimento</li>
                <li>Solicitar portabilidade dos dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">7. Retenção de Dados</h2>
              <p className="text-neutral-600 leading-relaxed">
                Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades para as quais foram coletados, ou conforme exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">8. Segurança</h2>
              <p className="text-neutral-600 leading-relaxed">
                Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">9. Contato</h2>
              <p className="text-neutral-600 leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco:
              </p>
              <p className="text-neutral-600 mt-4">
                <strong>E-mail:</strong> contato@miledez.com.br<br />
                <strong>Endereço:</strong> Belo Horizonte, MG - Brasil
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-black mb-4">10. Alterações</h2>
              <p className="text-neutral-600 leading-relaxed">
                Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre nossas práticas de privacidade.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
