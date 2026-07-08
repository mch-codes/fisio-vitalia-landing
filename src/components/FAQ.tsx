'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '@/lib/datos'

export default function FAQ() {
  const [abierta, setAbierta] = useState<number | null>(0)

  return (
    <section className="bg-primary-50/60 py-14 md:py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          Preguntas frecuentes
        </h2>
        <p className="mt-2 text-center text-gray-500">
          Resolvemos las dudas más habituales antes de tu primera visita.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          {FAQS.map(({ pregunta, respuesta }, i) => {
            const abiertaAhora = abierta === i
            return (
              <div
                key={pregunta}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setAbierta(abiertaAhora ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={abiertaAhora}
                >
                  <span className="font-medium text-gray-900">{pregunta}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-primary-600 transition-transform ${
                      abiertaAhora ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {abiertaAhora && (
                  <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
                    {respuesta}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
