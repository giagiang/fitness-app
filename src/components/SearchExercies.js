import React,{useState, useEffect} from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";

const SearchExercies = () => {
  const [search, setSearch] = useState('')
  const handleSearch =  () =>{
    if (search){
      
    }
  }
  return (
    <Stack alignItems="center" margin-top="37px" justifyContent="center" p="10">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "45px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercies You <br /> Should You
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
          onChange={(e) => search(e.target.value.toLowerCase())}
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
          onclick= {handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercies;
