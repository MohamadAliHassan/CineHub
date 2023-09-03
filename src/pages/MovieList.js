//Denna movielist är ansvarig för every single movie listed in the app. Basically the pattern.
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
function MovieList() {
  const [movies, setMovies] = useState([]);

  //Fetch movies
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=3628d113cd1978821077c38747a0606c"
      );
      const data = await response.json();

      setMovies(data.results);
    }
    fetchMovies();
  }, []);

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
