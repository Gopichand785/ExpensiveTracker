import React, { useEffect, useState } from 'react';
import { AnimeInfo } from './components/AnimeInfo';
import { AnimeList } from './components/AnimeList';
import {AnimeTodo} from './components/AnimeTodo'
import { RemoveList } from './components/RemoveList';
import style from './components/style.css'
import {Link} from 'react-router-dom'
function Approutes() {
  const [search,setsearch]=useState('Naruto');
  const [AnimeData,setAnimeData]=useState();
  const [animeInfo,setAnimeInfo]=useState();
  const [myAnimelist,setMyAnimelist]=useState([])
  
  const searching=(anime)=>{
      const newsearch=myAnimelist.filter((data, index)=>{
        return search.match==anime.mal_id
      })
      setsearch(newsearch)
  }

  const addTo=(anime)=>{
    const index=myAnimelist.findIndex((myanime)=>{
      return myanime.mal_id ===anime.mal_id
    })
    if(index <0){
      const newArray=[...myAnimelist,anime]
      setMyAnimelist(newArray)
    }
   
  }
   const removefrom=(anime)=>{
    const newArray=myAnimelist.filter((myanime)=>{
      return myanime.mal_id !== anime.mal_id
    })
    setMyAnimelist(newArray)
   }
  const getData=async()=>{
    const res= await fetch('https://api.jikan.moe/v4/anime?page=2')
    const resData= await res.json()
    setAnimeData(resData.data)
  }
  useEffect(()=>{
    getData()
  },[search])
  return(
<>
<div className='header'>
      {/* <h3>Anime data list</h3> */}
      <div className='search-box'>
        <input type='search' placeholder='search your anime'
          onChange={(e)=>setsearch(e.target.value)}
        />
      </div>
      </div>
      
      <div className='container'>
        <div className='animeInfo'>
        {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>
        
        <div className='anime-row'>
        <h2 className='text-heading'>Anime</h2>   
          <div className='row'>
            <AnimeList 
            animelist={AnimeData}
            setAnimeInfo={setAnimeInfo}
            Addlistcomponent={AnimeTodo}
            handlelist={(anime)=>addTo(anime)}
            />
          </div>
          <h2 className='text-heading'>my List</h2>   
          <div className='row'>
            <AnimeList 
            animelist={AnimeData}
            setAnimeInfo={setAnimeInfo}
            Addlistcomponent={RemoveList}
            handlelist={(anime)=>removefrom(anime)}
            />
          </div>
        </div>
       
   
    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <nav aria-label="navbar">
  <ul className="pagination justify-content-center">
    <li className="page-item">
      <Link className="page-link" to='/page1'>Previous</Link>
    </li>
    <li className="page-item"><Link className="page-link" to="/page1">1</Link></li>
    <li className="page-item"><Link className="page-link" to="/page2">2</Link></li>

    <li className="page-item">
      <Link className="page-link" to='/page2'>Next</Link>
    </li>
  </ul>
</nav>
  
        
     </div>
                
    </>
  )
}

export default Approutes