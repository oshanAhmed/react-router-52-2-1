import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Users from "./components/Home/Users/Users";
import Topics from "./components/Tipics/Topics";
import Header from "./components/Header/Header";
import Friends from "./components/Friends/Friends/Friends";
import NotFound from "./components/NotFound/NotFound";
import FriendDetails from "./FriendDetails/FriendDetails";
import DetailPost from "./Posts/Post/DetailPost/DetailPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post/:postId"> 
          <DetailPost></DetailPost>
          </Route>
          <Route exact path="/friend/:id">
            <FriendDetails></FriendDetails>
          </Route>
          <Route path="/notFound">
            <NotFound></NotFound>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
