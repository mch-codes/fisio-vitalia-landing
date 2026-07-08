import Image from 'next/image'
import { MapPin, Clock, Train, ExternalLink } from 'lucide-react'
import { GOOGLE_MAPS_URL } from '@/lib/datos'

export default function Ubicacion() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-14 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
        Dónde estamos
      </h2>
      <p className="mt-2 text-center text-gray-500">
        En pleno Chamberí, a un paso del metro.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 items-start">
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block rounded-2xl overflow-hidden border border-gray-200 aspect-[4/3]"
          aria-label="Abrir la ubicación de Clínica Fisio Vitalia en Google Maps (se abre en una pestaña nueva)"
        >
          <Image
            src="/images/mapa-ubicacion.svg"
            alt="Mapa estilizado del barrio de Chamberí, Madrid, señalando la ubicación de Clínica Fisio Vitalia"
            fill
            unoptimized
            className="object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
            <span className="flex items-center gap-2 bg-white/95 text-primary-800 text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
              <ExternalLink size={16} />
              Abrir en Google Maps
            </span>
          </span>
        </a>

        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Dirección</h3>
              <p className="mt-1 text-sm text-gray-500">
                Calle de Santa Engracia, 45
                <br />
                28010 Madrid (Chamberí)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
              <Train size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Cómo llegar</h3>
              <p className="mt-1 text-sm text-gray-500">
                Metro Iglesia (Línea 1), a 4 min andando
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Horario</h3>
              <p className="mt-1 text-sm text-gray-500">
                Lunes a viernes: 9:00 - 20:00
                <br />
                Sábados: 10:00 - 14:00
                <br />
                Domingos: cerrado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
