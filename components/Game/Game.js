import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import Board from './Board/Board';

const Game = ({ jeopardyCategories }) => (
  <Grid container spacing={1}>
    <Grid item xs={10}>
      <Board categories={jeopardyCategories} />
    </Grid>
    <Grid item xs={2}>
      Log
    </Grid>
  </Grid>
);

Game.propTypes = {
  // jeopardyClues: PropTypes.array.isRequired,
  jeopardyCategories: PropTypes.array.isRequired,
};

export default Game;
