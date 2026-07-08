import { NEGOCIO, FAQS } from '@/lib/datos'

const SITE_URL = 'https://fisio-vitalia-landing.vercel.app'

interface PostalAddress {
  '@type': 'PostalAddress'
  streetAddress: string
  postalCode: string
  addressLocality: string
  addressCountry: string
}

interface OpeningHoursSpecification {
  '@type': 'OpeningHoursSpecification'
  dayOfWeek: string[]
  opens: string
  closes: string
}

interface MedicalClinicSchema {
  '@context': 'https://schema.org'
  '@type': 'MedicalClinic'
  medicalSpecialty: string
  name: string
  telephone: string
  email: string
  url: string
  address: PostalAddress
  openingHoursSpecification: OpeningHoursSpecification[]
  priceRange: string
}

interface Question {
  '@type': 'Question'
  name: string
  acceptedAnswer: {
    '@type': 'Answer'
    text: string
  }
}

interface FaqPageSchema {
  '@context': 'https://schema.org'
  '@type': 'FAQPage'
  mainEntity: Question[]
}

const medicalClinic: MedicalClinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  medicalSpecialty: 'Physiotherapy',
  name: NEGOCIO.nombre,
  telephone: NEGOCIO.telefonoE164,
  email: NEGOCIO.email,
  url: SITE_URL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: NEGOCIO.direccion.calle,
    postalCode: NEGOCIO.direccion.codigoPostal,
    addressLocality: NEGOCIO.direccion.localidad,
    addressCountry: NEGOCIO.direccion.pais,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  priceRange: '€€',
}

const faqPage: FaqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ pregunta, respuesta }) => ({
    '@type': 'Question',
    name: pregunta,
    acceptedAnswer: {
      '@type': 'Answer',
      text: respuesta,
    },
  })),
}

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalClinic).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPage).replace(/</g, '\\u003c'),
        }}
      />
    </>
  )
}
