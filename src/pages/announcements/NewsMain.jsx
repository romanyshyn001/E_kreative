import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { newsLoading } from "../../redux/slices/announcements";
import s from "./s.module.css"
const NewsMain = () => {
    const dispatch = useDispatch()
    const {announcements} = useSelector(state => state.announcements)

    useEffect(() => {
        dispatch(newsLoading())
    }, [dispatch])
    
    return(
    <div className={s.container}>
        <div>
            { announcements.map(b => <div key={b.id}>
                <div className={s.info}>
                <span>{b.title}</span>
                <div>
                    <p>{b.body}</p>
                    <p>{b.updatedAt.split('T')[0]}</p>
                </div>
                </div>
                
                <div className={s.action}>
                    <span> Reply </span>
                    <span> Edit </span>
                    <span> Remove </span>
                </div>
                </div>)  
            }
        </div>
    </div>
    )
} 
export default NewsMain;
