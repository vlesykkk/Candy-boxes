// Presentational component: shows ONE candy (name + small image) and a button.
// It owns no state; it just calls onShowCalories(candy) that the parent gave it.
function CandyCard({ candy, onShowCalories }) {
  return (
    <div className="card candy-card h-100 shadow-sm border-0">
      <img src={candy.imageUrl} alt={candy.altText} className="card-img-top candy-img" />
      <div className="card-body d-flex flex-column text-center">
        <h5 className="card-title fw-semibold">{candy.name}</h5>
        <button
          type="button"
          className="btn btn-choc mt-auto"
          onClick={() => onShowCalories(candy)}
        >
          <i className="bi bi-info-circle me-2"></i>Calories
        </button>
      </div>
    </div>
  )
}
export default CandyCard
