import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  ReviewList,
  ReviewItem,
  ReviewText,
  ReviewSpan,
} from './MovieReviews.styled';

import { fetchMoviesReviews } from 'servises/fetchAPI';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMoviesReviews(id).then(({ data }) => setReviews(data.results));
  }, [id]);

  return (
    <>
      {reviews.length < 1 && <p>We don't have any reviews for this movie.</p>}
      <ReviewList>
        {reviews.map(({ author, content }, index) => (
          <ReviewItem key={index}>
            <ReviewSpan> Author:</ReviewSpan> {author}
            <ReviewText>{content}</ReviewText>
          </ReviewItem>
        ))}
      </ReviewList>
    </>
  );
};

export default MovieReviews;
