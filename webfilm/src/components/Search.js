import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect, useContext, useRef } from 'react'
import { UserContent } from '../App'
import Films from './Films';
import { createBrowserHistory } from 'history';


export default function Search() {
    const history = createBrowserHistory()
    const navigate = useNavigate()
    const { allfilms } = useContext(UserContent)
    const { setAllfilms } = useContext(UserContent)
    const { searchvalue } = useParams()
    const s = String(searchvalue)
    const { filteredFilm } = useContext(UserContent)
    const { setFilteredFilm } = useContext(UserContent)
    useEffect((e) => {
        if(s){
            setFilteredFilm(allfilms.filter((p) => p.name.toLowerCase().includes(s.toLowerCase())));
        }else if(!s){
            navigate('/films/all')
        }

    }, [allfilms]);

    const CatenameID = allfilms.reduce((aprev, anext) => {

        if (!aprev.includes(anext.category)) {
            aprev.push(anext.category);
        }
        return aprev;
    }, []);
    const filter = (name) => {

        name.includes("all") ? setFilteredFilm(allfilms) : setFilteredFilm(allfilms.filter((p) => p.category.includes(name)))
        history.push("/films/" + name)
    }

    return (



        <div>
                <div class="row justify-content-center mt-3 mb-3">
                <h2 class='btn btn-outline-success border-success rounded-circle mr-5 ml-5' onClick={() => filter("all")}>All</h2>
                
      
                    {CatenameID.map((category) => (
                        
                            <h2 class='btn btn-outline-success border-success rounded-circle mr-5 ml-5' onClick={() => filter(category)}>{category}</h2>
                        
                    ))}
                
            </div>

            
                <ul style={{ textDecoration: 'none', fontSize: '7px' }}>
                    <div class="row">
                        {filteredFilm.map((p) => (
                            <div class="col-3 border-3  mb-5" style={{ width: '150x', height: '400px' }}>
                                <li class="card btn" onClick={() => navigate(`/detail/${p.category}/${p.id}`)}>
                                    <img src={require(`./images/${p.img}`)} width='100%' height={'200px'} alt="" />
                                    <br />
                                    <p class="text-center" style={{ fontSize: '15px', fontWeight: 'bolder' }}>{p.name}</p>

                                    <p style={{ fontSize: '12px', fontWeight: 'bolder' }}>Public year : {p.publicdate}</p>
                                    <p style={{ fontSize: '12px', fontWeight: 'bolder' }}>Category : {p.category}</p>
                                    <p style={{ fontSize: '12px', fontWeight: 'bolder' }}>Vote Rate : {p.mark}</p>
                                    <p class="btn btn-success" style={{ fontSize: '12px', fontWeight: 'bolder' }}>VOTE</p>
                                </li>
                            </div>
                        ))}
                    </div>
                </ul>
            


        </div>


    )
}



