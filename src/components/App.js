import React from 'react';
import axios from 'axios';
import Card from './Card';
import { endpoints } from '../../config';
import Genre from './Genre';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
        movieList: [],
        genresList: [],
    };

    this.requestMovies();
    this.requestGenres();
  }

  requestMovies = () => {
      axios
          .get(endpoints.mostPopularMovies())
          .then((res) => this.setMovieList(res.data.results))
          .catch((error) => console.log(error));
  };

  requestGenres = () => {
    axios
      .get(endpoints.genres())
      .then((res) => this.setGenresList(res.data.genres))
      .catch((error) => console.log(error));
  };

  setMovieList = (movieList) => {
    this.setState({
        movieList,
    })
  };

  setGenresList = (genresList) => {
      this.setState({
          genresList,
      })
  };

  changeGenre = (movieList) => {
      this.setState({
          movieList,
      });
  };

  render() {
    const {
        movieList,
        genresList,
    } = this.state;

    return (
        <div>
            <div className="genre">
                <h2 className="title">Genres</h2>
                {genresList.map((genres) => <Genre genres={genres} changeGenre={this.changeGenre}/>)}
            </div>
            <div className="cards">
               {movieList.map((movie) => <Card movie={movie} />)}
            </div>
        </div>
    );
  }
}
