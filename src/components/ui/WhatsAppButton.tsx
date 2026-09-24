import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../../data/site'

type WhatsAppButtonProps = {
  label?: string
  compact?: boolean
}

export function WhatsAppButton({
  label = 'Hablemos por WhatsApp',
  compact = false,
}: WhatsAppButtonProps) {
  const href = getWhatsAppUrl()

  return (
    <a
      className={`whatsapp-button${compact ? ' whatsapp-button--compact' : ''}`}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
    >
      <MessageCircle size={compact ? 18 : 20} strokeWidth={2} />

      <span>{label}</span>

      <ArrowUpRight
        className="whatsapp-button__arrow"
        size={compact ? 16 : 18}
      />
    </a>
  )
}