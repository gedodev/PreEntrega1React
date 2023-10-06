import NavBar from './components/nav-bar/NavBar'
import ItemList from './components/items-list/ItemsList'


import './App.css'

function App() {
  return (
    <>
      <header>
        <NavBar/> 
      </header>
      <main className='mainContent'>
        <ItemList/>
        <ItemList/>
        <ItemList/>
        <ItemList/>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
