import React from 'react';
import MovieItem from '../MovieItem';

const getItemReview = (reviews, movieId) => {
  const found = reviews.find((item) => item['movie-id'] === movieId);
  return found ? found.review : undefined;
};

export default ({ movies, reviews }) => (
  <div>
    {movies.map((movie, index) => (
      <MovieItem
        key={index}
        movie={movie}
        order={index + 1}
        review={getItemReview(reviews, movie.id)}
      />
    ))}
  </div>
);
