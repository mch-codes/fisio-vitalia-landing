import { Activity, Dumbbell, Syringe, HeartHandshake } from 'lucide-react'

const servicios = [
  {
    icon: Activity,
    titulo: 'Fisioterapia general',
    desc: 'Tratamiento de dolores de espalda, cervicales y contracturas derivados de posturas mantenidas en el trabajo de oficina. Combinamos terapia manual, ejercicio terapéutico y educación postural.',
    paraQuien: 'Oficinistas y personas con dolor crónico o mala postura en el día a día.',
  },
  {
    icon: Dumbbell,
    titulo: 'Fisioterapia deportiva',
    desc: 'Prevención y recuperación de lesiones por sobrecarga, esguinces y tendinopatías asociadas a la actividad física, con readaptación al esfuerzo progresiva.',
    paraQuien: 'Runners y personas activas que quieren volver a entrenar sin recaídas.',
  },
  {
    icon: Syringe,
    titulo: 'Punción seca',
    desc: 'Técnica invasiva con aguja fina para desactivar puntos gatillo miofasciales y aliviar la tensión muscular profunda, combinada con otras técnicas manuales.',
    paraQuien: 'Personas con contracturas persistentes que no mejoran solo con masaje o estiramientos.',
  },
  {
    icon: HeartHandshake,
    titulo: 'Suelo pélvico',
    desc: 'Valoración y reeducación de la musculatura del suelo pélvico para prevenir o tratar molestias asociadas al posparto o a la actividad deportiva de impacto.',
    paraQuien: 'Mujeres en el posparto y deportistas con molestias relacionadas con el suelo pélvico.',
  },
]

export default function Servicios() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-14 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
        Nuestros servicios
      </h2>
      <p className="mt-2 text-center text-gray-500 max-w-xl mx-auto">
        Un plan de tratamiento adaptado a tu caso, no una sesión genérica.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {servicios.map(({ icon: Icon, titulo, desc, paraQuien }) => (
          <div
            key={titulo}
            className="rounded-2xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-md transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center">
              <Icon size={22} />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">{titulo}</h3>
            <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{desc}</p>
            <p className="mt-3 text-sm text-primary-700 leading-relaxed">
              <span className="font-medium">Para quién es:</span> {paraQuien}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
