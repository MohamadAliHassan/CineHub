//handling when movie doesnt match what the user typed in
import React from "react";
import PageNotFoundIMG from "../assets/pagenotfound.png";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 dark:text-white font-bold my-10">
            404, oops
          </p>
          <div className="max-w-lg">
            <img
              src={PageNotFoundIMG}
              alt="404 page not found"
              className="rounded"
            />
          </div>
        </div>
        <div className="flex justify-center dark:text-white my-3">
          <Link to="/">
            <button className="w-64 text-xl rounded border py-3">
              Back to CineHub
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PageNotFound;
