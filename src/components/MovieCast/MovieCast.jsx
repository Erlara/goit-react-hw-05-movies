import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesCast } from 'servises/fetchAPI';
import { Item, List } from './MovieCast.styled';

const MovieCast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMoviesCast(id)
      .then(({ data }) => {
        setCast(data.cast);
      })
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
      <List>
        {cast.map(({ character, profile_path, name, cast_id }) => (
          <Item key={cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt={name}
              width="150"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default MovieCast;
