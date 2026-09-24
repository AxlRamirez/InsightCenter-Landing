import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { ProcessVisual } from '../ui/ProcessVisual'

const LAST_STEP_INDEX = 4

const steps = [
  {
    title: 'Conecta tus fuentes',
    text:
      'ERP, APIs, bases de datos y archivos pueden integrarse sin modificar los sistemas donde se originan los datos.',
    meta: ['Fuentes autorizadas', 'Acceso controlado'],
  },
  {
    title: 'Organiza la información',
    text:
      'Los datos se estructuran manteniendo los valores de origen y aplicando reglas conocidas.',
    meta: ['Origen preservado', 'Reglas explícitas'],
  },
  {
    title: 'Construye una visión común',
    text:
      'Las equivalencias entre sistemas permiten relacionar información sin asumir que códigos similares representan lo mismo.',
    meta: ['Equivalencias', 'Trazabilidad'],
  },
  {
    title: 'Convierte datos en información útil',
    text:
      'Los módulos y métricas presentan ventas, inventario, producción, clientes y otras áreas bajo un contexto claro.',
    meta: ['Métricas', 'Contexto de negocio'],
  },
  {
    title: 'Prepara la base para IA',
    text:
      'Una vez validados los datos y las métricas, la plataforma queda preparada para incorporar futuras capacidades de IA sin sustituir el proceso de integración.',
    meta: ['Datos preparados', 'IA futura'],
  },
] as const

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLLIElement | null)[]>([])
  const endSentinelRef = useRef<HTMLDivElement | null>(null)
  const intersectingStepsRef = useRef(new Set<number>())
  const sentinelVisibleRef = useRef(false)

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLLIElement[]
    const sentinel = endSentinelRef.current

    if (!nodes.length) {
      return
    }

    const syncActiveStep = () => {
      if (sentinelVisibleRef.current) {
        setActiveStep(LAST_STEP_INDEX)
        return
      }

      if (intersectingStepsRef.current.size === 0) {
        return
      }

      setActiveStep(Math.max(...intersectingStepsRef.current))
    }

    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(
            (entry.target as HTMLElement).dataset.stepIndex,
          )

          if (Number.isNaN(index)) {
            return
          }

          if (entry.isIntersecting) {
            intersectingStepsRef.current.add(index)
          } else {
            intersectingStepsRef.current.delete(index)
          }
        })

        syncActiveStep()
      },
      {
        root: null,
        rootMargin: '-28% 0px -42% 0px',
        threshold: [0, 0.25, 0.5, 0.75],
      },
    )

    nodes.forEach((node) => stepObserver.observe(node))

    let sentinelObserver: IntersectionObserver | undefined

    if (sentinel) {
      sentinelObserver = new IntersectionObserver(
        ([entry]) => {
          sentinelVisibleRef.current = entry.isIntersecting
          syncActiveStep()
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0,
        },
      )

      sentinelObserver.observe(sentinel)
    }

    return () => {
      stepObserver.disconnect()
      sentinelObserver?.disconnect()
    }
  }, [])

  return (
    <section
      className="process"
      id="como-funciona"
      aria-labelledby="process-title"
    >
      <div className="container process__shell">
        <header className="process__intro">
          <p className="process__eyebrow">De la fuente al análisis</p>

          <h2 className="process__title" id="process-title">
            Un camino claro desde tus sistemas hasta la información que
            necesitas.
          </h2>

          <p className="process__lead">
            InsightCenter conserva el origen de los datos, aplica reglas
            explícitas y construye una base confiable antes de generar análisis.
          </p>
        </header>

        <div className="process__layout">
          <ol className="process__steps">
            {steps.map((step, index) => (
              <li
                className={`process__step${activeStep === index ? ' is-active' : ''}`}
                key={step.title}
                data-step-index={index}
                ref={(node) => {
                  stepRefs.current[index] = node
                }}
                style={{ '--i': index } as CSSProperties}
              >
                <div className="process__marker" aria-hidden="true">
                  <span className="process__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="process__rail" />
                </div>

                <div className="process__body">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>

                  <ul className="process__meta">
                    {step.meta.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="process__mobile-visual">
                    <ProcessVisual activeStep={index} />
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <aside className="process__sticky">
            <ProcessVisual activeStep={activeStep} />
          </aside>
        </div>

        <div
          ref={endSentinelRef}
          className="process__end-sentinel"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
