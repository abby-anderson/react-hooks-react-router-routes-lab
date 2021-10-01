import React from "react";
import { movies } from "../data";

function Movies() {

  const renderMovies = () => {
    return (
      movies.map(eachMovie => {
        return (
          <>
          <h3>{eachMovie.title}</h3>
          <p>{eachMovie.time} mins</p>
          <ul>
            {eachMovie.genres.map(eachGenre => <li>{eachGenre}</li>)}
          </ul>
          </>
        )

      })
    )
  }


  return (
    <div>
      <h1>Movies Page</h1>
      <div>{renderMovies()}</div>
    </div>
  )
}

export default Movies;
