import React from 'react';
import { UserContent } from '../App'
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { useState, createContext, useEffect, useRef, useContext } from 'react';
function Navbar() {
    const searchinput = useRef("")
    const { allfilms } = useContext(UserContent)
    const { filteredFilm } = useContext(UserContent)
    const { setFilteredFilm } = useContext(UserContent)
    const { setAllfilms } = useContext(UserContent)
    const { status,setStatus } = useContext(UserContent)


    const handleSearch = (e) => {
        e.preventDefault();

        const searchinputValue = document.getElementById('searchitem').value; // use optional chaining to safely access value property
        
        if(!searchinputValue) {
            alert('Please enter a search input value');
        }else{
        window.location.href = `/search/${searchinputValue}`; 
        }
    };

    return (
        <div class="text-center">
            <nav class="navbar navbar-expand-lg navbar-light bg-success text-center">

                <div class="col-2">
                    <h1 class="navbar-brand" href="#" style={{ fontWeight: "bolder", color: "white" }}>Film+</h1>
                </div>
                <div class="btn col-2 row justify-content-start" onClick={() => window.location.href = '/films/all'} style={{ color: "white" }}>
                    Home
                </div>
                <div class="col-6 row justify-content-end">

                    <form onSubmit={handleSearch} class="form-inline my-2 my-lg-0">

                        <input class="form-control mr-sm-2" type="search" id='searchitem' placeholder="Search" aria-label="Search" />
                        <button class="btn btn-light my-2 my-sm-0" type='submit'>Search</button>
                    </form>
                </div>
                <div class="col-1 row justify-content-center">

                    <button class="btn border rounded-circle">Login</button>
                </div>
                <div class="col-1 row justify-content-end">

                    <button class="btn border rounded-circle">Register</button>
                </div>


            </nav>
        </div>

    );
}

export default Navbar;