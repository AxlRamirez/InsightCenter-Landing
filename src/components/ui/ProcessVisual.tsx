import {
  Database,
  FileSpreadsheet,
  Link2,
  Server,
} from 'lucide-react'

type ProcessVisualProps = {
  activeStep: number
}

export function ProcessVisual({ activeStep }: ProcessVisualProps) {
  return (
    <div className="process-visual" aria-hidden="true">
      <div
        className={`process-visual__panel${activeStep === 0 ? ' is-active' : ''}`}
      >
        <VisualConnect />
      </div>

      <div
        className={`process-visual__panel${activeStep === 1 ? ' is-active' : ''}`}
      >
        <VisualOrganize />
      </div>

      <div
        className={`process-visual__panel${activeStep === 2 ? ' is-active' : ''}`}
      >
        <VisualRelate />
      </div>

      <div
        className={`process-visual__panel${activeStep === 3 ? ' is-active' : ''}`}
      >
        <VisualAnalyze />
      </div>

      <div
        className={`process-visual__panel${activeStep === 4 ? ' is-active' : ''}`}
      >
        <VisualPrepareAI />
      </div>
    </div>
  )
}

function VisualConnect() {
  const sources = [
    { label: 'ERP', icon: Server },
    { label: 'API', icon: Link2 },
    { label: 'DB', icon: Database },
    { label: 'Archivo', icon: FileSpreadsheet },
  ]

  return (
    <div className="pv-connect">
      <div className="pv-connect__sources">
        {sources.map(({ label, icon: Icon }) => (
          <div className="pv-connect__source" key={label}>
            <span className="pv-connect__icon">
              <Icon size={15} strokeWidth={1.75} />
            </span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="pv-connect__lines">
        {sources.map(({ label }) => (
          <span key={label} />
        ))}
      </div>

      <div className="pv-connect__hub">
        <img src="/favicon.png" alt="" width={22} height={22} />
        <span>InsightCenter</span>
      </div>
    </div>
  )
}

function VisualOrganize() {
  return (
    <div className="pv-organize">
      <div className="pv-organize__raw" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="pv-organize__arrow" />

      <div className="pv-organize__structured">
        <div className="pv-organize__row">
          <span />
          <span />
          <span />
        </div>
        <div className="pv-organize__row">
          <span />
          <span />
          <span />
        </div>
        <div className="pv-organize__row">
          <span />
          <span />
          <span />
        </div>
      </div>

      <ul className="pv-organize__labels">
        <li>Origen</li>
        <li>Reglas</li>
        <li>Estructura</li>
      </ul>
    </div>
  )
}

function VisualRelate() {
  return (
    <div className="pv-relate">
      <div className="pv-relate__systems">
        <div className="pv-relate__system">
          <strong>Sistema A</strong>
          <code>ABC-01</code>
        </div>
        <div className="pv-relate__system">
          <strong>Sistema B</strong>
          <code>PRD-100</code>
        </div>
      </div>

      <div className="pv-relate__links">
        <span />
        <span />
      </div>

      <div className="pv-relate__identity">
        <span className="pv-relate__tag">Equivalencia</span>
        <strong>Identidad unificada</strong>
        <p>Relación explícita entre códigos</p>
      </div>
    </div>
  )
}

function VisualAnalyze() {
  const domains = ['Ventas', 'Inventario', 'Producción', 'Clientes']

  return (
    <div className="pv-analyze">
      <div className="pv-analyze__domains">
        {domains.map((label) => (
          <div className="pv-analyze__domain" key={label}>
            {label}
          </div>
        ))}
      </div>

      <div className="pv-analyze__bridge">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="pv-analyze__metrics">
        <strong>Capa de métricas</strong>
        <div className="pv-analyze__bars" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}

function VisualPrepareAI() {
  return (
    <div className="pv-ai">
      <div className="pv-ai__stack">
        <div className="pv-ai__layer">Datos validados</div>
        <span className="pv-ai__connector" />
        <div className="pv-ai__layer">Métricas</div>
        <span className="pv-ai__connector" />
        <div className="pv-ai__layer pv-ai__layer--final">IA futura</div>
      </div>

      <p className="pv-ai__note">Después de validar los datos</p>
    </div>
  )
}
