import React from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

function Search({ apiPath }) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  return (
    <main>
      <div>
        <section>
          <p className="text-3xl text-gray-600 dark:text-white">
            {movies.length === 0
              ? `No results for ${queryTerm}`
              : `Results for ${queryTerm}`}
          </p>
        </section>
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

export default Search;
