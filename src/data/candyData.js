// Images live in src/assets/candy/. Replace the placeholder JPGs with your real
// photos (same file names) and update the calories below from your supplied table.
import plain3 from '../assets/candy/plain3.jpg'
import plaindark from '../assets/candy/plaindark.jpg'
import plaindark2 from '../assets/candy/plaindark2.jpg'
import nutbutter2 from '../assets/candy/nutbutter2.jpg'
import baileys1 from '../assets/candy/baileys1.jpg'
import rum from '../assets/candy/rum.jpg'
import orange from '../assets/candy/orange.jpg'
import coffeecup from '../assets/candy/coffeecup.jpg'
import pistachiocup from '../assets/candy/pistachiocup.jpg'
import toffeecrunch from '../assets/candy/toffeecrunch.jpg'

// NOTE: calories are PLACEHOLDER estimates - replace with the numbers from the shop's table.
const candyData = [
  { id: 1, name: 'Milk Chocolate Square', imageUrl: plain3, altText: 'Milk chocolate square', calories: 90, description: 'Smooth classic milk chocolate.' },
  { id: 2, name: 'Dark Chocolate Square', imageUrl: plaindark, altText: 'Dark chocolate square', calories: 80, description: 'Rich 60% dark chocolate.' },
  { id: 3, name: 'Extra Dark Chocolate', imageUrl: plaindark2, altText: 'Extra dark chocolate piece', calories: 75, description: 'Intense, bittersweet dark chocolate.' },
  { id: 4, name: 'Nut Butter Cup', imageUrl: nutbutter2, altText: 'Chocolate nut butter cup', calories: 110, description: 'Chocolate shell with creamy nut butter.' },
  { id: 5, name: "Baileys Truffle", imageUrl: baileys1, altText: 'Baileys cream truffle', calories: 100, description: 'Irish cream flavored ganache truffle.' },
  { id: 6, name: 'Rum Truffle', imageUrl: rum, altText: 'Rum truffle', calories: 95, description: 'Dark chocolate with a rum-flavored center.' },
  { id: 7, name: 'Orange Chocolate', imageUrl: orange, altText: 'Orange chocolate', calories: 85, description: 'Chocolate with bright orange flavor.' },
  { id: 8, name: 'Coffee Cup', imageUrl: coffeecup, altText: 'Chocolate coffee cup', calories: 105, description: 'Chocolate cup filled with coffee ganache.' },
  { id: 9, name: 'Pistachio Cup', imageUrl: pistachiocup, altText: 'Chocolate pistachio cup', calories: 115, description: 'Chocolate cup with pistachio filling.' },
  { id: 10, name: 'Toffee Crunch', imageUrl: toffeecrunch, altText: 'Toffee crunch chocolate', calories: 120, description: 'Buttery toffee pieces in milk chocolate.' },
]
export default candyData
