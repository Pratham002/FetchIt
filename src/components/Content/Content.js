import React from "react"
import "./Content.css"
import { img_300, unavailable } from "../../config/config"

const Content = (props) => {
  const { data } = props
  const name = data.title || data.name
  const id = data.id
  const posterImage = data.poster_path
  const dateReleased = data.release_date || data.first_air_date
  const mediaType = data.media_type
  const ratings = data.vote_average
  const imageSrc = posterImage ? `${img_300}/${posterImage}` : unavailable

  return (
    <div className="media">
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
