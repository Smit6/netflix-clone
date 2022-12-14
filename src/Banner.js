import React, { useState, useEffect } from 'react'
import { instance } from './axios'
import requests from './requests'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(requests.fetchNetflixOriginals)
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      )
      return response
    }
    fetchData()
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <header className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(movie.overview || movie.description, 150)}
        </h1>
      </div>
      <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner