//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef } from "react";
import { Link } from "react-router-dom";
const AddMovie = (props) => {

        const movieName = useRef();
        const moviereleaseDate = useRef();
        const movieActors = useRef();
        const movieRating = useRef();
        const moviePoster = useRef();
    
    
        const submit = (event) => {
            event.preventDefault();

            const movieInfo = [];
            props.movie.forEach( movies => {
                movieInfo.push(movies);
            })
            
            const name = movieName.current.value;
            const releaseDate = moviereleaseDate.current.value;
            const actors = movieActors.current.value;
            const rating = movieRating.current.value;
            const poster = moviePoster.current.value;
            movieInfo.push({"name":name, "releaseDate":releaseDate, "actors":actors, "rating":rating, "poster":poster})
            props.setMovies(movieInfo);
           

            movieName.current.value = "";
            moviereleaseDate.current.value = "";
            movieActors.current.value = "";
            movieRating.current.value = "";
            moviePoster.current.value = ""
    
    
    
        }
        return (
            <>
            <Link to="/">Home</Link>
            <form onSubmit={submit}>
                
                <label>Movie Name: <input ref = {movieName}type = "text" required/></label>
                <div>
                    <label>Movie Release Date: <input ref={moviereleaseDate} type = "text" required/></label>
                </div>
                <div>
                    <label>Movie Actors: <input ref={movieActors} type = "text" required/></label>
                </div>
                <div>
                    <label>Movie Rating: <input ref={movieRating} type = "text" required/></label>
                </div>
                <div>
                <label>Choose a Movie Poster</label>
                            <select ref={moviePoster}>
                                <option value="./Shrek_(2001_animated_feature_film).jpg">Shrek</option>
                                <option value="./Mightyducksposter.jpg">Mighty Ducks</option>
                                <option value="./StepbrothersMP08.jpg">Step Brothers</option>
                            </select>
                </div>
                <input type="submit" value="Submit" />

            </form>            
            </>
        
    )};
    





export default AddMovie;