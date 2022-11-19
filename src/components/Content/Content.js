import React from "react"
import { Badge } from "@mui/material"
import "./Content.css"
import { img_300, unavailable } from "../../config/config"

const Content = (props) => {
  const { data } = props
  const name = data.title || data.name
  const id = data.id
  const posterImage = data.poster_path
  const dateReleased = data.release_date || data.first_air_date
  const mediaType = data.media_type
  const ratings = +data.vote_average.toFixed(1)
  const imageSrc = posterImage ? `${img_300}/${posterImage}` : unavailable
  const badgeColor = ratings > 6 ? "primary" : "secondary"

  return (
    <div className="media">
      <Badge badgeContent={ratings} color={badgeColor}></Badge>
      <img className="poster" src={imageSrc} alt={`${name}`} />
      <b className="title">{name}</b>
      <span className="subTitle">
        {mediaType === "tv" ? "TV Series" : "Movies"}
        <span className="subTitle">{dateReleased}</span>
      </span>
    </div>
  )
}

export default Content
