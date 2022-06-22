import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieItem.css";
function MovieItem(props) {
    return (
        <div className="movie-item">
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={props.movie.cover}
                    style={{ height: "450px" }}
                />
                <Card.Body style={{ height: "360px" }}>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <Card.Subtitle>Category</Card.Subtitle>
                    <Card.Text> {props.movie.category} </Card.Text>
                    <Card.Subtitle>Rate</Card.Subtitle>
                    <Card.Text> {props.movie.rate} </Card.Text>
                    <Card.Subtitle>Cast</Card.Subtitle>
                    <Card.Text> {props.movie.cast} </Card.Text>
                    <Card.Subtitle>Release date</Card.Subtitle>
                    <Card.Text> {props.movie.release} </Card.Text>
                    <Button variant="primary">See details</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieItem;
