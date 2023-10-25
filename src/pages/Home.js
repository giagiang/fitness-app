import React, { useState } from "react";
import Box from "@mui/material/Box";

import Exercise from "../components/Exercise";
import SearchExercise from "../components/SearchExercise";
import HeroBanner from "../components/HeroBanner";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercise, setExercise] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercise={setExercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercise   
        exercise = {exercise} 
        setExercise = {setExercise}
        bodyPart = {bodyPart}
      />
    </Box>
  );
};

export default Home;
