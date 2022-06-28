import React, { useEffect }  from 'react';
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { personagesInfoLoading } from '../../redux/slices/movieDetailsInfo';
import Loader from '../../Components/Loader/Loader'

const MovieDetails = (props) => {
  const dispatch = useDispatch()
  
  const { characterLinks, characters, isLoading } = useSelector(state => state.movieDetails )

  useEffect(() => {
    dispatch(personagesInfoLoading(characterLinks))
  }, [dispatch, characterLinks])

  return (
      <div className={s.container}>
        {isLoading 
        ? <Loader/>
        : <div>
        <h2> {props.movieInfo.title}</h2> 
              <li><span>Createdd: </span>{props.movieInfo.created} </li>
              <li><span>Director: </span>{props.movieInfo.director} </li>
              <li><span>Episode: </span>{props.movieInfo.episode_id}</li>
              <li><span>Release date: </span>{props.movieInfo.release_date}</li>
              <h2>Personages</h2>

            <div>{ characters.map((i, id) => 
            <div key={id}>
              
              <NavLink to={`/personage/${i.url.match(/\d+/g)}`}>
                <li ><span>Name: </span>{i.name}</li>
              </NavLink>

            </div>
            )} 
            </div>
          </div>
        }
     </div>
  )
}
export default MovieDetails

