import React from "react";
import '../App.css';


const removeMovieById = (name, movieList, setMovieList) => {
      let newMovies = movieList.filter((movie) => movie.name !== name);
      setMovieList(newMovies);

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("name", name);


      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };


      fetch("/removeMovie", requestOptions)
      .then(Response => Response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      

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
                <button onClick={() => removeMovieById(movies.name, props.movie, props.setMovies)}>Remove</button>,
                <p><img src={movies.poster} alt="poster"></img></p>
              ])}
            </ui>
          </>
        );
      
    
    
}

export default HomePage;