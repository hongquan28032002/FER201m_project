import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect, useContext, useRef } from 'react'
import { UserContent } from '../App'
import { createBrowserHistory } from 'history';


function Films() {


    const history = createBrowserHistory();
    const { allfilms } = useContext(UserContent)
    const { setAllfilms } = useContext(UserContent)
    console.log(allfilms);
    // const [categgory, setCategory] = useState([{
    //     albumId: 0
    // }])

    const { catename } = useParams();
    const { filteredFilm } = useContext(UserContent)
    const { setFilteredFilm } = useContext(UserContent)
    useEffect((e) => {
        if (catename.includes("all")) {
            setFilteredFilm(allfilms);
        } else if (catename) {
            setFilteredFilm(allfilms.filter((p) => p.category.includes(catename)));

        }
    }, [allfilms]);






    const CatenameID = allfilms.reduce((aprev, anext) => {

        if (!aprev.includes(anext.category)) {
            aprev.push(anext.category);
        }
        return aprev;
    }, []);


    //    console.log(Catename);
    ////////////////////////////////////////////////////////

    const filter = (name) => {

        name.includes("all") ? setFilteredFilm(allfilms) : setFilteredFilm(allfilms.filter((p) => p.category.includes(name)))
        history.push("/films/" + name)
    }


    // const handleSearch = () => {
    //     const searchVal = search.current.value;
    //     const searchResult = photos.filter(s => s.title.toLowerCase().startsWith(searchVal.toLowerCase()));
    //     setFilteredPhotos(searchResult);
    //     console.log(searchResult);

    // };



    // const handleLogout = () => {
    //     setUser({})
    //     setLogin(false)
    // }

    return (



        <div class="row mb-5">

            {/* <div class="row">
                <div class="col-12 text-center row background-image">
                    <div class="col-9 align-self-center">
                        <input ref={search} />&nbsp;
                        <button class="btn-light" onClick={handleSearch}>Search</button>
                    </div>
                    <div class="col-3">

                        <h5>{user.email}</h5>
                        <p><button class="btn btn-primary" onClick={handleLogout}>Log out</button></p>
                        <div class="mt-4 mb-2">
                            <button class="btn btn-success" onClick={() => navigate('/create')}>Add new</button>
                        </div></div>

                </div> */}

            <div class="col-2 card ">
                <h2 class='btn btn-success mt-5 mb-2' onClick={() => filter("all")}>All</h2>
                <div class="row">
      
                    {CatenameID.map((category) => (
                        <div class="col-6 mb-4 text-center">
                            <div class='btn btn-outline-success border-success rounded-circle' onClick={() => filter(category)}>{category}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div class="background-element col-10 card">


                <div class="mt-5">
                    <ul style={{ textDecoration: 'none', fontSize: '7px' }}>
                        <div class="row">
                            {filteredFilm.map((p) => (
                                <div class="col-3 border-3  mb-5" style={{ width: '150x', height: '400px' }}>
                                    <li class="card btn">
                                        <img  src={require(`./images/${p.img}`)} width='100%' height={'200px'} alt="" />
                                        <br/>
                                        <p class="text-center" style={{ fontSize: '15px',fontWeight: 'bolder' }}>{p.name}</p>
                                      
                                        <p style={{ fontSize: '12px',fontWeight: 'bolder'  }}>Public year : {p.publicdate}</p>
                                        <p style={{ fontSize: '12px',fontWeight: 'bolder'  }}>Category : {p.category}</p>
                                        <p style={{ fontSize: '12px',fontWeight: 'bolder'  }}>Vote Rate : {p.mark}</p>
                                        <p class="btn btn-success" style={{ fontSize: '12px',fontWeight: 'bolder'  }}>VOTE</p>
                                    </li>
                                </div>
                            ))}
                        </div>
                    </ul>
                </div>
            </div>
        </div>


    )
}



export default Films;