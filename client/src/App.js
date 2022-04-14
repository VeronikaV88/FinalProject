import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Header from "./Header";
import Profile from "./Profile";
import Signin from "./Signin";
import Quotes from "./Quotes";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/profile/:id">
          <Profile />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
