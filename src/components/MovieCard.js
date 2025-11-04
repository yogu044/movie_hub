import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MovieCard.css'



export default function MovieCard({ movie }) {
  const navigate=useNavigate();
  if (!movie) return null; 
  

  const posterUrl = movie.poster_path
  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  : '/no-image.jpg'; 

    const handleclick=()=>{
      navigate('/moviedetails',{state:{movie}});

    }

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title || 'Movie'}  onClick={handleclick}/>

      <h3 className='movie-Title' onClick={handleclick}>{movie.title}</h3>
      
    </div>
  )
}
