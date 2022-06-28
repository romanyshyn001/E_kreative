import React from "react";
import {  useSelector } from "react-redux";
import style from './style.module.css'
import { NavLink } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";


const PersonageItem = () => {
    const { personageDetails, filmsInfo, isLoading } = useSelector(state => state.personage)

    return (
        <div className={style.container}>
           {isLoading 
            ? <Loader/>
            :   <div>
                    <li><span>Name: </span>{personageDetails.name}</li>
                    <li><span>Birth: </span>{personageDetails.birth_year}</li>
                    <li><span>Eye color: </span>{personageDetails.eye_color}</li>
                    <li><span>Gender: </span>{personageDetails.gender}</li>
                    <li><span>Hair color: </span>{personageDetails.hair_color}</li>
                    <li><span>Height: </span>{personageDetails.height}</li>
                    <li><span>Mass: </span>{personageDetails.mass}</li>
                    <li><span>Skin color: </span>{personageDetails.skin_color}</li>
                    <li><span>Films:</span></li>

                        <div>{filmsInfo.map((f, id) => 
                            <NavLink key={id} to={`../.././movies/${f.url.match(/\d+/g)}`}>
                                    <div >
                                        <li><span>Movie name: </span>{f.title}</li>
                                    </div>    
                            </NavLink>
                            )}
                        </div>
                </div>
            }
        </div>
    )
}

export default PersonageItem