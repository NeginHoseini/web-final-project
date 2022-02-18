import './GridCardStyle.css';
import {Link} from "react-router-dom";
import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import axios from "axios";

export default function GridCard({id,name,year,poster}){


    const deleteMovie = () => {
        axios.delete(`http://localhost:8888/backend/api/movie/delete.php?id=${id}`).then(function(response){
            console.log(response.data);
            window.location.reload();
        });
    }


    return(


<div className={"col-3 p-4"}>
            <div className="card shadow mt-5 m-2 " style={{ fontFamily:"Bahnschrift Condensed"}} >

                <img className="card-img-top" src={poster} alt="movie poster" style={{height:"45vh"}}/>

                <div className="card-body" style={{height: "18vh"}} >
                    <h5 className="card-title" style={{fontFamily:"Algerian"}}>{name}</h5>
                    <p className="card-text">({year})</p>


                    <div className={"row"}>

                    <div className={"col-6 text-start"}>
                    <Link to={`movie/${id}/detail`} >
                        <button className={"btn btn-success"}
                        >Read More...</button>
                    </Link>
                    </div>

                        <div className={"col-5 text-end"}>
                        <Link to={`movie/${id}/edit`} >
                    <button className={"border-0 cardBtn"}>
                        <FaEdit size={30}></FaEdit>
                    </button>
                    </Link>


                    <button onClick={() => deleteMovie()} className={"border-0 mx-2 col-2 cardBtn"} >
                        <MdDelete size={30}></MdDelete>
                    </button>

                    </div>
                 </div>
                </div>
            </div>
</div>


    )

}