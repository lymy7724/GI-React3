import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './Medium.css'

export default function Movie() {
    const {id} = useParams()
    const [movie, setMovie] = useState({})

    useEffect(()=> {
        axios
        .get(`https://api.themoviedb.org/3/movie/${id}?&language=en-US&page=1&api_key=1b66c7913a4b8a373f3a18ed478f32fa`)
        .then((res) => {
            console.log(res.data);
            setMovie(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
      })

  return (
    <div className='movie-container'>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" className='movie-poster'/>
      <div className='movie-info'>
      <p className='movie-title'>{movie.title}</p>
      <p className='movie-overview'>{movie.overview}</p>
      <p>Released date: {movie.release_date}</p>
      </div>
    </div>
  )
}
