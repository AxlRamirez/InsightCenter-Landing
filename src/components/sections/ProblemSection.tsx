import {
  Database,
  FileSpreadsheet,
  Link2,
  Network,
  Server,
} from 'lucide-react'
import type { CSSProperties } from 'react'
import { useInView } from '../../hooks/useInView'

const sources = [
  { label: 'ERP', icon: Server },
  { label: 'APIs', icon: Link2 },
  { label: 'Bases de datos', icon: Database },
  { label: 'Archivos', icon: FileSpreadsheet },
  { label: 'Sistemas internos', icon: Network },
] as const

const outcomes = [
  'Información organizada',
  'Trazabilidad',
  'Base para analítica',
] as const

const points = [
  {
    title: 'Información fragmentada',
    copy:
      'Cada sistema muestra una parte distinta de la operación y reunirlas puede requerir trabajo adicional.',
  },
  {
    title: 'Consolidación manual',
    copy:
      'Descargar, copiar y combinar información consume tiempo antes de que el análisis pueda comenzar.',
  },
  {
    title: 'Poca trazabilidad',
    copy:
      'Sin reglas claras resulta difícil identificar de dónde proviene cada dato y cómo fue transformado.',
  },
  {
    title: 'Datos difíciles de utilizar',
    copy:
      'Tener información disponible no significa tener una visión clara para analizar la operación.',
  },
] as const

export function ProblemSection() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`problem${inView ? ' is-inview' : ''}`}
      id="que-es"
      aria-labelledby="problem-title"
    >
      <div className="container problem__inner">
        <header className="problem__intro">
          <p className="problem__eyebrow">
            El problema no es la falta de datos
          </p>

          <h2 className="problem__title" id="problem-title">
            Tu empresa ya genera información.
            <span> El reto es hacer que trabaje junta.</span>
          </h2>

          <p className="problem__lead">
            ERP, APIs, bases de datos, archivos y sistemas internos pueden
            contener partes distintas de la operación. InsightCenter ayuda a
            conectarlas sin perder de vista su origen.
          </p>
        </header>

        <div className="problem__flow" aria-hidden="true">
          <ul className="problem__sources">
            {sources.map(({ label, icon: Icon }, index) => (
              <li
                className="problem__source"
                key={label}
                style={{ '--i': index } as CSSProperties}
              >
                <span className="problem__source-icon">
                  <Icon size={16} strokeWidth={1.75} />
                </span>
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className="problem__rails">
            {sources.map(({ label }, index) => (
              <span
                className="problem__rail"
                key={label}
                style={{ '--i': index } as CSSProperties}
              />
            ))}
          </div>

          <div className="problem__bridge">
            <span className="problem__bridge-line" />
          </div>

          <div className="problem__spine">
            <span className="problem__spine-line" />
            <p className="problem__stage">Información distribuida</p>
            <span className="problem__spine-line problem__spine-line--long" />
          </div>

          <div className="problem__hub">
            <img src="/favicon.png" alt="" width={28} height={28} />
            <strong>InsightCenter</strong>
          </div>

          <div className="problem__spine problem__spine--short">
            <span className="problem__spine-line" />
          </div>

          <ul className="problem__outcomes">
            {outcomes.map((label, index) => (
              <li
                key={label}
                style={{ '--i': index } as CSSProperties}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        <p className="visually-hidden">
          InsightCenter conecta información proveniente de ERP, APIs, bases de
          datos, archivos y sistemas internos para organizarla, mantener
          trazabilidad y prepararla para analítica.
        </p>

        <div className="problem__points">
          {points.map((point, index) => (
            <article
              className="problem__point"
              key={point.title}
              style={{ '--i': index } as CSSProperties}
            >
              <span className="problem__point-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="problem__point-body">
                <h3>{point.title}</h3>
                <p>{point.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
