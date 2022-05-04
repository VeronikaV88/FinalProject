import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Header from "./Header";
import Profile from "./Profile";
import Signin from "./Signin";
import Quotes from "./Quotes";
import UserSignup from "./UserSignup";
import NavBar from "./NavBar";
import Quiz from "./Quiz";
import Videos from "./Videos";
import EpisodeGuide from "./EpisodeGuide";
import Characters from "./Characters";
import ActionBar from "./ActionBar";
import Forum from "./Forum";
import PostedComment from "./PostedComment";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/videos">
          <Videos />
        </Route>
        <Route path="/episodeguide">
          <EpisodeGuide />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/profile/:id">
          <Profile />
        </Route>
        <Route path="/UserSignup">
          <UserSignup />
        </Route>
        <Route path="/Forum">
          <Forum />
        </Route>
        <Route path="/postedComment">
          <PostedComment />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
