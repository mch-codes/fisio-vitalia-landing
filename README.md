# Clínica Fisio Vitalia

Landing page estática para un cliente ficticio: una clínica de fisioterapia en
Chamberí, Madrid. Proyecto de portfolio freelance — negocio y datos ficticios,
sin fines comerciales reales.

[![Demo](https://img.shields.io/badge/-Demo-10b981?style=flat-square&logo=vercel&logoColor=white)](https://fisio-vitalia-landing.vercel.app)

## Objetivo

Conseguir reservas de primera cita para una clínica dirigida por Marta,
fisioterapeuta con clínica propia y 2 empleadas. Clientela principal:
oficinistas con dolor de espalda y runners. A diferencia de un negocio de
urgencias, aquí el usuario compara varias clínicas antes de decidir, así que
la página prioriza transmitir confianza y responder dudas antes que presionar.

## Stack

- [Next.js](https://nextjs.org/) 14+ (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) para iconos
- Exportación 100% estática (`output: 'export'`), sin backend
- Imágenes con `next/image` (`unoptimized: true`)
- Deploy en [Vercel](https://vercel.com/)

## Estructura

```
src/
  app/
    layout.tsx      # Metadata (SEO, OG), fuente Inter y JsonLd
    page.tsx         # Orden de secciones de la página
  components/
    Hero.tsx
    Servicios.tsx
    Precios.tsx
    Equipo.tsx
    FAQ.tsx
    Ubicacion.tsx
    Footer.tsx
    StickyReservaButton.tsx
    JsonLd.tsx        # Structured data (MedicalClinic + FAQPage)
  lib/
    datos.ts          # Datos del negocio en código (URL de reserva, FAQ, etc.)
```

Los textos y datos del negocio ficticio (precios, horario, dirección,
equipo, etc.) están documentados en [DATOS.md](./DATOS.md) y reflejados en
código en [src/lib/datos.ts](./src/lib/datos.ts), que es lo que importan los
componentes (CTAs de reserva, FAQ, JSON-LD) para no repetir valores.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Genera el sitio estático en `out/`.

## Deploy

Proyecto conectado a Vercel; cualquier push a `main` despliega
automáticamente. Deploy manual:

```bash
npx vercel --prod
```

---

*Proyecto ficticio de portfolio. Ninguno de los datos (clínica, personas,
dirección, teléfono) corresponde a un negocio real.*
