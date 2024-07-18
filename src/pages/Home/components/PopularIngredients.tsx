'use client';
import { Stack, StackProps, Typography } from '@mui/material';
import React from 'react'

export interface PopularIngredientsProps extends StackProps{
  
}

const PopularIngredients: React.FC<PopularIngredientsProps> = ({ ...props }) => {
  return (
    <>
      <Stack color="text.primary" spacing={6} {...props}>
        <Typography variant="h1" textAlign="center">
          POPULAR INGREDIENTS
        </Typography>
        
      </Stack>
    </>
  )
}

export default PopularIngredients;