import { Outlet } from 'react-router-dom';
import { Item, List, StyledLink, Title } from './MovieAdditionalInfo.styled';

const MovieAdditionalInfo = () => {
  return (
    <div>
      <Title>Additional information</Title>
      <List>
        <Item>
          <StyledLink to="cast">Cast</StyledLink>
        </Item>
        <Item>
          <StyledLink to="reviews">Reviews</StyledLink>
        </Item>
      </List>
      <Outlet />
    </div>
  );
};

export default MovieAdditionalInfo;
