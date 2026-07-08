// Fuente de verdad en código para los datos del negocio, reflejando DATOS.md.
// Los componentes deben importar desde aquí en vez de hardcodear valores.

export const NEGOCIO = {
  nombre: 'Clínica Fisio Vitalia',
  telefono: '910 45 67 89',
  telefonoTel: 'tel:910456789',
  telefonoE164: '+34910456789',
  email: 'hola@fisiovitalia.es',
  direccion: {
    calle: 'Calle de Santa Engracia, 45',
    codigoPostal: '28010',
    localidad: 'Madrid',
    barrio: 'Chamberí',
    pais: 'ES',
  },
  horario: {
    laborable: 'L-V 9:00-20:00',
    sabado: 'S 10:00-14:00',
    domingo: 'Domingos cerrado',
  },
} as const

// Link de reservas (Calendly). Si en el futuro queda vacío, el CTA debe caer
// de vuelta al tel: de la clínica — nunca mostrar un placeholder.
export const RESERVA_URL = 'https://calendly.com/marcin-chrzuszcz/primera-cita-valoracion-inicial'

export const RESERVA_HREF = RESERVA_URL || NEGOCIO.telefonoTel
export const RESERVA_ES_EXTERNA = RESERVA_HREF.startsWith('http')

// Enlace de búsqueda de Google Maps (no el iframe embed, que instala cookies).
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${NEGOCIO.direccion.calle}, ${NEGOCIO.direccion.codigoPostal} ${NEGOCIO.direccion.localidad}`
)}`

export interface FaqItem {
  pregunta: string
  respuesta: string
}

export const FAQS: FaqItem[] = [
  {
    pregunta: '¿Cubre mi seguro médico las sesiones?',
    respuesta:
      'Somos una clínica privada sin concierto directo con aseguradoras, pero emitimos factura detallada para que puedas solicitar el reembolso si tu póliza incluye asistencia con reembolso. Te recomendamos consultarlo con tu compañía antes de la cita.',
  },
  {
    pregunta: '¿Qué llevo a la primera cita?',
    respuesta:
      'Ropa cómoda que te permita moverte, cualquier informe médico o prueba de imagen (radiografía, resonancia) relacionada con tu dolencia, y una toalla si tu sesión es de suelo pélvico.',
  },
  {
    pregunta: '¿Cuánto dura una sesión?',
    respuesta:
      'La primera cita dura unos 60 minutos e incluye valoración y diagnóstico. Las sesiones de seguimiento duran entre 45 y 50 minutos.',
  },
  {
    pregunta: '¿Necesito volante médico?',
    respuesta:
      'No es obligatorio. Puedes venir directamente sin derivación; nosotras hacemos la valoración inicial. Si detectamos que necesitas pruebas complementarias u otra especialidad, te lo indicamos.',
  },
  {
    pregunta: '¿Qué pasa en la primera cita?',
    respuesta:
      'Empezamos con una entrevista sobre tu historial y síntomas, seguida de una exploración física para identificar la causa del problema. Con esa información diseñamos un plan de tratamiento personalizado y, si da tiempo, comenzamos ya con las primeras técnicas.',
  },
]
