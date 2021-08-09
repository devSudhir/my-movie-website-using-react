import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./Movies.module.css";
export const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  console.log(moviesData);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=eee7befa3f02f37831e40aacb0fc3d76"
      )
      .then((res) => setMoviesData(res.data.results));
  }, []);
  return (
    <div className={style.imageContainer}>
      {moviesData.map((ele) => {
        return (
          <div className={style.movieContainer} key={ele.id}>
            <img
              className={style.image}
              src={`https://image.tmdb.org/t/p/w1280${ele.poster_path}`}
              alt=""
            />
            <h2>{ele.title}</h2>
            <h3>{ele.original_language}</h3>
            <h4>{ele.release_date}</h4>
            <h5>
              {ele.vote_average}/10 ({ele.vote_count})
            </h5>
            <Link to={`/movie/${ele.id}`}>More Details</Link>
          </div>
        );
      })}
    </div>
  );
};

// {/* <img src ="https://image.tmdb.org/t/p/w1280/8kNruSfhk5IoE4eZOc4UpvDn6tq.jpg" /> */}
