import Image from 'next/image'
import { Phone, CalendarCheck, ShieldCheck, Award } from 'lucide-react'
import { RESERVA_HREF, RESERVA_ES_EXTERNA } from '@/lib/datos'

export default function Hero() {
  return (
    <section className="relative bg-primary-50 md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-acento-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center w-full">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-primary-900">
            Fisioterapia en Chamberí
            <br />
            <span className="text-primary-600">pide tu primera cita</span>
          </h1>

          <p className="mt-5 text-gray-600 text-base md:text-lg max-w-xl mx-auto md:mx-0">
            Marta Delgado y su equipo tratan dolor de espalda, cervicales y
            lesiones deportivas con un plan de tratamiento personalizado desde
            la primera visita.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={RESERVA_HREF}
              target={RESERVA_ES_EXTERNA ? '_blank' : undefined}
              rel={RESERVA_ES_EXTERNA ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-center gap-2 bg-acento-600 hover:bg-acento-700 transition-colors text-white font-semibold px-6 py-4 rounded-xl text-lg shadow-lg shadow-acento-900/10"
            >
              <CalendarCheck size={20} />
              Reservar primera cita
            </a>
            <a
              href="tel:910456789"
              className="flex items-center justify-center gap-2 bg-white hover:bg-primary-100 transition-colors text-primary-800 font-semibold px-6 py-4 rounded-xl text-lg border border-primary-200"
            >
              <Phone size={20} />
              910 45 67 89
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-primary-600" />
              Fisioterapeutas colegiadas
            </span>
            <span className="flex items-center gap-1.5">
              <Award size={16} className="text-primary-600" />
              Plan personalizado desde la 1ª cita
            </span>
          </div>
        </div>

        <div className="relative h-80 sm:h-[26rem] md:h-[70vh] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/hero-fisioterapia.jpg"
            alt="Fisioterapeuta tratando la espalda de un paciente en consulta"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
