import Hero from '@/components/Hero'
import Servicios from '@/components/Servicios'
import Precios from '@/components/Precios'
import Equipo from '@/components/Equipo'
import FAQ from '@/components/FAQ'
import Ubicacion from '@/components/Ubicacion'
import Footer from '@/components/Footer'
import StickyReservaButton from '@/components/StickyReservaButton'

export default function Home() {
  return (
    <>
      <div className="pb-16 md:pb-0">
        <Hero />
        <Servicios />
        <Precios />
        <Equipo />
        <FAQ />
        <Ubicacion />
        <Footer />
      </div>
      <StickyReservaButton />
    </>
  )
}
