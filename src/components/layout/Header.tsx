import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { WhatsAppButton } from '../ui/WhatsAppButton'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className="site-header header-enter">
      <div className="container site-header__bar">
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

        <nav className="site-header__nav" aria-label="Navegación principal">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <WhatsAppButton compact label="WhatsApp" />
          <button
            className="site-header__toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="navegacion-movil"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="visually-hidden">
              {menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            </span>
          </button>
        </div>
      </div>

      <div className="container">
        <nav
          id="navegacion-movil"
          className={`site-header__panel${menuOpen ? ' is-open' : ''}`}
          aria-label="Navegación móvil"
          hidden={!menuOpen}
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
