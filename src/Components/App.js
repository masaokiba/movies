'use strict';

import React, { Component } from 'react';

import MoviesList from './MoviesList';
import data from '../data.json';

//css
require('style-loader!./App.css');

class App extends Component {
  render() {
    return (
      <div>
        <h1>Movie Reviews</h1>
        <MoviesList movies={data.movies} reviews={data.reviews} />
      </div>
    );
  }
}

export default App;
