import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import MovieItem from './MovieItem';
import { MOVIE_LIST } from '../../mock/movie/movies';

class MovieGrid extends Component {

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    {MOVIE_LIST.results.map(item => (<MovieItem key={item.id} title={item.title} imgPath={item.poster_path} genres={item.genres} />))}  
                </Row>
            </Grid>
        );
    }
}
export default MovieGrid;