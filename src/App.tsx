import './App.css'
import { HOLIDAYS } from './mocks/Holidays'

const today = new Date()
const nextHoliday = HOLIDAYS.find(holiday => holiday.date > today) || {...HOLIDAYS[0],date: new Date(
  new Date(today).getFullYear(),
  new Date(HOLIDAYS[0].date).getMonth(),
  new Date(HOLIDAYS[0].date).getDate() + 1
)}
console.log(nextHoliday)

const diffTime = nextHoliday.date.getTime() - today.getTime()
const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))
console.log(diffDays)

const rtf = new Intl.RelativeTimeFormat('es-CO', { style: 'short' })

function App() {

  return (
    <main>
      <h1>El proximo festivo  ({nextHoliday.name}) es {rtf.format(diffDays,'days')}</h1>
    </main>
  )
}

export default App
