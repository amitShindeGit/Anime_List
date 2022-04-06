import React, { useEffect, useState } from 'react'
import AnimeCard from '../Assets/UI/AnimeCard';
import AnimeService from '../services/anime-service';

const AnimeList = () => {
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        AnimeService.fetchAnimes()
          .then((res) => setAnimeList(res.data))
          .catch((err) => console.log(err));
      }, []);


      return (
        <div>
          {animeList &&
            animeList.map((anime) => {
              return (
                <AnimeCard
                  key={anime.id}
                  current_anime_id={anime.id}
                  title={anime.original_title}
                  img={anime.movie_banner}
                  date={anime.release_date}
                />
              );
            })}
        </div>
      );
    
}

export default AnimeList