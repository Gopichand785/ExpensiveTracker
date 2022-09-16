import React, { useEffect, useState } from 'react';
import { AnimeInfo } from './components/AnimeInfo';
import { AnimeList } from './components/AnimeList';
import {AnimeTodo} from './components/AnimeTodo'
import { RemoveList } from './components/RemoveList';
import {Link} from 'react-router-dom'
import style from './components/style.css'
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
    const res= await fetch('https://api.jikan.moe/v4/anime')
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
        <p className='text-heading'>Anime</p>   
          <div className='row'>
            <AnimeList 
            animelist={AnimeData}
            setAnimeInfo={setAnimeInfo}
            Addlistcomponent={AnimeTodo}
            handlelist={(anime)=>addTo(anime)}
            />
          </div>
         {/*  <h2 className='text-heading'>my List</h2>   
          <div className='row'>
            <AnimeList 
            animelist={AnimeData}
            setAnimeInfo={setAnimeInfo}
            Addlistcomponent={RemoveList}
            handlelist={(anime)=>removefrom(anime)}
            /> */}
          </div>
        </div>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <nav aria-label="navbar">
  <ul className="pagination justify-content-center">
    <li className="page-item">
      <Link className="page-link" to='/page1'>pre</Link>
    </li>
    <li className="page-item"><Link className="page-link" to="/page1">1</Link></li>
    <li className="page-item"><Link className="page-link" to="/page2">2</Link></li>

    <li className="page-item">
      <Link className="page-link" to='/page2'>next</Link>
    </li>
  </ul>
</nav>
  
  
      {/* //footetr started */}
     <div className="bd-footer py-5 mt-5 bg-secondary">
            <div className='container'>
              <h6>Gopichand</h6>
              <div className='row'>
                <div className="col-6 col-lg-2 offset-1 mb-3">
                  <ul className='un-styled'>
                    <li>Anime</li>
                    <li>Naruto</li>
                    <li>trige</li>
                    <li>kidotai</li>
                    <li>Neon</li>
                  </ul>
                </div>
                <div className='col-3 mb-3'>
                <ul className='un-styled'>
                    <li>Anime</li>
                    <li>Naruto</li>
                    <li>trige</li>
                    <li>kidotai</li>
                    <li>Neon</li>
                  </ul>
                </div>
               <div className='col-3'>
                <ul className='un-styled'>
                    <li>Anime</li>
                    <li>Naruto</li>
                    <li>trige</li>
                    <li>kidotai</li>
                    <li>Neon</li>
                  </ul>
                </div>
                <div className='col-3 mb-3'>
                <ul className='un-styled'>
                    <li>Anime</li>
                    <li>Naruto</li>
                    <li>trige</li>
                    <li>kidotai</li>
                    <li>Neon</li>
                  </ul>
                </div>
              </div>
             
            </div>
     </div>

    </>
  )
}

export default Approutes