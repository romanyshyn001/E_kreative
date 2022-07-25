import React from "react";
import s from './Auth/style.module.css'

const Avatars = () => {

    const importAll = (r) => {
        let images = {};
       r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
     }
     
     const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

     const add = (function () {
        let counter = 0;
        return function () {
            counter += 1; return counter
        }
      })();

      const handleClick = (e) => {
        localStorage.setItem('userAva', e.target.src)
        
      }
        return (
            <div className={s.avaContainer} onClick={handleClick}>
                <img src={images[`ava${add()}.png`]} alt='avatar1' height={150} width={150} />
                <img src={images[`ava${add()}.png`]} alt='avatar2' height={150} width={150}/>
                <img src={images[`ava${add()}.png`]} alt='avatar3' height={150} width={150}/>
                <img src={images[`ava${add()}.png`]} alt='avatar4' height={150} width={150}/>
                <img src={images[`ava${add()}.png`]} alt='avatar5' height={150} width={150}/>
                <img src={images[`ava${add()}.png`]} alt='avatar6' height={150} width={150}/>
                <img src={images[`ava${add()}.png`]} alt='avatar6' height={150} width={150}/>
                <img src={images[`ava${add()}.png`]} alt='avatar6' height={150} width={150}/>
                <img src={images[`ava${add()}.png`]} alt='avatar6' height={150} width={150}/>
                <img src={images[`ava${add()}.png`]} alt='avatar6' height={150} width={150}/>
            </div>
        )
}
      

export default Avatars