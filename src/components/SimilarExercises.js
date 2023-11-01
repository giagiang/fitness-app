import React from 'react'
import {Box, Typography, Stack} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx= {{ mt: {lg: '100px',xs: '0'}}}>
      <Typography variant = "h3">
        Exercise that target the same muscle group
      </Typography>
      <Stack direction = "row" sx={{ p: '2', position:'relative'}}>
        {targetMuscleExercises?.length && <HorizontalScrollbar  data = {targetMuscleExercises}/> }
      </Stack>
    </Box>

  )
}

export default SimilarExercises