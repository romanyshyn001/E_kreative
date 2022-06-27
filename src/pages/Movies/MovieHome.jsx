import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import MovieDetails from './MovieItem';
import { movieDetailsLoading } from '../../redux/slices/movieDetailsInfo';

const MovieHome = () => {
  const dispatch = useDispatch()
  const params = useParams()
  
  const { filmDetails } = useSelector(state => state.movieDetails)
  
  
  useEffect(() => {
    dispatch(movieDetailsLoading(params.movieId))
  }, [dispatch, params.movieId])
  
return (
    <div>
      <MovieDetails
        movieInfo={filmDetails}
      />
    </div>
  )
}
export default MovieHome


