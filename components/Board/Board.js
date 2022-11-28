import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { CategoryCard } from '../SharedComponents/CategoryCard'

export const Board = ({ jeopardyClues, jeopardyCategories }) => {
  return (
		<Grid container spacing={1}>
			{jeopardyCategories.map(category => (
				<Grid item xs={2}>
					{category}
				</Grid>
			))}
		</Grid>
  )
}