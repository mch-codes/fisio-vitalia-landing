'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const preguntas = [
  {
    pregunta: '¿Cubre mi seguro médico las sesiones?',
    respuesta:
      'Somos una clínica privada sin concierto directo con aseguradoras, pero emitimos factura detallada para que puedas solicitar el reembolso si tu póliza incluye asistencia con reembolso. Te recomendamos consultarlo con tu compañía antes de la cita.',
  },
  {
    pregunta: '¿Qué llevo a la primera cita?',
    respuesta:
      'Ropa cómoda que te permita moverte, cualquier informe médico o prueba de imagen (radiografía, resonancia) relacionada con tu dolencia, y una toalla si tu sesión es de suelo pélvico.',
  },
  {
    pregunta: '¿Cuánto dura una sesión?',
    respuesta:
      'La primera cita dura unos 60 minutos e incluye valoración y diagnóstico. Las sesiones de seguimiento duran entre 45 y 50 minutos.',
  },
  {
    pregunta: '¿Necesito volante médico?',
    respuesta:
      'No es obligatorio. Puedes venir directamente sin derivación; nosotras hacemos la valoración inicial. Si detectamos que necesitas pruebas complementarias u otra especialidad, te lo indicamos.',
  },
  {
    pregunta: '¿Qué pasa en la primera cita?',
    respuesta:
      'Empezamos con una entrevista sobre tu historial y síntomas, seguida de una exploración física para identificar la causa del problema. Con esa información diseñamos un plan de tratamiento personalizado y, si da tiempo, comenzamos ya con las primeras técnicas.',
  },
]

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
          {preguntas.map(({ pregunta, respuesta }, i) => {
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
