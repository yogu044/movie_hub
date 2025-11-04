// Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import "../styles/Home.css";

export default function Home() {
  const [recent, setRecent] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        
        const recentRes = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
        );
        const topRatedRes = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
        );
        const popularRes = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
        );
        setRecent(recentRes.data.results);
        setTopRated(topRatedRes.data.results);
        setPopular(popularRes.data.results.slice(0, 10));
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="home-page">
      {/* Header Bar */}
      <header className="header-bar">
   
      </header>

      {/* Main Hero Section */}
      <div className="hero-container">
        <h1 className="main-title">
          Discover Amazing Movies
        </h1>
        <p className="main-desc">
          Search through thousands of movies and discover your next favorite film
        </p>
        <SearchBar />
      </div>

      {/* Rows */}
      <section>
        <h2 className="section-title"> Recent Releases</h2>
        <div className="movie-row">
          {recent.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <h2 className="section-title"> Top Rated</h2>
        <div className="movie-row">
          {topRated.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <h2 className="section-title"> Top 10 Popular</h2>
        <div className="movie-row">
          {popular.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}
