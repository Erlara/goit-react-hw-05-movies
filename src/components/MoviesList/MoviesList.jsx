import MoviesItem from 'components/MoviesItem/MoviesItem';
import { Container, List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <Container>
      <List>
        <MoviesItem movies={movies} />
      </List>
    </Container>
  );
};

export default MoviesList;
