import { WhatsAppButton } from '../ui/WhatsAppButton'
import { ProductShowcase } from '../ui/ProductShowcase'

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow rise rise-1">
            Datos conectados. Decisiones más claras.
          </p>

          <h1 className="hero__title rise rise-2" id="hero-title">
            Conecta la información de tu empresa y entiende mejor tu operación.
          </h1>

          <p className="hero__description rise rise-3">
            InsightCenter integra información de ERP, APIs, bases de datos y
            archivos para organizarla, mantener trazabilidad y convertirla en
            analítica útil para la toma de decisiones.
          </p>

          <div className="hero__actions rise rise-4">
            <WhatsAppButton label="Hablemos por WhatsApp" />
          </div>

          <p className="hero__notes rise rise-5">
            Integración · Trazabilidad · Analítica
          </p>
        </div>

        <div className="hero__visual showcase-enter">
          <ProductShowcase />
        </div>
      </div>
    </section>
  )
}
