import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@mui/material';

const CategoryCard = ({ title }) => (
  <Card variant="outlined">
    {title}
  </Card>
);

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CategoryCard;
