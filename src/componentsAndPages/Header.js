import AddMovie from "./AddMovie";
import {useState} from "react";
import {Link} from "react-router-dom";


export default function Header(){

    const [searched, setSearched] = useState('');


    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setSearched('');
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setSearched(value);
    }


    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand mx-5" href="#">MOVIE</a>
                        <form className="d-flex" onSubmit={handleSearchSubmit}>
                            <input className="form-control me-2" required placeholder="Search(Name/Year)" value={searched} aria-label="Search"  onChange={handleChange} />
                            <Link to={`movie/search/${searched}`} >
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </Link>
                        </form>
                    </div>
            </nav>

            <AddMovie/>

        </div>
    )

}