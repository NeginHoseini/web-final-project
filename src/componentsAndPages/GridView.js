import GridCard from "./GridCard";

export default function GridView({movies}){
    return(
        <div>
                <div className={"row"}>
                    {movies.map((movie, key) => (
                        <GridCard id={movie.id}
                                   name={movie.name}
                                   year={movie.year}
                                   poster={movie.poster}
                                   key={key} />
                    ))}
                </div>
            </div>
    )
}