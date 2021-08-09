import axios from "axios";
import { Link } from "react-router-dom";
import style from "./Movies.module.css";
import { useState } from "react";
export const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=eee7befa3f02f37831e40aacb0fc3d76&query=${keyword}`
      )
      .then((res) => setData(res.data.results));
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit">search</button>
        </form>
      </div>

      {data.length > 0 ? (
        <div>
          {data.map((ele) => {
            return (
              <div className={style.movieContainer} key={ele.id}>
                <img
                  className={style.image}
                  src={`https://image.tmdb.org/t/p/w1280${ele.poster_path}`}
                  alt=""
                />
                <h2>{ele.title}</h2>
                <h3>Language: {ele.original_language}</h3>
                <h4>Release Date: {ele.release_date}</h4>
                <h5>
                  Rating: {ele.vote_average}/10 ({ele.vote_count})
                </h5>
                <Link to={`/movie/${ele.id}`}>More Details</Link>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
