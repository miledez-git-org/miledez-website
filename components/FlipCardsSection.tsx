'use client'

import { useState, useEffect } from 'react'

export default function FlipCardsSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [flippedCards, setFlippedCards] = useState([false, false, false])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

    const sequence = async () => {
      await delay(1500)
      setActiveStep(1)
      await delay(2000)
      setFlippedCards([true, false, false])
      await delay(4000)
      setFlippedCards([false, false, false])
      await delay(800)
      setActiveStep(2)
      await delay(2000)
      setFlippedCards([false, true, false])
      await delay(4000)
      setFlippedCards([false, false, false])
      await delay(800)
      setActiveStep(3)
      await delay(2000)
      setFlippedCards([false, false, true])
      await delay(4000)
      setFlippedCards([false, false, false])
      setActiveStep(0)
      await delay(2000)
      sequence()
    }

    sequence()
  }, [])

  const steps = [
    {
      number: '01',
      who: 'VOCÊ',
      frontTitle: 'Descreva',
      frontHighlight: 'o sonho',
      frontSub: '10 minutos',
      backTitle: 'Seu cenário perfeito',
      backDesc: 'O que está travando sua operação? Como seria se esse problema desaparecesse? Quanto tempo sua equipe perde hoje? Você fala — a gente ouve.',
      backStat: '10 min',
      backStatLabel: 'do seu tempo',
    },
    {
      number: '02',
      who: 'NÓS',
      frontTitle: 'Calculamos',
      frontHighlight: 'o retorno',
      frontSub: '48 horas',
      backTitle: 'Proposta sem compromisso',
      backDesc: 'Orçamento transparente. ROI projetado com base em dados reais. Prazo de entrega definido. Você só avança se fizer sentido financeiro.',
      backStat: '48h',
      backStatLabel: 'prazo garantido',
    },
    {
      number: '03',
      who: 'NÓS',
      frontTitle: 'Entregamos',
      frontHighlight: 'funcionando',
      frontSub: '3-7 dias',
      backTitle: 'Solução rodando',
      backDesc: 'Conectamos seus sistemas existentes. Sem projeto de TI. Sem trocar software. Sem interromper operação. Você recebe pronto.',
      backStat: '0',
      backStatLabel: 'horas da sua equipe',
    },
  ]

  return (
    <section
      style={{
        backgroundColor: '#f5f5f5',
        padding: '80px 24px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: '1152px',
          margin: '0 auto 60px',
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <p
          style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#000',
            margin: '0 0 16px',
          }}
        >
          Seu único trabalho?
        </p>
        <h2
          style={{
            fontSize: 'clamp(36px, 6vw, 56px)',
            fontWeight: '700',
            color: '#8b2020',
            margin: '0 0 20px',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}
        >
          Sonhar alto.
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: '#666',
            margin: 0,
          }}
        >
          A gente cuida do resto. Em três passos.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '2000px',
          minHeight: '480px',
          flexWrap: 'wrap',
        }}
      >
        {steps.map((step, index) => {
          const isActive = activeStep === index + 1
          const isPast = activeStep > index + 1
          const isFuture = activeStep < index + 1 || activeStep === 0
          const isFlipped = flippedCards[index]

          const getWidth = () => {
            if (isActive) return '400px'
            if (isPast) return '160px'
            return '200px'
          }

          const getHeight = () => {
            if (isActive) return '450px'
            if (isPast) return '350px'
            return '380px'
          }

          return (
            <div
              key={index}
              style={{
                width: getWidth(),
                height: getHeight(),
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: `rotateX(${isFlipped ? 180 : 0}deg)`,
                opacity: isVisible ? 1 : 0,
                transitionDelay: isVisible ? `${index * 0.1}s` : '0s',
              }}
            >
              {/* Front of card */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backfaceVisibility: 'hidden',
                  backgroundColor: isFuture ? 'rgba(255,255,255,0.6)' : '#fff',
                  border: isFuture ? '2px dashed #ccc' : isPast ? '1px solid #eee' : 'none',
                  boxShadow: isActive
                    ? '0 30px 80px rgba(139, 32, 32, 0.2), 0 15px 30px rgba(0,0,0,0.1)'
                    : isPast
                      ? '0 4px 20px rgba(0,0,0,0.06)'
                      : 'none',
                  padding: isPast ? '24px 20px' : '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.6s ease',
                  overflow: 'hidden',
                }}
              >
                {/* Skeleton pulse effect for future cards */}
                {isFuture && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      animation: 'shimmer 2s infinite',
                    }}
                  />
                )}

                {/* Number */}
                <div
                  style={{
                    fontSize: isPast ? '14px' : isActive ? '16px' : '14px',
                    fontWeight: '700',
                    color: isFuture ? '#ccc' : '#8b2020',
                    marginBottom: isPast ? '12px' : '20px',
                    transition: 'all 0.6s ease',
                  }}
                >
                  {step.number}
                </div>

                {/* Who badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignSelf: 'flex-start',
                    padding: '6px 12px',
                    backgroundColor: isFuture ? 'transparent' : '#f5f5f5',
                    border: isFuture ? '1px dashed #ddd' : 'none',
                    fontSize: '10px',
                    fontWeight: '700',
                    letterSpacing: '0.15em',
                    color: isFuture ? '#ddd' : '#000',
                    marginBottom: isPast ? '16px' : '32px',
                    transition: 'all 0.6s ease',
                  }}
                >
                  {isFuture ? '• • •' : step.who}
                </div>

                {/* Title */}
                {!isPast && (
                  <>
                    <h3
                      style={{
                        fontSize: isActive ? '36px' : '24px',
                        fontWeight: '600',
                        color: isFuture ? '#ddd' : '#000',
                        margin: 0,
                        lineHeight: 1.1,
                        transition: 'all 0.6s ease',
                      }}
                    >
                      {isFuture ? '...' : step.frontTitle}
                    </h3>
                    <h3
                      style={{
                        fontSize: isActive ? '36px' : '24px',
                        fontWeight: '700',
                        color: isFuture ? '#e5e5e5' : '#8b2020',
                        margin: '0 0 auto',
                        lineHeight: 1.1,
                        transition: 'all 0.6s ease',
                      }}
                    >
                      {isFuture ? '...' : step.frontHighlight}
                    </h3>
                  </>
                )}

                {/* Compact title for past cards */}
                {isPast && (
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#000',
                      margin: '0 0 auto',
                      lineHeight: 1.3,
                    }}
                  >
                    {step.frontTitle}
                    <br />
                    <span style={{ color: '#8b2020' }}>{step.frontHighlight}</span>
                  </h3>
                )}

                {/* Time indicator */}
                {!isFuture && (
                  <div
                    style={{
                      borderTop: '1px solid #eee',
                      paddingTop: isPast ? '12px' : '24px',
                      marginTop: isPast ? '0' : '24px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: isPast ? '20px' : isActive ? '32px' : '24px',
                        fontWeight: '700',
                        color: isPast ? '#8b2020' : '#000',
                        transition: 'all 0.6s ease',
                      }}
                    >
                      {step.frontSub}
                    </span>
                  </div>
                )}

                {/* Checkmark for past */}
                {isPast && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#8b2020',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Back of card */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backfaceVisibility: 'hidden',
                  transform: 'rotateX(180deg)',
                  backgroundColor: '#8b2020',
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 30px 80px rgba(139, 32, 32, 0.4)',
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: '20px',
                  }}
                >
                  {step.number}
                </div>

                {/* Back title */}
                <h3
                  style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#fff',
                    margin: '0 0 20px',
                    lineHeight: 1.15,
                  }}
                >
                  {step.backTitle}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.85)',
                    margin: '0 0 auto',
                    lineHeight: 1.7,
                  }}
                >
                  {step.backDesc}
                </p>

                {/* Stat */}
                <div
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.2)',
                    paddingTop: '24px',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '8px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '44px',
                      fontWeight: '700',
                      color: '#fff',
                      lineHeight: 1,
                    }}
                  >
                    {step.backStat}
                  </span>
                  <span
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {step.backStatLabel}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Progress dots */}
      <div
        style={{
          maxWidth: '1152px',
          margin: '60px auto 0',
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
        }}
      >
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: activeStep >= step ? '#8b2020' : '#ddd',
              transition: 'all 0.4s ease',
              transform: activeStep === step ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          maxWidth: '600px',
          margin: '60px auto 0',
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 0.6s',
        }}
      >
        <p
          style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '24px',
            lineHeight: 1.6,
          }}
        >
          Você investe <strong style={{ color: '#000' }}>10 minutos</strong> descrevendo o problema.
          <br />
          Nós investimos <strong style={{ color: '#8b2020' }}>tudo</strong> pra resolver.
        </p>
        <a
          href="#contato"
          style={{
            display: 'inline-block',
            padding: '20px 48px',
            backgroundColor: '#8b2020',
            border: 'none',
            color: '#fff',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 8px 30px rgba(139, 32, 32, 0.3)',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement
            target.style.transform = 'translateY(-3px)'
            target.style.boxShadow = '0 12px 40px rgba(139, 32, 32, 0.4)'
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement
            target.style.transform = 'translateY(0)'
            target.style.boxShadow = '0 8px 30px rgba(139, 32, 32, 0.3)'
          }}
        >
          Descrever meu sonho
        </a>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}
