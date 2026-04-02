CREATE TABLE IF NOT EXISTS assessment_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  empresa TEXT,
  setor TEXT NOT NULL,
  gargalo TEXT NOT NULL,
  ferramentas TEXT,
  resultado_ai JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  converted BOOLEAN DEFAULT FALSE,
  notes TEXT
);

CREATE INDEX idx_assessment_leads_email ON assessment_leads(email);
CREATE INDEX idx_assessment_leads_setor ON assessment_leads(setor);
CREATE INDEX idx_assessment_leads_created ON assessment_leads(created_at DESC);
