import React from "react";
import style from './style.module.css'
import { NavLink } from "react-router-dom";
import Loader from "../../Components/Loader/Loader"

const FilmItem = (props) => {
  
  return (  
    <div className={style.home}> 
        { props.isLoading 
        ? <Loader/> 
        : props.list.map((i) =>  
        <div key={i.title} className={style.home}>
          <div className={style.container}>
            <NavLink to={`/movies/${i.url.match(/\d+/g)}`}>
              <li ><span>Name:</span> {i.title}</li>
              <li><span>Episode:</span> {i.episode_id}</li>
              <li ><span>Director:</span> {i.director}</li>
              <li ><span>Release date:</span> {i.release_date}</li>
            </NavLink>
          </div>  
        </div>       
)}
    </div>
  )
}

export default FilmItem