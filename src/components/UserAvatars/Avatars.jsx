import React from "react";
import { useDispatch } from "react-redux";
import { getUserAvatar } from "../../redux/slices/authMe";
import s from './Avatars.module.css'


const Avatars = () => {
  const dispatch = useDispatch()
    const importAll = (r) => {
      let images = {}
      r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); })
      return images
    }

    const images = importAll(require.context('../../assets/avatarIcon', false, /\.(png|jpe?g|svg)$/))
    
    const keys = Object.keys(images)
    const handleClick = (e) => {
      dispatch(getUserAvatar(e.target.src))
      // localStorage.setItem('userAva', e.target.src)       
    }

        return ( 
            <div className={s.avaContainer} onClick={handleClick}>{
              keys.map(key => {
                return <img key={key} src={require(`../../assets/avatarIcon/${key}`)} alt='avatar2' height={150} width={150}/>             
             })
            }
            </div>
        )
}
export default Avatars

