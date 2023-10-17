import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);


  

// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";



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

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Box width="100px">
//       <Navbar />
//       <RouterProvider router={router} />

//       <Footer />
//     </Box>
//   </React.StrictMode>
// );
