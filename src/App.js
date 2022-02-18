import './App.css';
import Header from "./componentsAndPages/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Detail from "./componentsAndPages/Detail";
import EditMovie from "./componentsAndPages/EditMovie";
import SearchedMovies from "./componentsAndPages/SearchedMovies";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Routes>
                <Route index element={<Header/>} />
                <Route path="movie/:id/detail" element={<Detail />} />
                <Route path="movie/:id/edit" element={<EditMovie />} />
                <Route path="movie/search/:SearchedVal" element={<SearchedMovies />} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
