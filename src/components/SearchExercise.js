import React, { useState, useEffect } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercise = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]); 
  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData( 
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchExerciseData();
  },[]);
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercise = exerciseData.filter(
        (exercises) =>
          exercises.name.toLowerCase().includes(search) ||
          exercises.target.toLowerCase().includes(search) ||
          exercises.equipment.toLowerCase().includes(search) ||
          exercises.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercise);
    }
  };
  return (
    <Stack alignItems="center" margin-top="37px" justifyContent="center" p="20">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "45px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise You <br /> Should You
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercise"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "135px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "1px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data={bodyParts} bodyPart = {bodyPart}  setBodyPart = {setBodyPart} isBodyParts/>
      </Box> 
    </Stack>
  );
};

export default SearchExercise;
