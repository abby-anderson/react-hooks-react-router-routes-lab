import React from "react";
import { directors } from "../data";

function Directors() {

  function renderDirectors () {
    return (
      directors.map(eachDirector => {
        return (
          <div>
            <h3>{eachDirector.name}</h3>
            <p>Known for directing films including but not limited to:</p>
            <ul>
              {eachDirector.movies.map(eachMovie => <li>{eachMovie}</li>)}
            </ul>
          </div>
        )
      })
    )
  }

  return (
    <div>
      <h1>Directors Page</h1>
      <div>{renderDirectors()}</div>

    </div>
  )
}

export default Directors;
