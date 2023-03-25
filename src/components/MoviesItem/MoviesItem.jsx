import { useLocation } from 'react-router-dom';
import { Img, Item, StyledLink, Title } from './MoviesItem.styled';

const MoviesItem = ({ movies }) => {
  const location = useLocation();

  return movies.map(({ id, title, poster_path }) => (
    <Item key={id}>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <div>
          <Img
            src={'https://image.tmdb.org/t/p/w500/' + poster_path}
            alt="poster"
          />
        </div>

        <Title> {title}</Title>
      </StyledLink>
    </Item>
  ));
};

export default MoviesItem;
