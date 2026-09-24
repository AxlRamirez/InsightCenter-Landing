import type { CSSProperties } from 'react'
import { useInView } from '../../hooks/useInView'

const existing = [
  'ERP',
  'Bases de datos',
  'APIs',
  'Archivos',
  'Reglas de negocio',
  'Procesos operativos',
] as const

const contributes = [
  'Integración',
  'Organización',
  'Trazabilidad',
  'Contexto',
  'Analítica',
  'Preparación para IA',
] as const

const principles = [
  {
    title: 'No reemplaza tus sistemas',
    copy:
      'InsightCenter se integra con las fuentes existentes para aprovechar la información que la empresa ya genera.',
  },
  {
    title: 'No mezcla información sin contexto',
    copy:
      'El origen de los datos, las reglas y las equivalencias permanecen visibles para conservar trazabilidad.',
  },
  {
    title: 'La analítica viene después de integrar',
    copy:
      'Los indicadores y comparaciones se construyen sobre información previamente organizada y validada.',
  },
  {
    title: 'La IA no es el punto de partida',
    copy:
      'Primero se prepara una base confiable. Las capacidades de IA pueden incorporarse posteriormente sobre datos y métricas validadas.',
  },
] as const

const forBusiness = [
  'Una visión más clara de la operación',
  'Información accesible desde un contexto común',
  'Menos dependencia de consolidaciones manuales',
  'Base para analizar diferentes áreas',
] as const

const forTech = [
  'Fuentes identificadas',
  'Integraciones controladas',
  'Reglas y equivalencias explícitas',
  'Trazabilidad',
  'Arquitectura preparada para crecer',
] as const

export function WhySection() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className={`why${inView ? ' is-inview' : ''}`}
      id="beneficios"
      aria-labelledby="why-title"
    >
      <div className="container why__inner">
        <header className="why__intro">
          <p className="why__eyebrow">Una base para decidir mejor</p>

          <h2 className="why__title" id="why-title">
            Las mejores decisiones empiezan con información que puedes entender
            y rastrear.
          </h2>

          <p className="why__lead">
            InsightCenter conecta la información que ya existe en tu empresa
            para organizarla, mantener su contexto y convertirla en una base
            útil para analizar la operación.
          </p>
        </header>

        <blockquote className="why__statement">
          <p>
            Tus sistemas siguen haciendo su trabajo.
            <span> InsightCenter hace que su información pueda trabajar junta.</span>
          </p>
        </blockquote>

        <div className="why__bridge" aria-label="Relación con la infraestructura existente">
          <div className="why__bridge-col">
            <p className="why__bridge-label">Lo que ya existe</p>
            <ul>
              {existing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="why__bridge-mid" aria-hidden="true">
            <span className="why__bridge-line" />
            <span className="why__bridge-mark">InsightCenter</span>
            <span className="why__bridge-line" />
          </div>

          <div className="why__bridge-col why__bridge-col--accent">
            <p className="why__bridge-label">InsightCenter aporta</p>
            <ul>
              {contributes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="why__principles">
          {principles.map((principle, index) => (
            <article
              className={`why__principle${index % 2 === 1 ? ' why__principle--alt' : ''}`}
              key={principle.title}
              style={{ '--i': index } as CSSProperties}
            >
              <span className="why__principle-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="why__principle-body">
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="why__audiences">
          <div className="why__audience">
            <h3>Para el negocio</h3>
            <ul>
              {forBusiness.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="why__audience">
            <h3>Para TI</h3>
            <ul>
              {forTech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
