import React from 'react';
import axios from "axios";
import {endpoints} from "../../config";

export default class Genre extends React.Component {

    constructor() {
        super();
        this.state = {
            genreMovieList: [],
        };
    }

    requestGenreMovies = () => {
        axios
            .get(endpoints.genreMovies(this.props.genres.id))
            .then((res) => this.setGenreMovieList(res.data.results))
            .catch((error) => console.log(error));
    };

    setGenreMovieList = (genreMovieList) => {
        this.setState({
            genreMovieList,
        });
    };

    getGenreMovies = () => {
        this.requestGenreMovies();
        this.props.changeGenre(this.state.genreMovieList);
    }

    render() {
        const {
            genres: { name }
        } = this.props;

        return (
            <div className="genre">
                <button className="btn btn-primary" onClick={this.getGenreMovies}>
                    {name}
                </button>
            </div>
        );
    }
}