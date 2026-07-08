import { CalendarCheck } from 'lucide-react'
import { RESERVA_HREF, RESERVA_ES_EXTERNA } from '@/lib/datos'

export default function StickyReservaButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <a
        href={RESERVA_HREF}
        target={RESERVA_ES_EXTERNA ? '_blank' : undefined}
        rel={RESERVA_ES_EXTERNA ? 'noopener noreferrer' : undefined}
        className="flex items-center justify-center gap-2 w-full bg-acento-600 py-4 text-white font-semibold text-base"
      >
        <CalendarCheck size={20} />
        Reservar cita
      </a>
    </div>
  )
}
