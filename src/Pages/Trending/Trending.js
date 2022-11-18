import React, { useState, useEffect } from "react"
import axios from "axios"
import Content from "../../components/Content/Content"

const Trending = () => {
  const [trendingData, setTrendingData] = useState([])

  const fetchTrending = async () => {
    try {
      const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
      const { data } = await axios.get(trendingUrl)
      console.log(data)
      setTrendingData(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTrending()
  }, [])

  return (
    <div>
      <span className="pageTitle">Trending</span>
      {trendingData &&
        trendingData.map((data) => <Content key={data.id} data={data} />)}
    </div>
  )
}

export default Trending
