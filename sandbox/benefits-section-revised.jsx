import React, { useState } from 'react';

// Icons - outline only, 1.5px stroke, black only
const Icons = {
  Connect: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <line x1="9" y1="11" x2="15" y2="7" />
      <line x1="9" y1="13" x2="15" y2="17" />
    </svg>
  ),
  Custom: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
  Magic: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M17.8 6.2L19 5M12.2 11.8L11 13M12.2 6.2L11 5" />
      <line x1="2" y1="22" x2="22" y2="2" />
    </svg>
  ),
  Speed: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  NoContract: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  Price: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
};

const benefits = [
  {
    id: 1,
    title: 'Sem software novo',
    description: 'Conectamos aos sistemas que você já usa. Nenhuma ferramenta nova para aprender.',
    icon: 'Connect',
  },
  {
    id: 2,
    title: 'Solução sob medida',
    description: 'Automação personalizada para qualquer tipo de negócio e processo.',
    icon: 'Custom',
  },
  {
    id: 3,
    title: 'Você descreve, nós resolvemos',
    description: 'Conte seu problema. Entregamos a solução funcionando.',
    icon: 'Magic',
  },
  {
    id: 4,
    title: 'Dias, não meses',
    description: 'Sua primeira automação pronta e funcionando em dias.',
    icon: 'Speed',
  },
  {
    id: 5,
    title: 'Sem compromisso',
    description: 'Sem custo de desenvolvimento. Sem contratos complicados.',
    icon: 'NoContract',
  },
  {
    id: 6,
    title: 'Preço acessível',
    description: 'Automações a partir de R$900/mês para qualquer empresa.',
    icon: 'Price',
  },
];

// Brand tokens from locked direction
const tokens = {
  fonts: {
    system: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  },
  colors: {
    background: '#ffffff',
    primary: '#1a1a1a',
    body: '#3d3d3d',
    secondary: '#5a5a5a',
    muted: '#7a7a7a',
    accent: '#8b2020',
    border: '#e0e0e0',
  },
  spacing: {
    section: '120px',
    sectionMobile: '80px',
    side: '40px',
    sideMobile: '24px',
  },
};

// ==================== DESIGN 1: Three Columns with Icons ====================
const DesignThreeColumn = () => (
  <section style={{
    background: tokens.colors.background,
    padding: `${tokens.spacing.section} ${tokens.spacing.side}`,
    fontFamily: tokens.fonts.system,
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section header */}
      <div style={{ marginBottom: '80px' }}>
        <h2 style={{
          color: tokens.colors.primary,
          fontSize: '2rem',
          fontWeight: '500',
          letterSpacing: '-0.02em',
          margin: 0,
        }}>
          Por que escolher a mil&dez
        </h2>
      </div>
      
      {/* 3-column grid - no cards, just spacing */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '60px 48px',
      }}>
        {benefits.map((benefit) => {
          const Icon = Icons[benefit.icon];
          return (
            <div key={benefit.id}>
              {/* Icon - black outline only */}
              <div style={{
                width: '32px',
                height: '32px',
                color: tokens.colors.primary,
                marginBottom: '20px',
              }}>
                <Icon />
              </div>
              
              <h3 style={{
                color: tokens.colors.primary,
                fontSize: '1.25rem',
                fontWeight: '500',
                letterSpacing: '-0.01em',
                margin: '0 0 12px 0',
              }}>
                {benefit.title}
              </h3>
              
              <p style={{
                color: tokens.colors.body,
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0,
              }}>
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ==================== DESIGN 2: Numbered List with Dividers ====================
const DesignNumberedList = () => (
  <section style={{
    background: tokens.colors.background,
    padding: `${tokens.spacing.section} ${tokens.spacing.side}`,
    fontFamily: tokens.fonts.system,
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section header */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{
          color: tokens.colors.primary,
          fontSize: '2rem',
          fontWeight: '500',
          letterSpacing: '-0.02em',
          margin: 0,
        }}>
          Por que escolher a mil&dez
        </h2>
      </div>
      
      {/* Numbered list with dividers */}
      <div style={{ maxWidth: '800px' }}>
        {benefits.map((benefit, index) => (
          <div
            key={benefit.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '48px 1fr',
              gap: '24px',
              padding: '32px 0',
              borderTop: index === 0 ? `1px solid ${tokens.colors.border}` : 'none',
              borderBottom: `1px solid ${tokens.colors.border}`,
            }}
          >
            {/* Number - muted */}
            <span style={{
              color: tokens.colors.muted,
              fontSize: '0.9rem',
              fontWeight: '400',
            }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            
            <div>
              <h3 style={{
                color: tokens.colors.primary,
                fontSize: '1.25rem',
                fontWeight: '500',
                letterSpacing: '-0.01em',
                margin: '0 0 8px 0',
              }}>
                {benefit.title}
              </h3>
              
              <p style={{
                color: tokens.colors.body,
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0,
              }}>
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ==================== DESIGN 3: Two Columns with Divider ====================
const DesignTwoColumn = () => (
  <section style={{
    background: tokens.colors.background,
    padding: `${tokens.spacing.section} ${tokens.spacing.side}`,
    fontFamily: tokens.fonts.system,
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Two-column layout: title left, content right */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '300px 1fr',
        gap: '80px',
      }}>
        {/* Left: Section title */}
        <div>
          <h2 style={{
            color: tokens.colors.primary,
            fontSize: '2rem',
            fontWeight: '500',
            letterSpacing: '-0.02em',
            margin: '0 0 16px 0',
            position: 'sticky',
            top: '120px',
          }}>
            Por que escolher a mil&dez
          </h2>
          <p style={{
            color: tokens.colors.secondary,
            fontSize: '1rem',
            lineHeight: '1.6',
            margin: 0,
            position: 'sticky',
            top: '168px',
          }}>
            Automação acessível, sem complicação.
          </p>
        </div>
        
        {/* Right: Benefits in 3-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '48px 40px',
          borderLeft: `1px solid ${tokens.colors.border}`,
          paddingLeft: '80px',
        }}>
          {benefits.map((benefit) => {
            const Icon = Icons[benefit.icon];
            return (
              <div key={benefit.id}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  color: tokens.colors.primary,
                  marginBottom: '16px',
                }}>
                  <Icon />
                </div>
                
                <h3 style={{
                  color: tokens.colors.primary,
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  letterSpacing: '-0.01em',
                  margin: '0 0 8px 0',
                }}>
                  {benefit.title}
                </h3>
                
                <p style={{
                  color: tokens.colors.body,
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

// ==================== DESIGN 4: Compact Grid with Accent Numbers ====================
const DesignCompactGrid = () => (
  <section style={{
    background: tokens.colors.background,
    padding: `${tokens.spacing.section} ${tokens.spacing.side}`,
    fontFamily: tokens.fonts.system,
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section header with bottom border */}
      <div style={{
        marginBottom: '60px',
        paddingBottom: '24px',
        borderBottom: `1px solid ${tokens.colors.border}`,
      }}>
        <h2 style={{
          color: tokens.colors.primary,
          fontSize: '2rem',
          fontWeight: '500',
          letterSpacing: '-0.02em',
          margin: 0,
        }}>
          Por que escolher a mil&dez
        </h2>
      </div>
      
      {/* 3-column grid with workflow-style numbers */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '48px',
      }}>
        {benefits.map((benefit, index) => (
          <div key={benefit.id} style={{ display: 'flex', gap: '16px' }}>
            {/* Workflow number indicator - accent background */}
            <div style={{
              width: '28px',
              height: '28px',
              background: tokens.colors.accent,
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              {index + 1}
            </div>
            
            <div>
              <h3 style={{
                color: tokens.colors.primary,
                fontSize: '1.25rem',
                fontWeight: '500',
                letterSpacing: '-0.01em',
                margin: '0 0 8px 0',
              }}>
                {benefit.title}
              </h3>
              
              <p style={{
                color: tokens.colors.body,
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0,
              }}>
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ==================== DESIGN 5: Alternating Alignment ====================
const DesignAlternating = () => (
  <section style={{
    background: tokens.colors.background,
    padding: `${tokens.spacing.section} ${tokens.spacing.side}`,
    fontFamily: tokens.fonts.system,
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section header - centered */}
      <div style={{ 
        marginBottom: '80px',
        textAlign: 'center',
      }}>
        <h2 style={{
          color: tokens.colors.primary,
          fontSize: '2rem',
          fontWeight: '500',
          letterSpacing: '-0.02em',
          margin: '0 0 12px 0',
        }}>
          Por que escolher a mil&dez
        </h2>
        <p style={{
          color: tokens.colors.secondary,
          fontSize: '1rem',
          margin: 0,
        }}>
          Automação acessível, sem complicação.
        </p>
      </div>
      
      {/* Two rows of 3, separated by divider */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* First row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '48px',
          paddingBottom: '48px',
          borderBottom: `1px solid ${tokens.colors.border}`,
        }}>
          {benefits.slice(0, 3).map((benefit) => {
            const Icon = Icons[benefit.icon];
            return (
              <div key={benefit.id}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  color: tokens.colors.primary,
                  marginBottom: '20px',
                }}>
                  <Icon />
                </div>
                
                <h3 style={{
                  color: tokens.colors.primary,
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  letterSpacing: '-0.01em',
                  margin: '0 0 12px 0',
                }}>
                  {benefit.title}
                </h3>
                
                <p style={{
                  color: tokens.colors.body,
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Second row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '48px',
        }}>
          {benefits.slice(3, 6).map((benefit) => {
            const Icon = Icons[benefit.icon];
            return (
              <div key={benefit.id}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  color: tokens.colors.primary,
                  marginBottom: '20px',
                }}>
                  <Icon />
                </div>
                
                <h3 style={{
                  color: tokens.colors.primary,
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  letterSpacing: '-0.01em',
                  margin: '0 0 12px 0',
                }}>
                  {benefit.title}
                </h3>
                
                <p style={{
                  color: tokens.colors.body,
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

// ==================== Main App ====================
export default function BenefitsSectionDesigns() {
  const [activeDesign, setActiveDesign] = useState(1);
  
  const designs = [
    { id: 1, name: 'Three Column', component: DesignThreeColumn },
    { id: 2, name: 'Numbered List', component: DesignNumberedList },
    { id: 3, name: 'Two Column Split', component: DesignTwoColumn },
    { id: 4, name: 'Accent Numbers', component: DesignCompactGrid },
    { id: 5, name: 'Row Divider', component: DesignAlternating },
  ];
  
  const ActiveComponent = designs.find(d => d.id === activeDesign)?.component || DesignThreeColumn;
  
  return (
    <div style={{ 
      background: tokens.colors.background, 
      minHeight: '100vh',
      fontFamily: tokens.fonts.system,
    }}>
      {/* Design Selector */}
      <div style={{
        position: 'sticky',
        top: 0,
        background: tokens.colors.background,
        borderBottom: `1px solid ${tokens.colors.border}`,
        padding: '16px 40px',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
      }}>
        <span style={{
          color: tokens.colors.muted,
          fontSize: '0.9rem',
          marginRight: '16px',
          display: 'flex',
          alignItems: 'center',
        }}>
          Design:
        </span>
        {designs.map((design) => (
          <button
            key={design.id}
            onClick={() => setActiveDesign(design.id)}
            style={{
              background: activeDesign === design.id ? tokens.colors.accent : 'transparent',
              color: activeDesign === design.id ? '#fff' : tokens.colors.secondary,
              border: 'none',
              padding: '8px 16px',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit',
            }}
          >
            {design.name}
          </button>
        ))}
      </div>
      
      {/* Active Design */}
      <ActiveComponent />
      
      {/* Brand compliance note */}
      <div style={{
        padding: '40px',
        borderTop: `1px solid ${tokens.colors.border}`,
        textAlign: 'center',
      }}>
        <p style={{
          color: tokens.colors.muted,
          fontSize: '0.75rem',
          margin: 0,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          All designs follow brand-direction-locked.md
        </p>
        <p style={{
          color: tokens.colors.muted,
          fontSize: '0.8rem',
          margin: '8px 0 0 0',
        }}>
          White background · System fonts · No cards · 1px borders · Black icons only
        </p>
      </div>
    </div>
  );
}
