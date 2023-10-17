import React from "react";
import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/exercise/:id",
//     element: <ExerciseDetail />,
//   },
// ]);

// function App() {
//   return (
//     <Box width="100px">
//       <Navbar />
//       <RouterProvider router={router} />

//       <Footer />
//     </Box>
//   );
// }



const App = () => {
  return (
    <Box width = "400px" sx ={{width : {xl: '1488px'}}} m = "auto">
      <Navbar/>
      <Routes>
        <Route  path="/" element= {<Home/>}/>
        <Route path="/exercise/:id" element = {<ExerciseDetail/>}/>
      </Routes>
      <Footer />
    </Box>
  )
}


export default App;







// const App = () => {
//   return (
//     <Box width="100px">
//       <Navbar />
//       <Router>
//         <Route path="/" element={<Home />} />
//         <Route path="/exercise/:id" element={<ExerciseDetail />} />
//       </Router>
//       <Footer />
//     </Box>
//   );
// };

