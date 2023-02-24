import './App.css';
import HomePage from './pages/HomePage';
import AddMovie from './pages/AddMovie';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';




function App() {

  const [movies, setMovies] = useState(null);
      
        useEffect( () => {
          fetch("./movies.json")
          .then( response => response.json() )
          .then( setMovies )
          .catch(e => console.log(e.message))
        }, [])
      
        if (movies == null ) {
          return <h1>Loading.....</h1>
        }
        
      
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path='/' element={<HomePage movie={(movies)} setMovies={(setMovies)} />} />
            <Route path='addmovie' element={<AddMovie movie={(movies)} setMovies={(setMovies)} />} />            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;