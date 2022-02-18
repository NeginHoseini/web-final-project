import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import ShowFull from "./ShowFull";
import './SearchedMoviesStyle.css'

export default function SearchedMovies(){

    const [movies, setMovies] = useState([]);
    const {SearchedVal} = useParams();

    useEffect(() => {
        getMovie();
    }, []);


    function getMovie() {
        axios.get(`http://localhost:8888/backend/api/movie/search.php?search=${SearchedVal}`).then(function(response) {
            console.log(response.data);
            setMovies(response.data);
        });
    }


    return(
        <div>
            <h1 className={"searchTitle pt-2"}>Movies</h1>

           <div className={"searchedCnt p-2"}>

            {movies.map((movie, key) => (
                <ShowFull movie={movie}
                          key={key} />
            ))}

          </div>
        </div>
    )
}