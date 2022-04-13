import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Header from "./Header";
import Profile from "./Profile";
import Signin from "./Signin";
// import Auth0Provider from "./Auth0Provider";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Auth0Provider> */}
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/profile/:id">
          <Profile />
        </Route>
        {/* <Route exact path="/Signin">
          <Signin />
        </Route> */}
      </Switch>
      {/* </Auth0Provider> */}
    </BrowserRouter>
  );
};

export default App;
