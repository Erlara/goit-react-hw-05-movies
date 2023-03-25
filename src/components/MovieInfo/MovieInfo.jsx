import MovieAdditionalInfo from 'components/MovieAdditionalInfo/MovieAdditionalInfo';
import {
  Container,
  DivInfo,
  Image,
  MovieDescr,
  Title,
} from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  const { title, vote_average, overview, poster_path, genres, release_date } =
    movie;
  const scores = vote_average * 100;

  return (
    <>
      <Container>
        <Image src={poster_path} alt={title} />
        <DivInfo>
          <Title>
            {title}({release_date})
          </Title>
          <MovieDescr>User score: {scores.toString().slice(0, 2)}%</MovieDescr>
          <h3>Overview </h3>
          <MovieDescr>{overview}</MovieDescr>
          <h4>Genres</h4>
          <MovieDescr>{genres}</MovieDescr>
        </DivInfo>
      </Container>
      <MovieAdditionalInfo />
    </>
  );
};

export default MovieInfo;
