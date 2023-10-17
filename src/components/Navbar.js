import React from 'react'
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
      <Stack>
        <Link to = "/">
          {/* <img src= {Logo} alt= "logo" style = {{width: '48px', height:'48px', margin:'0 20px '}}/> */}
          <img src={Logo} alt= 'Logo'/>
        </Link>
      </Stack>
  )
}

export default Navbar

// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

