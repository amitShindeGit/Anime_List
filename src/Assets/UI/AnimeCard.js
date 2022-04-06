import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from '../styles/AnimeCard.module.css'

const AnimeCard = ({title, date, img, current_anime_id}) => {
  const navigate = useNavigate();

  const onCLickHandler = (event) => {
    event.preventDefault();
    navigate(`/anime/${current_anime_id}`);
    
  }

  return (
      <div className={classes.container}>
      <div className={classes.card}>
        <h2>{title}</h2>
        <i className={`${classes.icn} ${'fa fa-arrow-right'}`}></i>
        <p>{date}</p>
        <div className={classes.pic} style={{backgroundImage: `url(${img})`}}></div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <button onClick={onCLickHandler}></button>
      </div>
      </div>
    
  )
}

export default AnimeCard;