import Image from 'next/image'
import { Phone, CalendarCheck, ShieldCheck, Award } from 'lucide-react'
import { RESERVA_HREF, RESERVA_ES_EXTERNA } from '@/lib/datos'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      <Image
        src="/images/hero-fisioterapia.jpg"
        alt="Fisioterapeuta tratando la espalda de un paciente en consulta"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-primary-900/40" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center w-full">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Fisioterapia en Chamberí
            <br />
            <span className="text-primary-200">pide tu primera cita</span>
          </h1>

          <p className="mt-5 text-white/80 text-base md:text-lg max-w-xl mx-auto md:mx-0">
            Marta Delgado y su equipo tratan dolor de espalda, cervicales y
            lesiones deportivas con un plan de tratamiento personalizado desde
            la primera visita.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-primary-200" />
              Fisioterapeutas colegiadas
            </span>
            <span className="flex items-center gap-1.5">
              <Award size={16} className="text-primary-200" />
              Plan personalizado desde la 1ª cita
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-end">
          <a
            href={RESERVA_HREF}
            target={RESERVA_ES_EXTERNA ? '_blank' : undefined}
            rel={RESERVA_ES_EXTERNA ? 'noopener noreferrer' : undefined}
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-acento-600 hover:bg-acento-700 transition-colors text-white font-semibold px-6 py-4 rounded-xl text-lg shadow-lg shadow-primary-900/30"
          >
            <CalendarCheck size={20} />
            Reservar primera cita
          </a>
          <a
            href="tel:910456789"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur transition-colors text-white font-semibold px-6 py-4 rounded-xl text-lg border border-white/30"
          >
            <Phone size={20} />
            910 45 67 89
          </a>
        </div>
      </div>
    </section>
  )
}
