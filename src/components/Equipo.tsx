import Image from 'next/image'

const equipo = [
  {
    nombre: 'Marta Delgado',
    especialidad: 'Directora clínica · Fisioterapia general y deportiva',
    colegiada: 'Colegiada nº 12345 CPFCM',
    foto: '/images/avatar-md.svg',
  },
  {
    nombre: 'Laura Ibáñez',
    especialidad: 'Fisioterapia general y punción seca',
    colegiada: 'Colegiada nº 23456 CPFCM',
    foto: '/images/avatar-li.svg',
  },
  {
    nombre: 'Sara Molina',
    especialidad: 'Suelo pélvico y fisioterapia general',
    colegiada: 'Colegiada nº 34567 CPFCM',
    foto: '/images/avatar-sm.svg',
  },
]

export default function Equipo() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-14 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
        Nuestro equipo
      </h2>
      <p className="mt-2 text-center text-gray-500 max-w-xl mx-auto">
        Tres fisioterapeutas colegiadas, cada una con su especialidad.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {equipo.map(({ nombre, especialidad, colegiada, foto }) => (
          <div key={nombre} className="text-center">
            <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-primary-50">
              <Image
                src={foto}
                alt={`Foto de ${nombre}, fisioterapeuta en Clínica Fisio Vitalia`}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">{nombre}</h3>
            <p className="mt-1 text-sm text-gray-500 leading-relaxed">{especialidad}</p>
            <p className="mt-1 text-xs text-primary-700">{colegiada}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
