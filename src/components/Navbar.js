import React, { useState } from "react"
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import WhatshotIcon from "@mui/icons-material/Whatshot"
import MovieIcon from "@mui/icons-material/Movie"
import TvIcon from "@mui/icons-material/Tv"
import SearchIcon from "@mui/icons-material/Search"

const navBoxStyles = {
  width: "100%",
  position: "fixed",
  bottom: 0,
  zIndex: 100,
}

const navigationStyles = {
  backgroundColor: "#d6e4e5",
}

const actionButtonStyles = {
  color: "#0e5e6f",
  padding: "1px",
}

const Navbar = () => {
  const [value, setValue] = useState(0)

  const actionButtons = (label, icon) => {
    return (
      <BottomNavigationAction
        sx={actionButtonStyles}
        label={label}
        icon={icon}
      />
    )
  }

  return (
    <Box sx={navBoxStyles}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        sx={navigationStyles}
      >
        {actionButtons("Trending", <WhatshotIcon />)}
        {actionButtons("Movies", <MovieIcon />)}
        {actionButtons("TV Series", <TvIcon />)}
        {actionButtons("Search", <SearchIcon />)}
      </BottomNavigation>
    </Box>
  )
}

export default Navbar
