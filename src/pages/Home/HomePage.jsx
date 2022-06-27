import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesLoading } from "../../redux/slices/films";
import FilmItem from "./HomeItem";

const HomePage = () => {
  const dispatch = useDispatch()
  
  const { list, isLoading } = useSelector(state => state.movies)  

  useEffect(() => {
    dispatch(moviesLoading())
  }, [dispatch])
  
  return(
     <FilmItem list={list} isLoading={isLoading} />
  )
}
export default HomePage















