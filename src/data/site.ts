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
        label: 'Producto',
        href: '#producto',
      },
      {
        label: 'Beneficios',
        href: '#beneficios',
      },
    ],
  
    whatsapp: {
      number: '+50662375946',
      message:
        'Hola, vi InsightCenter y me gustaría conocer cómo podría adaptarse a mi empresa.',
    },
  } as const
  
  export function getWhatsAppUrl() {
    const number = siteConfig.whatsapp.number.replace(/\D/g, '')
  
    if (!number) {
      return '#contacto'
    }
  
    return `https://wa.me/${number}?text=${encodeURIComponent(
      siteConfig.whatsapp.message,
    )}`
  }