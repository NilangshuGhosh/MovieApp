
import { Routes,Route } from 'react-router-dom'
import './css/App.css'
import MovieCard from './Components/MovieCard'
import Home from './pages/Home'
import Favorite from './pages/Favorites'
import NavBar from './Components/NavBar'
import { MovieProvider } from './contexts/MovieContext'
function App() {
  

  return (
    <div>  
<NavBar></NavBar>
<main className='main-content'>

<Routes>

<Route path="/"  element={<Home></Home>} ></Route>
<Route path="/favorites" element={<Favorite></Favorite>}></Route>
</Routes>

</main>

{/* conditional rendering
    is rendering if a condition is satisfied.
    {movienumber==1&& <MovieCard/>} 
  -> renders if movie number is 1
*/}

    </div>
  )
}

export default App
