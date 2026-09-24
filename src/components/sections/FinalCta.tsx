import { WhatsAppButton } from '../ui/WhatsAppButton'
import { useInView } from '../../hooks/useInView'

export function FinalCta() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className={`final-cta${inView ? ' is-inview' : ''}`}
      id="contacto"
      aria-labelledby="final-cta-title"
    >
      <div className="container final-cta__inner">
        <div className="final-cta__copy">
          <p className="final-cta__eyebrow">Hablemos de tu empresa</p>

          <h2 className="final-cta__title" id="final-cta-title">
            Tu empresa ya tiene los datos.
            <span> Hagamos que trabajen mejor juntos.</span>
          </h2>

          <p className="final-cta__lead">
            Cada empresa trabaja de una forma distinta. Podemos revisar tus
            sistemas, fuentes de información y necesidades para entender cómo
            InsightCenter podría adaptarse a tu operación.
          </p>

          <p className="final-cta__trail" aria-hidden="true">
            Sistemas <span>→</span> Información <span>→</span> InsightCenter
          </p>
        </div>

        <div className="final-cta__action">
          <WhatsAppButton label="Hablar por WhatsApp" />

          <p className="final-cta__note">
            Conversemos sobre tus sistemas, procesos y necesidades de
            información.
          </p>
        </div>
      </div>
    </section>
  )
}
