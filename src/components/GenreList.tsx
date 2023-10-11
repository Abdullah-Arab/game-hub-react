import React from 'react'
import useGanres from '../hooks/useGenres'

const GenreList = () => {
    const {genres} = useGanres();
  return (
    <ul>
        {
            genres.map(genre=> <li key={genre.id}>{genre.name}</li>)
        }
    </ul>
  )
}

export default GenreList