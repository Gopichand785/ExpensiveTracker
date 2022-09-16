import React from 'react'
import App from '../App'
export const AnimeSearch = (anime ,setsearch) => {
  return (
    <div>
      <span onAbort={()=>setsearch(anime)}></span>
    </div>
  )
}
