import React from 'react'
import { AnimeTodo } from './AnimeTodo'


export const AnimeList = ({ animelist,setAnimeInfo,Addlistcomponent,handlelist}) => {
    const AnimeTodo=Addlistcomponent

    return (
        <>{
            animelist ? (animelist.map((anime, index) => {
                return (
                    <div className='card' key={index} onClick={()=>setAnimeInfo(anime)}>
                        <img src={anime.images.jpg.large_image_url} alt='animeImage' />
                        <div className='anime-info'>
                            <h4>{anime.title}</h4>
                            <div className='overlay' onClick={()=>handlelist(anime)}>
                               <h4>{anime.title_japanese}</h4>
                               <h3>SYNOPSIS</h3> 
                                <div className='synopsis'>
                                <p>{anime.synopsis}</p>
                               </div> 
                               <AnimeTodo/>
                           
                            </div>
                        </div>
                    </div>
                )
            })
            ) : "NotFound"
        }

        </>
    )
}
