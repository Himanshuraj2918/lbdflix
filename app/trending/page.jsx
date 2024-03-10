import MovieList from "../components/MovieList";
import Link from "next/link";

async function fetchTrendingMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=acd2e2d961bd794fcc2ffc03671385e8"
  );

  new Promise((resolve) => setTimeout(resolve, 2000));

  const movies = await response.json();
  return movies;
}

const Trending = async () => {
  const movies = await fetchTrendingMovies();
  const moviesResponse = movies.results;

  return (
    <div>
      <div className="container">
        <div className="all-trending">
          <h1>All Trending Movies</h1>
          <MovieList movies={moviesResponse} />
        </div>
      </div>
    </div>
  );
};

export default Trending;
