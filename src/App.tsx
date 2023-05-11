import './App.css'
import { HOLIDAYS } from './mocks/Holidays'

const today = new Date()
const nextHoliday = HOLIDAYS.find(holiday => new Date(holiday.date) > today) || {...HOLIDAYS[0],date: new Date(
  new Date(today).getFullYear(),
  new Date(HOLIDAYS[0].date).getMonth(),
  new Date(HOLIDAYS[0].date).getDate() + 1
)}
console.log(nextHoliday)

function App() {

  return (
    <main>
      <h1>{0} dias</h1>
    </main>
  )
}

export default App
