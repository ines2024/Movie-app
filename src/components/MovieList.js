import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies}) {
    
  return (
    <div>
        {movies.map(e=>
           <MovieCard movie={e}/> 
            )}
    </div>
  )
}

export default MovieList