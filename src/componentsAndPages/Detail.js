import './DetailStyle.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Detail(){

    const [movie, setMovie] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getMovie();
    }, []);

    function getMovie() {
        axios.get(`http://localhost:8888/backend/api/movie/readById.php?id=${id}`).then(function(response) {
             console.log(response.data);
             setMovie(response.data);
        });
    }


    return(
        <div className={"movieDetailContainer"}>
            <div className={"innerCnt shadow"}>
                {movie?
                    <div className={"row"}>
                             <div className="col-md-5">
                                  <img
                                style={{
                                     height:"60vh"
                                }}
                                className="img-fluid mt-2" src={movie.poster} alt="movie poster" />

                             </div>

                              <div className="col-md-7" >
                                  <h1 className={"movieName"}>{movie.name}</h1>
                                  <h3 className={"movieYear"}> ({movie.year})</h3>
                                  <p className={"movieDesc"}>{movie.description}</p>
                        </div>

                    </div>
                    :<h1 style={{color:"white"}}>Movie Not Found</h1> }
            </div>
        </div>

    )
}