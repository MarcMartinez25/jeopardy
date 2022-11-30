import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import CategoryCard from '../../SharedComponents/CategoryCard';

const Board = ({ categories }) => (
  <Grid container spacing={1}>
    {categories.map((category) => (
      <Grid item xs={2}>
        <CategoryCard title={category} />
      </Grid>
    ))}
  </Grid>
);

Board.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Board;
