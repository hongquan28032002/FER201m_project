import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import "./bootstrap/dist/css/bootstrap.min.css";
import Films from "./components/Films";
import data from "./components/films.json";
import Login from "./components/Login";
import Register from "./components/Register.js";
import Home from "./components/Home";

import "./App.css";
import Navbar from "./components/Navbar";
import { useState, createContext, useEffect } from "react";
export const UserContent = createContext();

function App() {
  const [allfilms, setAllfilms] = useState(data);
  const [filteredFilm, setFilteredFilm] = useState([]);

  return (
    <div>
      <UserContent.Provider
        value={{ filteredFilm, setFilteredFilm, allfilms, setAllfilms }}
      >
        {/* <Navbar />  */}

        <Router>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/films/:catename" element={<Films />}></Route>
          </Routes>
        </Router>
        
      </UserContent.Provider>
    </div>
  );
}

export default App;
