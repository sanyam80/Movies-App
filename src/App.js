import logo from './logo.svg';
import './App.css';
import {Banner} from "./component/Banner.js";
import Navbar from "./component/Navbar.js"
import Movies from './component/Movies';
// import Pagination from './component/Pagination';
import {Routes,Route} from "react-router-dom";
import Favourite from "./component/Favourite.js"

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Routes>
        <Route path = "/" element ={<><Banner/><Movies/></>}></Route>
        <Route path = "/favourite" element = {<Favourite></Favourite>}></Route>
       </Routes>
       
    </div>
  );
}

export default App;
