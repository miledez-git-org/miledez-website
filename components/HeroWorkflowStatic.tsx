'use client'

import Image from 'next/image'

function FloatingIcon({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <div
      className={`
        absolute ${className}
        w-[42px] h-[42px] bg-white rounded-lg
        shadow-[0_2px_8px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]
        flex items-center justify-center z-10
      `}
    >
      <Image src={src} alt={alt} width={24} height={24} className="shrink-0" />
    </div>
  )
}

function ConnectorPaths() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {/* Card 1 bottom → Card 2 left: down then rounded right elbow */}
      <path
        d="M 105 130 L 105 230 Q 105 245 120 245 L 175 245"
        fill="none"
        stroke="#d4d4d4"
        strokeWidth="1.5"
      />
      {/* Card 2 bottom → Card 3 top: down then rounded left elbow */}
      <path
        d="M 230 290 L 230 355 Q 230 370 215 370 L 135 370"
        fill="none"
        stroke="#d4d4d4"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default function HeroWorkflowStatic() {
  return (
    <div className="w-[285px] h-[360px] sm:w-[323px] sm:h-[408px] lg:w-[380px] lg:h-[480px] mx-auto relative">
      <div className="absolute top-0 left-0 w-[380px] h-[480px] origin-top-left scale-75 sm:scale-[0.85] lg:scale-100">
        <ConnectorPaths />

        {/* Card 1 - Gatilho (top-left) */}
        <div className="absolute top-[45px] left-[25px]">
          <FloatingIcon src="/icons/whatsapp.svg" alt="WhatsApp" className="-top-5 -left-5" />
          <FloatingIcon src="/icons/gmail.svg" alt="Gmail" className="top-0 -right-6" />
          <FloatingIcon src="/icons/google-calendar.svg" alt="Google Calendar" className="-bottom-5 -left-8" />

          <div className="bg-white rounded-xl px-8 py-5 shadow-[0_2px_8px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] border border-neutral-100 text-center w-[170px]">
            <p className="text-base font-semibold text-brand-black font-display">Gatilho</p>
            <p className="text-sm text-neutral-600 mt-1">Evento inicial</p>
          </div>
        </div>

        {/* Card 2 - Processamento (middle-right, offset) */}
        <div className="absolute top-[205px] left-[175px]">
          <FloatingIcon src="/icons/google-sheets.svg" alt="Google Sheets" className="top-3 -left-7" />
          <FloatingIcon src="/icons/excel.svg" alt="Excel" className="-top-5 -right-3" />
          <FloatingIcon src="/icons/notion.svg" alt="Notion" className="-bottom-5 -right-7" />

          <div className="bg-white rounded-xl px-6 py-5 shadow-[0_2px_8px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] border border-neutral-100 text-center w-[170px]">
            <p className="text-base font-semibold text-brand-black font-display">Processamento</p>
            <p className="text-sm text-neutral-600 mt-1">Automação</p>
          </div>
        </div>

        {/* Card 3 - Resultado (bottom-left) */}
        <div className="absolute top-[365px] left-[40px]">
          <FloatingIcon src="/icons/shopify.svg" alt="Shopify" className="-top-5 left-6" />
          <FloatingIcon src="/icons/google-drive.svg" alt="Google Drive" className="top-0 -right-6" />
          <FloatingIcon src="/icons/pix.svg" alt="Pix" className="-bottom-5 -left-5" />

          <div className="bg-white rounded-xl px-8 py-5 shadow-[0_2px_8px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] border border-neutral-100 text-center w-[170px]">
            <p className="text-base font-semibold text-brand-black font-display">Resultado</p>
            <p className="text-sm text-neutral-600 mt-1">Ação executada</p>
          </div>
        </div>
      </div>
    </div>
  )
}
