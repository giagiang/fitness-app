import React, { useState } from "react";
import Box from "@mui/material/Box";

import Exercise from "../components/Exercise";
import SearchExercise from "../components/SearchExercise";
import HeroBanner from "../components/HeroBanner";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercise   
        exercises = {exercises} 
        setExercises = {setExercises}
        bodyPart = {bodyPart}
      />
    </Box>
  );
};

export default Home;
