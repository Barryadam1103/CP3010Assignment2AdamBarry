import React from "react";
import '../App.css';


const removeMovieById = (id, movieList, setMovieList) => {
      let newMovies = movieList.filter((movie) => movie.id !== id);
      setMovieList(newMovies);          
  }


const HomePage = (props) => {
      
        return(
          <>
            <ui>
              {props.movie.map(movies => [
                <li key = {movies.id}>Name: {movies.name}</li>,
                <li>Release Date: {movies.releaseDate}</li>,
                <li>Actors: {movies.actors}</li>,
                <li>Rating: {movies.rating}</li>,
                <button onClick={() => removeMovieById(movies.id, props.movie, props.setMovies)}>Remove</button>,
                <p><img src={movies.poster} alt="poster"></img></p>
              ])}
            </ui>
          </>
        );
      
    
    
}

export default HomePage;