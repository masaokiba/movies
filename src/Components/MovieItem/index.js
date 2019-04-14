'use strict';

import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import Typography from 'material-ui/Typography';
import { Card, CardContent, CardActions } from 'material-ui';
import { withStyles } from 'material-ui/styles';

import styles from './styles';

class MovieItem extends Component {
  static propTypes = {
    movie: PropTypes.object.isRequired,
    order: PropTypes.number.isRequired,
    review: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      reviewOpen: false
    };
  }

  toggleReviewOpen = () => {
    const { reviewOpen } = this.state;

    this.setState({
      reviewOpen: !reviewOpen
    });
  }

  render() {
    const { order, movie, review, classes } = this.props;
    const { reviewOpen } = this.state;  

    return (
      <Card className={classes.root}>
        <Grid container spacing={30}>
          <Grid item xs={12} sm={2} className={classes.leftCol}>
            <a href={movie.url}>
              <img
                className={classes.image}
                src={`/${movie['cover-url']}`}
                alt={movie.title}
              />
            </a>
          </Grid>
          <Grid item xs={10} sm={10}>
            <CardContent>
              <Typography className={classes.title} type="headline">
                {order}.{' '}
                <a href={movie.url} className={classes.titleLink}>
                  {movie.title}
                </a>
                {' '}
                <span className={classes.titleYear}>
                  ({movie.year})
                </span>
              </Typography>
              <ReactStars
                className={classes.stars}
                count={10}
                value={movie.score * 10}
                size={16}
                edit={false}
                color1="#d3d3d3"
                color2="#d7b249"
                half
              />
              <Typography component="p">
                {movie.synopsis} ({movie['runtime-in-minutes']} mins.)
              </Typography>
              <CardActions className={classes.actions}>
                <Button raised color="primary" onClick={this.toggleReviewOpen}>
                  Read Review
                </Button>
              </CardActions>
              <Collapse in={reviewOpen}>
                <Typography component="p">
                  {review}
                </Typography>
              </Collapse>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withStyles(styles)(MovieItem);
