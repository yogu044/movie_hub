import React, { useContext, useState } from 'react';
import { MovieContext } from './MovieContext';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

export default function MovieList() {
  const { movies } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = movies?.filter((movie) =>
    movie.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movie-page">
        

      

      <div className="movie-list-container">
        {filteredMovies && filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No movies found. Try searching again.</p>
        )}
      </div>
    </div>
  );
}
