import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import {Link} from "react-router-dom";
import axios from "axios";
import './ListCardStyle.css'


export default function ListCard({id,name,year,poster}) {

    const deleteMovie = () => {
        axios.delete(`http://localhost:8888/backend/api/movie/delete.php?id=${id}`).then(function(response){
            console.log(response.data);
            window.location.reload();
        });
    }


    return (
        <div>
            <div className={"card hCard"} style={{background:"#939896", fontFamily:"Bahnschrift Condensed"}}>
                <div className={"row"}>
                    <div className="col-md-2" style={{
                    }}>
                        <img
                            style={{height:"18vh"}}
                            className="img-fluid mt-2" src={poster} alt="movie poster" />

                    </div>
                    <div className="col-md-4" style={{
                        fontFamily:"Algerian",
                    }}>
                        <h3 className={"card-title mt-5 text-start"}> {name} </h3>
                    </div>

                    <div className="col-md-2">
                        <h3 className={"mt-5 text-start"}>({year})</h3>
                    </div>

                    <div className="col-md-2">
                        <Link to={`movie/${id}/detail`} >
                        <button className={"btn btn-success mt-5"}>Read More...</button>
                        </Link>
                    </div>

                    <div className="col-md-2">
                        <Link to={`movie/${id}/edit`} >
                        <button className={"border-0 mt-5 mx-3 listBtn"} >
                            <FaEdit size={30}></FaEdit>
                        </button>
                        </Link>
                        <button onClick={() => deleteMovie()} className={"border-0 mt-5 listBtn"}  >
                        <MdDelete size={30}></MdDelete>
                        </button>
                    </div>

                </div>


            </div>
        </div>
    )
}