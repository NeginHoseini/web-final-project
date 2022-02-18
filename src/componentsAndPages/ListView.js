import ListCard from "./ListCard";

export default function ListView({movies}){
    return(
        <div>
            {movies.map((movie, key) => (
                <ListCard id={movie.id}
                           name={movie.name}
                           year={movie.year}
                           poster={movie.poster}
                           key={key} />
            ))}
        </div>
    )
}