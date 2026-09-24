export const siteConfig = {
  name: 'InsightCenter',

  navigation: [
    {
      label: 'Qué es',
      href: '#que-es',
    },
    {
      label: 'Cómo funciona',
      href: '#como-funciona',
    },
    {
      label: 'Por qué InsightCenter',
      href: '#beneficios',
    },
  ],

  whatsapp: {
    number: '50662375946',
    message:
      'Hola, vi InsightCenter y me gustaría conocer cómo podría adaptarse a mi empresa.',
  },
} as const

export function getWhatsAppUrl() {
  const number = siteConfig.whatsapp.number.replace(/\D/g, '')

  if (!number) {
    return '#contacto'
  }

  const params = new URLSearchParams({
    phone: number,
    text: siteConfig.whatsapp.message,
  })

  return `https://api.whatsapp.com/send?${params.toString()}`
}
