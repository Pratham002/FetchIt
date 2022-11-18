import React from "react"
import "./Content.css"

const Content = (props) => {
  const { data } = props
  const name = data.title || data.name
  const id = data.id
  const posterImage = data.poster_path
  const dateReleased = data.release_date || data.first_air_date
  const mediaType = data.media_type
  const ratings = data.vote_average

  return <div>{name}</div>
}

export default Content
