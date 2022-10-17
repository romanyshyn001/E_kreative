import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserAvatar } from "../../redux/slices/authMe";
import s from "./Avatars.module.css";

const Avatars = () => {
  const dispatch = useDispatch();

  const importAll = (imageName) => {
    const images = {};

    imageName.keys().forEach((item, index) => {
      images[item.replace("./", "")] = imageName(item);
    });
    return images;
  };

  const [selectedAvatar, setAvatar] = useState();

  const images = importAll(
    require.context("../../assets/avatarIcon", false, /\.(png|jpe?g|svg)$/)
  );

  const keys = Object.keys(images);

  const handleClick = (e) => {
    dispatch(setUserAvatar(e.target.src));
    setAvatar(e.target.alt);
  };

  return (
    <div className={s.avatarContainer} onClick={handleClick}>
      {keys.map((key) => {
        return (
          <img
            className={selectedAvatar === key ? s.userAvatar : null}
            key={key}
            src={require(`../../assets/avatarIcon/${key}`)}
            alt={key}
            height={50}
            width={50}
          />
        );
      })}
    </div>
  );
};
export default Avatars;
