import React, { useState, useEffect } from "react";
import { useFetcher, useParams, usePrams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [ exerciseVideos, setExerciseVideos] = useState([])
  const { id } = useParams();
 
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com/video/related";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData (`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`,youtubeOptions );
      setExerciseVideos(exerciseVideosData) 
    };
    fetchExerciseData();
  }, [id]);
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos  exerciseVideos = {exerciseVideos} name = {exerciseDetail.name}/>
      <SimilarExercises  />
    </Box>
  );
};

export default ExerciseDetail;
