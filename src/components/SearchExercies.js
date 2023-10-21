import React, { useState, useEffect } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import { ConstructionOutlined } from "@mui/icons-material";

const SearchExercise = () => {
  const [search, setSearch] = useState("");
  const [exercise, setExercise] = useState([]);

  const handleSearch = async () => {
    debugger
    if(search){
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.info("ex data", exerciseData)
      debugger
      const searchedExercise = exerciseData.filter(
        (exercise) =>
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
          
      );
      setSearch("");
      setExercise(searchedExercise);
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
          placeholder="Search Exercies"
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
    </Stack>
  );
};

export default SearchExercise;
