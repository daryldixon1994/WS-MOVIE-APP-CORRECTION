import React from "react";
import MovieItem from "../movieItem/MovieItem";
import "./MoviesList.css";
function MoviesList(props) {
    console.log(props.rate);
    return (
        <div className="movies-list">
            {props.movies
                .filter((movie) =>
                    props.rate && !props.search
                        ? movie.rate === props.rate
                        : props.search && !props.rate
                        ? movie.title.includes(props.search)
                        : props.rate && props.search
                        ? movie.title.includes(props.search) &&
                          movie.rate === props.rate
                        : movie.title.includes(props.search)
                )
                .map((movie) => {
                    return <MovieItem key={movie.id} movie={movie} />;
                })}
        </div>
    );
}

export default MoviesList;
