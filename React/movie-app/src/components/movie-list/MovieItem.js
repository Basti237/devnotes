import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';

import { Col } from 'react-bootstrap';
import { CONFIG_MOCK } from '../../common/config/configuration';

//CSS
import styles from './MovieItem.scss';

class MovieItem extends Component {

    constructor(props) {
        super(props);
        let [smallest, second, third] = CONFIG_MOCK.images.poster_sizes;
        this.state = {
            imgBaseUrl: CONFIG_MOCK.images.secure_base_url,
            imgSize: third
        }
        
        String.prototype.trunc = String.prototype.trunc ||
        function(n){
            return (this.length > n) ? this.substr(0, n-1) + ' ...' : this;
        };
    }

    render() {
        return (
            <Col sm={6} md={3} className={styles.MovieItem}>
            <Card className={styles.Poster} >
                <CardMedia src="" image="">
                    <img src={`${this.state.imgBaseUrl}${this.state.imgSize}${this.props.imgPath}`} />
                </CardMedia>
                <CardContent>
                    <Typography type="headline" component="h1">
                        {this.props.title.trunc(40)}
                    </Typography>
                </CardContent>
            </Card>
        </Col>
        );
    }
}

MovieItem.propTypes = {
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
};

export default MovieItem;