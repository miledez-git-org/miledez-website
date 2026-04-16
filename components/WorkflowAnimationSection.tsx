'use client'

/**
 * WorkflowAnimationSection - Static workflow examples display
 * Shows 3 automation workflow examples as static visual pipelines
 * Left-aligned layout with scroll-reveal per row
 */

// Workflow Data
interface WorkflowModule {
  label: string
  sub: string
  logo: string
  trigger?: boolean
}

interface Workflow {
  title: string
  desc: string
  modules: WorkflowModule[]
}

const WORKFLOWS: Workflow[] = [
  {
    title: 'Cobrança sem esforço',
    desc: 'Sistema detecta vencimentos, envia cobrança ao cliente e registra o pagamento — tudo automático',
    modules: [
      { label: 'Agenda', sub: 'Vencimento detectado', logo: 'google-calendar.svg', trigger: true },
      { label: 'Gmail', sub: 'Cliente recebe o boleto', logo: 'gmail.svg' },
      { label: 'Pix', sub: 'Pagamento confirmado', logo: 'pix.svg' },
      { label: 'Planilha', sub: 'Registro atualizado', logo: 'google-sheets.svg' },
    ],
  },
  {
    title: 'Onboarding de clientes',
    desc: 'Novo cliente? Pasta criada, dados organizados e equipe notificada em segundos',
    modules: [
      { label: 'Gmail', sub: 'Novo cliente chega', logo: 'gmail.svg', trigger: true },
      { label: 'Drive', sub: 'Pasta criada com docs', logo: 'google-drive.svg' },
      { label: 'Planilha', sub: 'Dados organizados', logo: 'google-sheets.svg' },
      { label: 'Equipe', sub: 'Time é avisado', logo: 'slack.svg' },
    ],
  },
  {
    title: 'Relatórios prontos',
    desc: 'No fim de cada período, dados são reunidos, resumo gerado por IA e enviado à equipe',
    modules: [
      { label: 'Calendário', sub: 'Fim do período', logo: 'google-calendar.svg', trigger: true },
      { label: 'Planilha', sub: 'Dados reunidos', logo: 'google-sheets.svg' },
      { label: 'IA', sub: 'Resumo gerado', logo: 'openai.svg' },
      { label: 'E-mail', sub: 'Equipe recebe tudo', logo: 'gmail.svg' },
    ],
  },
]

function WorkflowRow({ workflow, index }: { workflow: Workflow; index: number }) {
  return (
    <div
      className="fade-in-up"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Row header */}
      <h3 className="font-display text-xl font-semibold text-brand-black mb-1.5">
        {workflow.title}
      </h3>
      <p className="text-[15px] text-neutral-600 mb-5">
        {workflow.desc}
      </p>

      {/* Pipeline */}
      <div className="wf-static-pipeline">
        {workflow.modules.map((mod, i) => (
          <div className="wf-static-step" key={i}>
            {/* Card */}
            <div className={`wf-static-card${mod.trigger ? ' trigger' : ''}`}>
              <img
                className="wf-static-card-logo"
                src={`/software-company-logos/${mod.logo}`}
                alt={mod.label}
                width={28}
                height={28}
              />
              <span className="wf-static-card-label">{mod.label}</span>
              <span className="wf-static-card-sub">{mod.sub}</span>
            </div>

            {/* Connector arrow */}
            {i < workflow.modules.length - 1 && (
              <div className="wf-static-conn">
                <div className="wf-static-conn-line" />
                <svg
                  className="wf-static-conn-arrow"
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                >
                  <path
                    d="M1.5 1L5.5 5L1.5 9"
                    stroke="#6b0f1a"
                    strokeWidth="1.4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function WorkflowAnimationSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <style>{staticStyles}</style>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section header - left aligned */}
        <div className="mb-14 md:mb-16">
          <h2 className="font-display text-[2rem] md:text-[2.5rem] text-brand-black leading-tight">
            Seu negócio no<br />
            <span className="text-[#1a1a1a]">piloto automático</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-xl">
            Veja como tarefas repetitivas do dia a dia passam a acontecer
            sozinhas — sem esforço da sua equipe.
          </p>
        </div>

        {/* Workflow rows */}
        <div className="flex flex-col gap-12 md:gap-14">
          {WORKFLOWS.map((wf, i) => (
            <WorkflowRow key={i} workflow={wf} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

const staticStyles = `
/* Pipeline layout */
.wf-static-pipeline {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

.wf-static-step {
  display: flex;
  align-items: center;
}

/* Card */
.wf-static-card {
  width: 150px;
  padding: 18px 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #E0E0E0;
  background: #FFFFFF;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.wf-static-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.wf-static-card.trigger {
  border-left: 2.5px solid #6b0f1a;
}

.wf-static-card-logo {
  width: 28px;
  height: 28px;
  margin-bottom: 10px;
  object-fit: contain;
}

.wf-static-card-label {
  font-family: var(--font-manrope), 'Inter', sans-serif;
  font-size: 13.5px;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 3px;
  line-height: 1.2;
}

.wf-static-card-sub {
  font-size: 12px;
  color: #525252;
  line-height: 1.3;
}

/* Connector */
.wf-static-conn {
  display: flex;
  align-items: center;
  width: 44px;
  margin: 0 3px;
}

.wf-static-conn-line {
  flex: 1;
  height: 1.5px;
  background: #E0E0E0;
}

.wf-static-conn-arrow {
  flex-shrink: 0;
  margin-left: -1px;
}

/* Responsive - Tablet */
@media (max-width: 860px) {
  .wf-static-card {
    width: 128px;
    padding: 14px 10px 12px;
  }
  .wf-static-card-logo {
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
  .wf-static-card-label {
    font-size: 12px;
  }
  .wf-static-card-sub {
    font-size: 10.5px;
  }
  .wf-static-conn {
    width: 32px;
    margin: 0 2px;
  }
}

/* Responsive - Mobile */
@media (max-width: 600px) {
  .wf-static-pipeline {
    flex-direction: column;
    align-items: flex-start;
  }
  .wf-static-step {
    flex-direction: column;
    align-items: flex-start;
  }
  .wf-static-card {
    width: 100%;
    max-width: 220px;
    padding: 14px 14px 12px;
    flex-direction: row;
    align-items: center;
    text-align: left;
    gap: 12px;
  }
  .wf-static-card-logo {
    width: 24px;
    height: 24px;
    margin-bottom: 0;
    flex-shrink: 0;
  }
  .wf-static-card-label {
    font-size: 13px;
  }
  .wf-static-card-sub {
    font-size: 11px;
  }

  .wf-static-conn {
    width: 2px;
    height: 24px;
    margin: 4px 0 4px 18px;
    flex-direction: column;
  }
  .wf-static-conn-line {
    width: 1.5px;
    height: 100%;
    flex: 1;
  }
  .wf-static-conn-arrow {
    transform: rotate(90deg);
    margin-left: 0;
    margin-top: -2px;
  }
}
`
