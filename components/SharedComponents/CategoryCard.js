import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

// this need to be fixed....
export const CategoryCard = (title) => {
  return (
    <Card>
			<CardContent>
				{title}
			</CardContent>
    </Card>
  )
}
