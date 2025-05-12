import {useEffect, useState} from "react"
import axios from "axios"
import {Card, Col, Row} from "react-bootstrap"
import {Link} from "react-router-dom"

const API_KEY = import.meta.env.VITE_MOVIE_DB_API_KEY

export default function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => setMovies(res.data.results))
      .catch(console.error)
  }, [])

  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {movies.map((movie) => (
        <Col key={movie.id}>
          <Card as={Link} to={`/movies/${movie.id}`} className="h-100 text-decoration-none text-dark">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
