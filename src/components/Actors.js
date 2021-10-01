import React from "react";
import { actors } from "../data";

function Actors() {

  function renderActors () {
    return (
      actors.map(eachActor => {
        return (
          <div>
            <h3>{eachActor.name}</h3>
            <p>Known for acting in films like...</p>
            <ul>
              {eachActor.movies.map(eachMovie => <li>{eachMovie}</li>)}
            </ul>
          </div>
        )
      })
    )
  }

  return (
    <div>
      <h1>Actors Page</h1>
      <div>{renderActors()}</div>

    </div>
  )
}

export default Actors;
