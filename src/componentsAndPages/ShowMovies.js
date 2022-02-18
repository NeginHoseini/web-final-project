import {BsFillGrid3X3GapFill, BsList} from "react-icons/bs";
import {useEffect, useState} from "react";
import axios from "axios";
import ListView from "./ListView";
import GridView from "./GridView";
import "./ShowMoviesStyle.css"

export default function ShowMovies() {

    const [movies, setMovies] = useState([]);
    const [list,setList] = useState();



    function gridView() {
        setList(false);
        localStorage.setItem("view","grid");
    }

    function listView() {
        setList(true);
        localStorage.setItem("view","list");
    }




    useEffect(() => {
        getMovies();
    }, []);

    function getMovies() {
        axios.get(`http://localhost:8888/backend/api/movie/read.php`).then(function(response) {
            console.log(response.data);
            setMovies(response.data);
        });
    }


    return(
        <div>
                <section className={"moviesCnt"}>
                    <div className={"row"}>
                        <h1 className={"col-md-7 text-end movieTitle"}
                            style={{paddingRight:"3%"}}>Movies</h1>

                        <div className={"col-md-4 text-end pt-1"}>
                            <button className={"border-0 viewBtn"} style={{marginRight:"5%"}}
                                onClick={() => listView()}
                            >
                                <BsList style={{color:"white"}} size={30}></BsList>
                            </button>

                            <button className={"border-0 viewBtn"} onClick={() => gridView()}
                            >
                                <BsFillGrid3X3GapFill className={"mt-1"} style={{color:"white"}} size={22}></BsFillGrid3X3GapFill>
                            </button>
                        </div>

                    </div>

                    {Boolean (localStorage.getItem("view")==="list") ? (
                        <ListView movies={movies} />
                    ) : (
                        <GridView movies={movies} />
                    )}
                </section>
                <br/>
            </div>
    )
}