// Simple stat card component
function StatCard({ value, unit, label }: { value: string; unit?: string; label: string }) {
  return (
    <div className="bg-neutral-50 border border-neutral-100 rounded-xl p-7 sm:p-8 text-center">
      <div className="font-manrope text-3xl sm:text-4xl font-bold text-neutral-900 mb-2">
        {value}
        {unit && <span className="text-lg font-medium text-neutral-500 ml-1">{unit}</span>}
      </div>
      <div className="text-sm text-neutral-600">{label}</div>
    </div>
  )
}

export default function ValueProposition() {
  const stats = [
    { value: '3-7', unit: 'dias', label: 'Tempo de implementação' },
    { value: '50+', unit: 'apps', label: 'Integrações nativas' },
    { value: 'R$0', label: 'Investimento inicial' },
    { value: '100%', label: 'Cancele quando quiser' },
  ]

  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-[800px] mx-auto text-center">
        {/* Section header */}
        <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          Resultados em dias, não meses
        </h2>
        <p className="text-neutral-600 text-base sm:text-lg max-w-[500px] mx-auto mb-12">
          Implementação ágil com resultados na primeira semana. Apenas mensalidade, sem investimento inicial.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-[600px] mx-auto mb-12">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} unit={stat.unit} label={stat.label} />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary hover:bg-brand-primary-dark text-white font-medium rounded-lg transition-colors"
          >
            Agendar conversa
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center px-6 py-3 bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 font-medium rounded-lg transition-colors"
          >
            Veja como entregamos
          </a>
        </div>
      </div>
    </div>
  )
}
