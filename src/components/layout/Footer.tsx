import { siteConfig } from '../../data/site'
import { WhatsAppButton } from '../ui/WhatsAppButton'

export function Footer() {
  const year = 2026

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <a className="brand" href="#inicio" aria-label="InsightCenter, inicio">
          <img
            className="brand__mark"
            src="/favicon.png"
            alt=""
            width={36}
            height={36}
          />
          <span className="brand__text">
            <span className="brand__name">InsightCenter</span>
            <span className="brand__tagline">Analítica empresarial</span>
          </span>
        </a>

        <nav className="site-footer__nav" aria-label="Navegación del pie">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__contact">
          <WhatsAppButton compact label="WhatsApp" />
        </div>
      </div>

      <div className="container site-footer__legal">
        <p>© {year} InsightCenter by kaddev</p>
      </div>
    </footer>
  )
}
