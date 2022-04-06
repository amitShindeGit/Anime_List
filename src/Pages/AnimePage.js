import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "../Assets/styles/AnimePage.module.css";
import AnimeService from "../services/anime-service";

const AnimePage = () => {
  const params = useParams();  //get id from url
  const [anime, setAnime] = useState();

  useEffect(() => {
    AnimeService.fetchAnimesById(params.id)
      .then((res) => setAnime(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {anime && (
        <div className={classes.main}>
          <div className={classes.title}>
            <div>
              <h1 className={classes.titleName}>{anime.title}</h1>
              <div className={classes.date}>
                <p>
                  {anime.release_date}{" "}
                  <span style={{ marginLeft: "0.3rem" }}>&#8226;</span>
                </p>
                <p>{anime.running_time}m</p>
              </div>
            </div>

            <div className={classes.rating}>
              <h3 className={classes.rating_st}>Rating</h3>
              <p>
                <span>
                  <i className={`${classes.star} ${"fas fa-star"}`}></i>
                </span>
                <strong style={{ color: "#fff" }}> {anime.rt_score}</strong>
                &#47;100
              </p>
            </div>
          </div>

          <div className={classes.image}>
            <img className={classes.imgBanner} src={anime.image} alt="film" />
            <div className={classes.img_desc}>
              <img className={classes.img2} src={anime.movie_banner} alt="banner" />
              <div className={classes.imgDescLayer}>
                <h1 className={classes.mandarinText}>{anime.original_title}</h1>
              </div>
            </div>
          </div>

          <div className={classes.description}>
            <p>{anime.description}</p>
          </div>
          <div className={classes.descriptionDir}>
            <p>
              Directors
              <span style={{ color: "#5799e2", marginLeft: " 0.5rem" }}>
                {anime.director}
              </span>
            </p>
          </div>
          <div className={classes.descriptionPro}>
            <span>
              Producers
              <span style={{ color: "#5799e2", marginLeft: " 0.5rem" }}>
                {anime.producer}{" "}
              </span>
            </span>
          </div>
          <div className={classes.descriptionDir}>
            <p>
              Title(Romanized){" "}
              <span style={{ color: "#fff", marginLeft: "0.5rem" }}>
                {anime.original_title_romanised}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimePage;
