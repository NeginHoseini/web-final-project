import './EditStyle.css'
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function EditMovie(){
    const navigate = useNavigate();

    const[movie,setMovie]=useState(
        {
            name:'',
            year:'',
            description:'',
            poster:'',
        });

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

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMovie(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8888/backend/api/movie/edit.php`, movie).then(function (response) {
            console.log(response.data);
            navigate('/');
        });

    }

        return(
        <div className={"movieEditContainer"}>
            <div className={"innerEditCnt shadow"}>
                {movie?
                    <>
                <h1  className={"editTitle"}>Edit Movie</h1>
                <form onSubmit={handleSubmit} className="container m-4 text-start">
                    <div>
                        <div className={"row"}>
                            <div className={"col-6"}>
                        <label className={"formLbl"}>Movie Name  </label>
                        <input type="text"  className={"editInputs border-0"} name="name" value={movie.name}  required onChange={handleChange}/>
                            </div>
                            <div className={"col-6"}>
                        <label className={"formLbl"}>Movie Year  </label>
                        <input type="text" className={"editInputs border-0"} name="year" value={movie.year} required onChange={handleChange}/>
                            </div>
                        </div>

                        <label className={"formLbl"}>Poster  </label>
                        <input className={"ePoster border-0"} type="text" name="poster"  value={movie.poster} required onChange={handleChange}/><br/>

                        <label className={"formLbl"}>Description  </label>
                        <textarea className={"eDesc border-0"} name="description"  value={movie.description} required onChange={handleChange}/>

                        <button type="submit" className="editBtn col-5">Save Changes</button><br/>
                        <button className="cancelBtn" onClick={()=> navigate('/')}>Cancel</button>



                    </div>
                </form>
                    </>
                    :<h1 style={{color:"white"}}>Movie Not Found</h1> }
            </div>
        </div>
    )
}