'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AssessmentTool from '@/components/AssessmentTool'

export default function AvaliacaoContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
        <section className="py-28 md:py-40">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <AssessmentTool />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
