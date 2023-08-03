import { Header } from './components/Header'
import { List } from './components/List'
import './css/main.css'

export function App() {
  return (
    <div>
      <Header />
      <div className='max-w-3xl my-8 mx-auto px-4'>
        <List />
      </div>
    </div>
  )
}
