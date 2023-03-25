import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies } from 'servises/fetchAPI';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
