interface ConfirmModalProps {
    title?: string
    description?: string
    onConfirm: () => void
    onCancel: () => void
  }
  
  export function ConfirmModal({
    title = 'Confirmar ação',
    description = 'Tem certeza que deseja continuar?',
    onConfirm,
    onCancel,
  }: ConfirmModalProps) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>{title}</h2>
          <p>{description}</p>
  
          <div className="actions-row">
            <button className="btn secondary" onClick={onCancel}>
              Cancelar
            </button>
  
            <button className="btn danger" onClick={onConfirm}>
              Excluir
            </button>
          </div>
        </div>
      </div>
    )
  }