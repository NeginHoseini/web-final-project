import './AddMovieStyle.css';
import axios from "axios";
import {useState} from "react";

import ShowMovies from "./ShowMovies";

export default function AddMovie({list}){

    const[input,setInput]=useState(
        {
            name:'',
            year:'',
            description:'',
            poster:'',
        });


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(isNaN(input.year)){
            alert("Movie not added. Enter the information correctly!");
        }else{
            axios.post('http://localhost:8888/backend/api/movie/create.php', input).then(function(response){
                window.location.reload();
                console.log(response.data);

                setInput({
                    name:'',
                    year:'',
                    description:'',
                    poster:'',
                });
            });



        }
    }

    return(
        <div>
                <form onSubmit={handleSubmit} className="addContainer container">
                    <div className={"inForm"}>

                    <h1 style={{fontFamily : "Bahnschrift Condensed"}}>Add Movie</h1>

                    <input type="text" placeholder="Movie Name" name="name" value={input.name} required onChange={handleChange}/>

                    <input type="text" placeholder="Movie Year" name="year" value={input.year} required onChange={handleChange}/>

                    <textarea placeholder="Description" name="description" value={input.description} required onChange={handleChange}/>

                    <input className={"poster"} type="text" placeholder="Poster URL" name="poster" value={input.poster} required onChange={handleChange}/><br/>

                    <button type="submit" className="addBtn">Add</button><br/>


                    </div>
                </form>

            <ShowMovies />

        </div>
    )
}
