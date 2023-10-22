import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import backup from "../assets/backup.png";

function MovieDetail() {
  // Access the information using useParams
  const params = useParams();
  console.log(params);
  const [movie, setMovie] = useState({});
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : backup;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=3628d113cd1978821077c38747a0606c`
      );
      const json = await response.json();
      setMovie(json);
      console.log(json);
    }
    fetchMovie();
  }, [params.id]);
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={movie.title}></img>
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font.bold my-3 text-center lg:text.left">
            {movie.title}
          </h1>
          <p>{movie.overview}</p>
          <p className="my-7 flex flex-wrap gap-2">
            {movie.genres &&
              movie.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 rounded dark:border-gray-500 p-3"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
          </p>
        </div>
      </section>
    </main>
  );
}

export default MovieDetail;
