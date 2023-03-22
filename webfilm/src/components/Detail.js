import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect, useContext, useRef } from 'react'
import { UserContent } from '../App'
import Films from './Films';

import { createBrowserHistory } from 'history';


export default function Detail() {

  


    const navigate = useNavigate()
    const history = createBrowserHistory();
    const { allfilms } = useContext(UserContent)
    const { setAllfilms } = useContext(UserContent)


    const { catename } = useParams();
    const { id } = useParams();
    // console.log(catename);


    const film = allfilms.find(f => (f.category.includes(catename) && f.id === parseInt(id)));
    console.log(film.name);

    const commentsSection = () => {
      const currentUser = JSON.parse(localStorage.getItem("user"));
      console.log(currentUser)
      if(!currentUser){
        window.confirm("Please login to continue");
        navigate("/login");
      }
      else{
        navigate("/films/" + catename + "/" + id + "/" + currentUser.email);
      }
    }
    return (
        <div >
          
            <div className='row mt-5 justify-content-center'>
              <div className='col-5'><img src={require(`./images/${film.img}`)} width='100%' height={'80%'} alt="" /></div>
              <div className='col-6'>
                <h1>{film.name}</h1>
      
                <p><span style={{fontWeight : "bolder"}}>Category:</span>{film.category}</p>
                <p><span style={{fontWeight : "bolder"}}>Mark:</span>{film.mark}</p>
                <p><span style={{fontWeight : "bolder"}}>Description:</span>{film.description}</p>
      
                <button onClick={commentsSection} className='btn btn-success'>Vote</button><hr/>
      
                <h1>Comments</h1>
      
              </div>
            </div>
          
        </div>
      );
}