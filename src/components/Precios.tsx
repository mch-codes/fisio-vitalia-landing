import { Check, Star } from 'lucide-react'

const precios = [
  {
    concepto: 'Primera cita',
    detalle: 'Valoración, diagnóstico y plan de tratamiento (60 min)',
    precio: '45 €',
    popular: false,
  },
  {
    concepto: 'Sesión de seguimiento',
    detalle: 'Sesión individual de tratamiento (45-50 min)',
    precio: '40 €',
    popular: false,
  },
  {
    concepto: 'Bono 5 sesiones',
    detalle: 'Ahorras 15 € frente al precio por sesión suelta',
    precio: '185 €',
    popular: true,
  },
  {
    concepto: 'Bono 10 sesiones',
    detalle: 'Ahorras 50 € frente al precio por sesión suelta',
    precio: '350 €',
    popular: false,
  },
]

export default function Precios() {
  return (
    <section className="bg-primary-50/60 py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          Precios claros, sin sorpresas
        </h2>
        <p className="mt-2 text-center text-gray-500">
          Sabes exactamente qué pagas antes de venir a la clínica.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {precios.map(({ concepto, detalle, precio, popular }) => (
            <div
              key={concepto}
              className={`relative rounded-2xl border p-6 bg-white ${
                popular
                  ? 'border-acento-400 shadow-md ring-1 ring-acento-200'
                  : 'border-gray-200'
              }`}
            >
              {popular && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 bg-acento-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  <Star size={12} className="fill-current" />
                  Más elegido
                </span>
              )}
              <h3 className="font-semibold text-gray-900">{concepto}</h3>
              <p className="mt-1 text-3xl font-bold text-primary-800">{precio}</p>
              <p className="mt-2 flex items-start gap-1.5 text-sm text-gray-500 leading-relaxed">
                <Check size={16} className="mt-0.5 shrink-0 text-primary-600" />
                {detalle}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-400 text-center">
          Los bonos se abonan y consumen en la propia clínica. Sin permanencia ni
          renovación automática.
        </p>
      </div>
    </section>
  )
}
