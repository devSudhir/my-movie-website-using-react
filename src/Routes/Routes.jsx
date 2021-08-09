import { Switch, Route } from "react-router-dom";
import { Movies } from "../Components/Movies";
import { MovieDetails } from "../Components/MovieDetails";
import { Navbar } from "./Navbar";
import { Home } from "../Components/Home";
import { Search } from "../Components/Search";
export const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/movie">
          <Movies />
        </Route>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </>
  );
};
