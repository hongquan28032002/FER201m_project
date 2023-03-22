import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from 'react-router-dom'
import './bootstrap/dist/css/bootstrap.min.css'
import Films from './components/Films';
import data from './components/films.json'
import Detail from './components/Detail';
import Search from './components/Search';
import './App.css';
import Navbar from './components/Navbar';
import { useState, createContext, useEffect } from 'react';
export const UserContent = createContext()




function App() {



  const [allfilms, setAllfilms] = useState(data)
  const filmm = {
    id: 17,
    img: "image001_11.jpg",
    category: "Action",
    description: "'Spider-Man: No Way Home' follows Peter Parker as he navigates a multiverse filled with familiar villains and alternate Spider-Men.",
    name: "Spiderman noway home",
    publicdate: 2021,
    mark: "",
    comments: []
}
   data.push(filmm)
  const [filteredFilm, setFilteredFilm] = useState([]);
  


  return (
    <div>
     
      <UserContent.Provider value={{ filteredFilm, setFilteredFilm,allfilms, setAllfilms }}>
      <Navbar />
        <Router>
          <Routes>
             
            
            <Route path="/films/:catename" element={<Films />}></Route>
            <Route path="/detail/:catename/:id" element={<Detail />}></Route>
            <Route path="/search/:searchval" element={<Search />}></Route>



           



            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Router>
      </UserContent.Provider>
    </div>

  );
}



export default App;
