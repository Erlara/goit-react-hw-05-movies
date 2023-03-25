import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesById } from 'servises/fetchAPI';
import { Button } from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchMoviesById(id)
      .then(({ data }) => {
        const {
          title,
          vote_average,
          overview,
          poster_path,
          genres,
          release_date,
        } = data;
        const movie = {
          title,
          release_date: release_date.slice(0, 4),
          vote_average,
          overview,
          poster_path: `https://image.tmdb.org/t/p/w500/${poster_path}`,
          genres: genres.map(({ name }) => name).join(', '),
        };
        setMovie(movie);
      })
      .catch(error => console.error(error));
  }, [id]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <Button>Go back</Button>
      </Link>
      <MovieInfo movie={movie} />;
    </>
  );
};

export default MovieDetails;
