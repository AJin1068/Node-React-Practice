import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  //Route 를 여러개 두고 싶을 경우 이렇게 Route태그를 여러개 놓으면 됨
  //Route의 component가 위에서 import한 페이지임
  return (
    <div className="App">
      <Router>
        <Link to="createPost"> Create A Post</Link>
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/createPost" exact Component={CreatePost}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
