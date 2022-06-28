import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getCharacterInfo, setFilmsInfoLoading } from "../../redux/slices/characterInfo"
import PersonageItem from "./PersonageItem"

const PersonageHome = () => {
  const params = useParams()    
  const dispatch = useDispatch()
    
  const result = useSelector(state => {
    return {
      personageFilmLinks: state.personage.personageFilmLinks,
      characters: state.movieDetails.characters
    }})



useEffect(() => {
    const personDetails = () => {
        return result.characters.map((perId, id) => {     
          if(Number(perId.url.match(/\d+/g)) === 
          Number(params.perId)){ 
            dispatch(getCharacterInfo(perId)) }
              return 1
          })
        }
    personDetails()

    dispatch(setFilmsInfoLoading(result.personageFilmLinks))
}, [dispatch, result.personageFilmLinks, result.characters, params, ])

return <PersonageItem />
}

export default PersonageHome
