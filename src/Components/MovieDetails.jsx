import style from "./Movies.module.css";
import { useParams } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";

export const MovieDetails = () => {
  const param = useParams();
  console.log("param", param);
  const [data, setData] = useState([]);
  console.log("data", data);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}}?api_key=eee7befa3f02f37831e40aacb0fc3d76`
      )
      .then((res) => setData(res.data));
  }, [param.id]);

  return (
    <>
      {data && (
        <div className={style.movieContainer} key={data.id}>
          <img
            className={style.image}
            src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
            alt=""
          />
          <h2>{data.title}</h2>
          <h3>Language:{data.original_language}</h3>
          <h4>release_date:{data.release_date}</h4>
          <h5>
            Rating:{data.vote_average}/10 ({data.vote_count})
          </h5>
          <p>{data.overview}</p>
        </div>
      )}
    </>
  );
};
