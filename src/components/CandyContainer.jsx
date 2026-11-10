import { useState } from 'react'
import CandyCard from './CandyCard'
import CandyModal from './CandyModal'

// Container component: receives the candy list as a prop, renders one CandyCard
// per candy, and holds the state (`selectedCandy`) that decides which candy the
// modal shows.
function CandyContainer({ candies }) {
  const [selectedCandy, setSelectedCandy] = useState(null)

  return (
    <div className="container py-4">
      <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-5">
        {candies.map((candy) => (
          <div className="col" key={candy.id}>
            <CandyCard candy={candy} onShowCalories={setSelectedCandy} />
          </div>
        ))}
      </div>
      <CandyModal candy={selectedCandy} onClose={() => setSelectedCandy(null)} />
    </div>
  )
}
export default CandyContainer
