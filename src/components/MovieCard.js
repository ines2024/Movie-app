import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-stars'

function MovieCard({movie}) {
    console.log(movie)
  return (
    <div style={{display:'flex',gap:"20px",marginBottom:"20px"}}>
      <Card style={{ width: '18rem' }}>

      <Card.Img variant="top" src={movie.image}/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}

        </Card.Text>
        
        <ReactStars
  count={5}
  value={movie.rating}
  size={24}
  color2={'#ffd700'} />
          
      </Card.Body>
    </Card>

    <iframe width="560" height="315" src={movie.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default MovieCard