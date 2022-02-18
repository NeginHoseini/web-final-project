import './DetailStyle.css';

export default function ShowFull({movie}){
    return(
            <div className={"innerFull shadow "}>
                <div className={"row"}>
                    <div className="col-md-5">
                        <img style={{height:"60vh"}}
                            className="img-fluid mt-2 mb-2" src={movie.poster} alt="movie poster" />
                    </div>

                    <div className="col-md-7" >
                        <h1 className={"movieName"}>{movie.name}</h1>
                        <h3 className={"movieYear"}> ({movie.year})</h3>
                        <p className={"movieDesc"}>{movie.description}</p>
                    </div>

                </div>
             </div>
    )
}