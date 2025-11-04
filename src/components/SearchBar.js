import React, { useContext, useState } from 'react'
import axios from 'axios'

import '../styles/SearchBar.css'

import { MovieContext } from './MovieContext'
import { useNavigate } from 'react-router-dom'


export default function SearchBar() {
  const [query, setquery] = useState('')

  const {setMovies}=useContext(MovieContext);
  const navigate=useNavigate();

  const handlesearch = (e) => {
    e.preventDefault()

    const fetch = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
        )
        setMovies(res.data.results);
        navigate('/movielist')
      } catch (error) {
        console.error('Search error', error)
      }
    }

    fetch()
  }
  console.log("API KEY:", process.env.REACT_APP_TMDB_KEY);


  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handlesearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search a movie..."
          value={query}
          onChange={(e)=>{setquery(e.target.value)}}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  )
}
