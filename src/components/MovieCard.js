import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

const MovieCart = ({ movie }) => {
    return (
        <div className="movie-card">
           <img src={movie.Poster} alt='yo' width="200px"/>
           <h3>{movie.Title}</h3>
           <p className="movie-stars"><StarRatingComponent
              name="rate1" 
              starCount={5}
              value={movie.vote_average}
            /></p>
           
        </div>
    )
}

export default MovieCart
            
