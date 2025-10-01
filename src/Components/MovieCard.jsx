import React, { useState } from "react";
import '../css/MovieCard.css'
import { useMovieContext } from "../contexts/MovieContext";
function MovieCard({movie}){
 const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id);
function onFavoriteClick(e) {
 e.preventDefault();
if(favorite)removeFromFavorites(movie.id);
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)

}


return (
<div className="movie-card">
<div className="movie-poster">
    <img src={movie.url} alt={movie.title}></img>
<div className="movie-overlay">
      {/* <button className="favorite-btn" onClick={onFavoriteClick}>♡</button> */}
                      <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
                
</div>

</div>

<div className="movie-info" >
    <h3>{movie.title}</h3>
    <p>{movie.release_date}</p>
</div>

</div>
);


}
export default MovieCard;