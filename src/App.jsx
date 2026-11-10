import CandyContainer from './components/CandyContainer'
import candyData from './data/candyData'

function App() {
  return (
    <div className="min-vh-100">
      <header className="text-center text-white py-4" style={{ background: '#3f2415' }}>
        <h1 className="h2 mb-1"><i className="bi bi-gift me-2"></i>Indy Chocolate Shop</h1>
        <p className="mb-0 opacity-75">Indianapolis, IN &middot; Pick a candy to see its calories</p>
      </header>
      <CandyContainer candies={candyData} />
    </div>
  )
}
export default App
