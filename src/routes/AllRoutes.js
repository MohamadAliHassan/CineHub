// AllRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/MovieDetail";
import PageNotFound from "../pages/PageNotFound";
import Search from "../pages/Search";

function AllRoutes() {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movies/popular" element={<MovieList />} />
        <Route path="/movies/top" element={<MovieList />} />
        <Route path="/movies/upcoming" element={<MovieList />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
