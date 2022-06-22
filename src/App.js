import React, { useState, useEffect } from "react";
import "./App.css";
import MoviesList from "./components/movieslist/MoviesList";
import NavBar from "./components/navbar/NavBar";
import { data } from "./data";
function App() {
    const [movies, setMovies] = useState(data);
    const [search, setSearch] = useState("");
    const [rate, setRate] = useState(0);
    console.log(rate);
    // const getMovies = () => {
    //     setMovies(data);
    // };
    // useEffect(getMovies(), [movies]);
    return (
        <div className="App">
            <NavBar setSearch={setSearch} setRate={setRate} rate={rate} />
            <MoviesList movies={movies} search={search} rate={rate} />
        </div>
    );
}

export default App;
