import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard'; 
import '../styles/MovieDetails.css';

export default function MovieDetails() {
  const location = useLocation();
  const movieFromState = location.state?.movie;

  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    if (!movieFromState?.id) return;

    const fetchAll = async () => {
      try {
        const apiKey = "c3d6ddd037974eb1092e738333e8f3ce";
        const id = movieFromState.id;

        const [detailsRes, creditsRes, similarRes] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`),
          axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`),
          axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US`)
        ]);

        setMovieDetails(detailsRes.data);
        setCast(creditsRes.data.cast);
        setCrew(creditsRes.data.crew);
        setSimilarMovies(similarRes.data.results);
      } catch (err) {
        console.error('Failed to fetch movie details:', err);
      }
    };

    fetchAll();
  }, [movieFromState]);

  if (!movieDetails) return <p>Loading...</p>;

  const posterUrl = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className="movie-details-container">
      <img src={posterUrl} alt={movieDetails.title} className="movie-details-poster" />

      <div className="movie-details-content">
        <h2>{movieDetails.title}</h2>
        <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
        <p><strong>Rating:</strong> {movieDetails.vote_average} ⭐</p>
        <p><strong>Language:</strong> {movieDetails.original_language.toUpperCase()}</p>
        <p><strong>Votes:</strong> {movieDetails.vote_count}</p>
        <p><strong>Genres:</strong> {movieDetails.genres?.map(g => g.name).join(', ') || "N/A"}</p>

        <p><strong>Runtime:</strong> {movieDetails.runtime} minutes</p>
        <p className="movie-overview">{movieDetails.overview}</p>

        <p><strong>Top Cast:</strong> {cast.slice(0, 5).map(c => c.name).join(', ')}</p>
        <p><strong>Director:</strong> {crew.find(c => c.job === "Director")?.name || "Unknown"}</p>

        <h3>Similar Movies</h3>
        <div className="similar-movies">
          {similarMovies.slice(0, 6).map(similar => (
            <MovieCard key={similar.id} movie={similar} />
          ))}
        </div>
      </div>
    </div>
  );
}
