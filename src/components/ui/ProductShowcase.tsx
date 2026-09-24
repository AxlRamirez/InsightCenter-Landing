export function ProductShowcase() {
  return (
    <figure className="showcase" aria-label="Vista del producto InsightCenter">
      <div className="showcase__window">
        <div className="showcase__bar">
          <img src="/favicon.png" alt="" width={16} height={16} />
          <span>InsightCenter</span>
          <span className="showcase__bar-meta">Aplicación</span>
        </div>

        <div className="showcase__media">
          <img
            src="/images/insightcenter-product.png"
            alt="Pantalla de InsightCenter: acceso a la plataforma de analítica empresarial"
            width={1857}
            height={932}
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </figure>
  )
}
