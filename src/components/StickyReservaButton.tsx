import { CalendarCheck } from 'lucide-react'

export default function StickyReservaButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <a
        href="https://calendly.com/placeholder"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-acento-600 py-4 text-white font-semibold text-base"
      >
        <CalendarCheck size={20} />
        Reservar cita
      </a>
    </div>
  )
}
