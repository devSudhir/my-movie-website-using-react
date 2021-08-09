import { Link } from "react-router-dom";

import style from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/">Home</Link>

      <Link to="/movie">Movies</Link>
      <Link to="/search">search</Link>
    </nav>
  );
};
