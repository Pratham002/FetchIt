import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import axios from "axios"
import Content from "../../components/Content/Content"

const trendingContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
}

const Trending = () => {
  const [trendingData, setTrendingData] = useState([])

  const fetchTrending = async () => {
    try {
      const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
      const { data } = await axios.get(trendingUrl)
      setTrendingData(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTrending()
  }, [])

  return (
    <Box>
      <span className="pageTitle">Trending</span>
      <Box sx={trendingContainer}>
        {trendingData &&
          trendingData.map((data) => <Content key={data.id} data={data} />)}
      </Box>
    </Box>
  )
}

export default Trending
