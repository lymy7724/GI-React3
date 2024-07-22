import React, { useState } from 'react'
import './Medium.css'
import axios from 'axios'

export default function Medium() {
    const [movie, setMovie] = useState("");
    const [info, setInfo] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (movie) {
            axios
            .get(`https://api.themoviedb.org/3/search/movie?query=${movie}&language=en-US&page=1&api_key=1b66c7913a4b8a373f3a18ed478f32fa`)
            .then((res) => {
              console.log(res.data.results);
              setInfo(res.data.results);
            })
            .catch((err) => {
              console.log(err);
            });

        }
    }

  return (
    <div>
        <div className="title">
        <h1>Film Center</h1>
        </div>
    
    
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input value={movie}
                    onChange={(e) => setMovie(e.target.value)} name="movie" type="text" id="user"/>
                <input type="submit" value="Search movies" className='button'/>
            </form>
        </div>

        <div style={{width: "85%", height: "2px", backgroundColor: "grey", margin: "20px auto"}}>
        </div>
            <div id='container'>
                {info.map((item) => (
                
                    <div className="card" onClick={event => window.location.href=`/medium/${item.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="poster" alt='movie poster'/>
                        <h3>{item.title}</h3>
                    </div>
                
                ))}
            </div>
        </div>

  )
}
