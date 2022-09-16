import React from 'react'

export const AnimeInfo = (props) => {
    const {title,images:{jpg:{large_image_url}},source,rank,score,popularity,members,status,rating,duration}=props.animeInfo
  return (
    <>
    <div className='anime-content mt-5'>
        <h3>{title}</h3><br/>
        <img src={large_image_url} alt=''/><br/>
        <div className='info'>
        <h6>#Rank:{rank}</h6>
        <h6>#Score:{score}</h6>
        <h6>#Populartiy:{popularity}</h6><br/>
        <p>Members:{members}</p>
        <p>Status:{status}</p>
        <p>Source:{source}</p>
        <p>Rating:{rating}</p>
        <p>Duration:{duration}</p>
        </div>
    </div>
    </>
  )
}
