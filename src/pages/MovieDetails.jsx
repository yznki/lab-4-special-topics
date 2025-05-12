import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"
import {Card} from "react-bootstrap"

const API_KEY = import.meta.env.VITE_MOVIE_DB_API_KEY

export default function MovieDetails() {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => setMovie(res.data))
      .catch(console.error)
  }, [id])

  if (!movie) return <p>Loading...</p>

  return (
    <Card>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.overview}</Card.Text>
        <p>
          <strong>Rating:</strong> {movie.vote_average}
        </p>
      </Card.Body>
    </Card>
  )
}
