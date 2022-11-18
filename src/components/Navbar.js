import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (value === 0) {
      navigate("/")
    } else if (value === 1) {
      navigate("/movies")
    } else if (value === 2) {
      navigate("/series")
    } else if (value === 3) {
      navigate("/search")
    }
  }, [value, navigate])

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
