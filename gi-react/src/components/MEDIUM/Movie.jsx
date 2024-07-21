import React, { useState, useEffect } from 'react'
import {Routes, Route, useParams} from 'react-router-dom'
import axios from 'axios';

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
      }, [])

  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster"/>
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
    </div>
  )
}
