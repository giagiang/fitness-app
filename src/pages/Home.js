import React, {useState} from 'react';
import Box from '@mui/material/Box';


import Exercies from '../components/Exercies';
import SearchExercies from '../components/SearchExercies';
import HeroBanner from '../components/HeroBanner';
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercies />
      <Exercies/>
    </Box>
  )
}

export default Home