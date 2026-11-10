// Modal that shows calorie info. Controlled by its parent through the `candy`
// prop (null = hidden) and the onClose callback. Built with Bootstrap modal classes
// and React state, so no Bootstrap JavaScript is needed.
function CandyModal({ candy, onClose }) {
  if (!candy) return null
  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true" onClick={onClose}>
        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{candy.name}</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body text-center">
              <img src={candy.imageUrl} alt={candy.altText} className="img-fluid rounded mb-3" style={{ maxHeight: 180 }} />
              <p className="text-muted mb-2">{candy.description}</p>
              <p className="display-6 fw-bold mb-0">{candy.calories} <small className="fs-6">calories</small></p>
              <p className="small text-muted">per piece</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  )
}
export default CandyModal
