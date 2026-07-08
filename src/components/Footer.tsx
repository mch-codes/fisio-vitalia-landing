import { Phone, Mail, Clock, MapPin, CalendarCheck } from 'lucide-react'
import { RESERVA_HREF, RESERVA_ES_EXTERNA } from '@/lib/datos'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-white font-bold text-lg">Clínica Fisio Vitalia</h2>
            <p className="mt-1 text-sm text-primary-300">
              Fisioterapia en Chamberí, Madrid.
            </p>

            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href="tel:910456789" className="flex items-center gap-2 hover:text-white">
                <Phone size={16} />
                910 45 67 89
              </a>
              <a
                href="mailto:hola@fisiovitalia.es"
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail size={16} />
                hola@fisiovitalia.es
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Calle de Santa Engracia, 45, 28010 Madrid
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                L-V 9:00-20:00 · S 10:00-14:00
              </span>
            </div>
          </div>

          <div className="sm:text-right">
            <a
              href={RESERVA_HREF}
              target={RESERVA_ES_EXTERNA ? '_blank' : undefined}
              rel={RESERVA_ES_EXTERNA ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 bg-acento-600 hover:bg-acento-700 transition-colors text-white font-semibold px-5 py-3 rounded-xl"
            >
              <CalendarCheck size={18} />
              Reservar primera cita
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-primary-400 text-center">
          © {new Date().getFullYear()} Clínica Fisio Vitalia — Sitio ficticio de
          portfolio, negocio ficticio con fines de demostración.
        </div>
      </div>
    </footer>
  )
}
