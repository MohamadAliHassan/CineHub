//Denna movielist är ansvarig för every single movie listed in the app. Basically the pattern.
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

function MovieList({ apiPath }) {
  //Fetch movies
  const { data: movies } = useFetch(apiPath);

  return (
    <main>
      <div>
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap">
            {/* Mappa/loop genom varje film som fetchas och extract every item*/}
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default MovieList;
