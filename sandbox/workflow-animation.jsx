import { useState, useEffect } from "react";
import {
  Calendar, FileText, Mail, CheckCircle, MessageCircle,
  Filter, Bell, Upload, Folder, Cloud, BarChart2, Zap,
} from "lucide-react";

// ─── Custom Icons ──────────────────────────────────────────────────────────────

const PixIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.7 2.3a1 1 0 00-1.4 0L7.3 6.3a1 1 0 000 1.4l4 4a1 1 0 001.4 0l4-4a1 1 0 000-1.4L12.7 2.3z" />
    <path d="M12.7 16.3a1 1 0 00-1.4 0l-4 4a1 1 0 000 1.4l4 4a1 1 0 001.4 0l4-4a1 1 0 000-1.4l-4-4z" opacity="0.5" />
    <path d="M6.3 7.3L2.3 11.3a1 1 0 000 1.4l4 4" />
    <path d="M17.7 7.3l4 4a1 1 0 010 1.4l-4 4" />
  </svg>
);

const SheetsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
  </svg>
);

const ScanIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 012-2h2" />
    <path d="M17 3h2a2 2 0 012 2v2" />
    <path d="M21 17v2a2 2 0 01-2 2h-2" />
    <path d="M7 21H5a2 2 0 01-2-2v-2" />
    <line x1="7" y1="10" x2="17" y2="10" />
    <line x1="7" y1="14" x2="17" y2="14" />
  </svg>
);

// ─── Icon Map ──────────────────────────────────────────────────────────────────

const IP = { size: 22, strokeWidth: 1.5 };
const iconMap = {
  calendar: <Calendar {...IP} />,
  document: <FileText {...IP} />,
  mail: <Mail {...IP} />,
  check: <CheckCircle {...IP} />,
  message: <MessageCircle {...IP} />,
  filter: <Filter {...IP} />,
  bell: <Bell {...IP} />,
  upload: <Upload {...IP} />,
  folder: <Folder {...IP} />,
  cloud: <Cloud {...IP} />,
  chart: <BarChart2 {...IP} />,
  zap: <Zap {...IP} />,
  pix: <PixIcon />,
  grid: <SheetsIcon />,
  scan: <ScanIcon />,
};

// ─── Workflow Data ─────────────────────────────────────────────────────────────

const WORKFLOWS = [
  {
    title: "Cobrança Automática",
    desc: "Faturamento e cobrança sem intervenção manual",
    modules: [
      { type: "Gatilho", label: "Vencimento", sub: "Agenda detecta", icon: "calendar", trigger: true },
      { type: "Criar", label: "Gerar Boleto", sub: "PDF automático", icon: "document" },
      { type: "Enviar", label: "Cobrar Cliente", sub: "Via Gmail", icon: "mail" },
      { type: "Receber", label: "Pagamento Pix", sub: "Confirmação", icon: "pix" },
      { type: "Validar", label: "Conciliar", sub: "Conferir valores", icon: "check" },
      { type: "Registrar", label: "Atualizar", sub: "Google Sheets", icon: "grid" },
    ],
  },
  {
    title: "Atendimento Automático",
    desc: "Respostas rápidas e encaminhamento inteligente",
    modules: [
      { type: "Gatilho", label: "Mensagem", sub: "WhatsApp", icon: "message", trigger: true },
      { type: "Classificar", label: "Filtrar Pedido", sub: "Por tipo", icon: "filter" },
      { type: "Responder", label: "Resposta IA", sub: "Automática", icon: "zap" },
      { type: "Notificar", label: "Alertar Equipe", sub: "Notificação", icon: "bell" },
    ],
  },
  {
    title: "Relatório Mensal",
    desc: "Dados compilados e enviados automaticamente",
    modules: [
      { type: "Gatilho", label: "Fim do Mês", sub: "Automático", icon: "calendar", trigger: true },
      { type: "Analisar", label: "Compilar Dados", sub: "Múltiplas fontes", icon: "chart" },
      { type: "Enviar", label: "Relatório", sub: "Email para equipe", icon: "mail" },
    ],
  },
  {
    title: "Gestão de Documentos",
    desc: "Receba, organize e armazene automaticamente",
    modules: [
      { type: "Gatilho", label: "Documento", sub: "Recebido por email", icon: "upload", trigger: true },
      { type: "Extrair", label: "Leitura OCR", sub: "Dados do arquivo", icon: "scan" },
      { type: "Organizar", label: "Categorizar", sub: "Auto-classificação", icon: "folder" },
      { type: "Armazenar", label: "Google Drive", sub: "Backup seguro", icon: "cloud" },
      { type: "Notificar", label: "Avisar Equipe", sub: "Notificação", icon: "bell" },
    ],
  },
];

// ─── Timing ────────────────────────────────────────────────────────────────────

const STAGGER = 420;
const HOLD = 3400;
const FADE_TIMEOUT = 700;

// ─── Component ─────────────────────────────────────────────────────────────────

export default function WorkflowAnimation() {
  const [wIdx, setWIdx] = useState(0);
  const [visible, setVisible] = useState(0);
  const [phase, setPhase] = useState("idle");

  const wf = WORKFLOWS[wIdx];
  const total = wf.modules.length;
  const isFading = phase === "fading";

  // Initial delay before first build
  useEffect(() => {
    const t = setTimeout(() => setPhase("building"), 600);
    return () => clearTimeout(t);
  }, []);

  // Animation state machine
  useEffect(() => {
    let t;
    switch (phase) {
      case "building":
        if (visible < total) {
          t = setTimeout(() => setVisible((v) => v + 1), STAGGER);
        } else {
          t = setTimeout(() => setPhase("showing"), 200);
        }
        break;
      case "showing":
        t = setTimeout(() => setPhase("fading"), HOLD);
        break;
      case "fading":
        t = setTimeout(() => {
          setWIdx((i) => (i + 1) % WORKFLOWS.length);
          setVisible(1);
          setPhase("building");
        }, FADE_TIMEOUT);
        break;
      default:
        break;
    }
    return () => clearTimeout(t);
  }, [phase, visible, total]);

  const cardClass = (i) => {
    if (isFading && i < visible) return "wf-card fading";
    if (i < visible) return "wf-card visible";
    return "wf-card";
  };

  const connClass = (i) => {
    if (isFading && i + 1 < visible) return "wf-conn fading";
    if (i + 1 < visible) return "wf-conn visible";
    return "wf-conn";
  };

  return (
    <>
      <style>{CSS}</style>
      <section className="wf-section">
        {/* Header */}
        <div className="wf-header">
          <p className="wf-eyebrow">Como funciona</p>
          <h2 className="wf-title">Automação sob medida</h2>
          <p className="wf-subtitle">
            Combinamos módulos de automação para criar o fluxo ideal para o seu
            negócio — do gatilho à entrega.
          </p>
        </div>

        {/* Current workflow label */}
        <div
          className="wf-wf-label"
          style={{ opacity: phase === "idle" || isFading ? 0 : 1 }}
        >
          <span className="wf-wf-name">{wf.title}</span>
          <span className="wf-wf-desc">{wf.desc}</span>
        </div>

        {/* Pipeline */}
        <div className="wf-pipeline">
          {wf.modules.map((mod, i) => (
            <div className="wf-step" key={`${wIdx}-${i}`}>
              {/* Card */}
              <div
                className={`${cardClass(i)}${mod.trigger ? " trigger" : ""}`}
                style={{ animationDelay: `${i * 0.09}s` }}
              >
                <span className="wf-type">{mod.type}</span>
                <div className="wf-icon">{iconMap[mod.icon]}</div>
                <span className="wf-label">{mod.label}</span>
                <span className="wf-sub">{mod.sub}</span>
              </div>

              {/* Connector */}
              {i < total - 1 && (
                <div
                  className={connClass(i)}
                  style={{ animationDelay: `${(i + 1) * 0.09}s` }}
                >
                  <div className="wf-conn-line" />
                  <svg
                    className="wf-conn-arrow"
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                  >
                    <path
                      d="M1.5 1L5.5 5L1.5 9"
                      stroke="#8b2020"
                      strokeWidth="1.4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {i + 1 < visible && !isFading && (
                    <div className="wf-dot" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress dots */}
        <div className="wf-dots">
          {WORKFLOWS.map((w, i) => (
            <div
              key={i}
              className={`wf-d${i === wIdx ? " active" : ""}`}
              title={w.title}
            />
          ))}
        </div>

        {/* Module count indicator */}
        <p
          className="wf-count"
          style={{ opacity: phase === "idle" || isFading ? 0 : 1 }}
        >
          {total} {total === 1 ? "módulo" : "módulos"} neste fluxo
        </p>
      </section>
    </>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────────

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&family=Source+Sans+3:wght@400;600&display=swap');

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}

:root{
  --bur:#8b2020;
  --bur-h:#6d1919;
  --char:#1A1A1A;
  --gray:#6B6B6B;
  --lg:#F5F5F5;
  --bdr:#E0E0E0;
  --wh:#FFFFFF;
  --hd:'Manrope',sans-serif;
  --bd:'Source Sans 3',sans-serif;
}

/* ── Section ── */
.wf-section{
  background:var(--wh);
  padding:72px 24px 64px;
  display:flex;flex-direction:column;align-items:center;
  min-height:100vh;justify-content:center;
  font-family:var(--bd);color:var(--char);
  overflow:hidden;
}

/* ── Header ── */
.wf-header{text-align:center;margin-bottom:44px;max-width:560px}

.wf-eyebrow{
  font-family:var(--hd);font-size:11px;font-weight:600;
  text-transform:uppercase;letter-spacing:0.12em;
  color:var(--bur);margin-bottom:12px;
}

.wf-title{
  font-family:var(--hd);font-weight:700;font-size:clamp(28px,4vw,38px);
  letter-spacing:-0.025em;color:var(--char);margin-bottom:14px;
  line-height:1.15;
}

.wf-subtitle{font-size:16px;line-height:1.6;color:var(--gray)}

/* ── Workflow Label ── */
.wf-wf-label{
  text-align:center;margin-bottom:36px;
  transition:opacity 0.45s ease;
}
.wf-wf-name{
  display:block;font-family:var(--hd);font-weight:600;
  font-size:17px;color:var(--bur);margin-bottom:3px;
}
.wf-wf-desc{font-size:13px;color:var(--gray)}

/* ── Pipeline ── */
.wf-pipeline{
  display:flex;align-items:center;justify-content:center;
  flex-wrap:nowrap;padding:8px 0;min-height:170px;
}
.wf-step{display:flex;align-items:center}

/* ── Card ── */
.wf-card{
  width:118px;padding:14px 10px 12px;
  display:flex;flex-direction:column;align-items:center;text-align:center;
  border:1px solid var(--bdr);background:var(--wh);
  position:relative;
  opacity:0;transform:translateY(18px);
}

.wf-card.visible{
  opacity:1;transform:translateY(0);
  animation:cardIn .52s cubic-bezier(.16,1,.3,1) backwards;
}
.wf-card.visible:hover{
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(0,0,0,.06);
  transition:transform .2s ease, box-shadow .2s ease;
}

.wf-card.fading{
  opacity:0;transform:translateY(10px);
  transition:opacity .38s ease,transform .38s ease;
}

@keyframes cardIn{
  from{opacity:0;transform:translateY(18px)}
  to{opacity:1;transform:translateY(0)}
}

/* Trigger accent */
.wf-card.trigger{border-left:2.5px solid var(--bur)}

/* Card internals */
.wf-type{
  font-family:var(--hd);font-size:8.5px;font-weight:600;
  text-transform:uppercase;letter-spacing:0.1em;
  color:var(--gray);margin-bottom:10px;
  padding:2px 7px;background:var(--lg);
}
.wf-card.trigger .wf-type{background:var(--bur);color:var(--wh)}

.wf-icon{
  color:var(--bur);margin-bottom:8px;
  display:flex;align-items:center;justify-content:center;height:26px;
}

.wf-label{
  font-family:var(--hd);font-weight:600;font-size:12.5px;
  color:var(--char);margin-bottom:2px;line-height:1.3;
}
.wf-sub{font-size:10.5px;color:var(--gray);line-height:1.3}

/* ── Connector ── */
.wf-conn{
  display:flex;align-items:center;
  width:38px;margin:0 3px;position:relative;
  opacity:0;transform:scaleX(0);transform-origin:left center;
}
.wf-conn.visible{
  opacity:1;transform:scaleX(1);
  animation:connIn .42s cubic-bezier(.16,1,.3,1) backwards;
}
.wf-conn.fading{
  opacity:0;transform:scaleX(.4);
  transition:opacity .3s ease,transform .3s ease;
}

@keyframes connIn{
  from{opacity:0;transform:scaleX(0)}
  to{opacity:1;transform:scaleX(1)}
}

.wf-conn-line{flex:1;height:1.5px;background:var(--bdr)}
.wf-conn-arrow{flex-shrink:0;margin-left:-1px}

/* Flow dot */
.wf-dot{
  position:absolute;width:4px;height:4px;border-radius:50%;
  background:var(--bur);top:50%;transform:translateY(-50%);
  opacity:0;
  animation:flowDot 1.8s ease-in-out .5s infinite;
}
@keyframes flowDot{
  0%{left:0;opacity:0}
  12%{opacity:.75}
  88%{opacity:.75}
  100%{left:calc(100% - 4px);opacity:0}
}

/* ── Dots nav ── */
.wf-dots{display:flex;gap:8px;margin-top:44px}
.wf-d{
  width:7px;height:7px;border-radius:50%;background:var(--bdr);
  transition:all .45s ease;
}
.wf-d.active{background:var(--bur);width:22px;border-radius:4px}

/* ── Count ── */
.wf-count{
  margin-top:14px;font-size:12px;color:var(--gray);
  font-family:var(--hd);font-weight:500;letter-spacing:0.02em;
  transition:opacity .4s ease;
}

/* ── Responsive ── */
@media(max-width:860px){
  .wf-section{padding:56px 16px 48px}
  .wf-card{width:100px;padding:12px 8px 10px}
  .wf-label{font-size:11px}
  .wf-sub{font-size:9.5px}
  .wf-icon svg{width:18px;height:18px}
  .wf-conn{width:28px;margin:0 2px}
}

@media(max-width:600px){
  .wf-pipeline{flex-direction:column}
  .wf-step{flex-direction:column}
  .wf-card{width:140px;padding:14px 12px 12px}
  .wf-label{font-size:12.5px}
  .wf-sub{font-size:10.5px}
  .wf-icon svg{width:22px;height:22px}

  .wf-conn{
    width:2px;height:28px;margin:3px 0;
    flex-direction:column;
    transform-origin:top center;
  }
  .wf-conn-line{width:1.5px;height:100%;flex:1}
  .wf-conn-arrow{transform:rotate(90deg);margin-left:0;margin-top:-2px}

  .wf-dot{
    left:50%!important;transform:translateX(-50%);
    top:auto;
    animation:flowDotV 1.8s ease-in-out .5s infinite;
  }
  @keyframes flowDotV{
    0%{top:0;opacity:0}
    12%{opacity:.75}
    88%{opacity:.75}
    100%{top:calc(100% - 4px);opacity:0}
  }
}
`;
