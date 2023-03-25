import MovieForm from 'components/MovieForm/MovieForm';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'servises/fetchAPI';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { toast } from 'react-toastify';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.currentTarget.elements.search.value;
    if (inputValue.trim() === '') {
      setSearchParams({});
      toast('Please, enter a query to search!');
      return;
    }
    setSearchParams({ query: inputValue });
  };

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
    }

    fetchMoviesSearch(query)
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [query]);

  return (
    <>
      <MovieForm onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
