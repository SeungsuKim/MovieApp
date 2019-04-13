import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
	render() {
		return (
			<div>
				<h1>hello this is a movie</h1>
				<MoviePoster />
			</div>
		)
	}
}

class MoviePoster extends Component {
	render() {
		return (
			<img src="https://scontent.ficn2-1.fna.fbcdn.net/v/t1.0-9/49656429_2572018432814792_3690629435691630592_o.jpg?_nc_cat=108&_nc_ht=scontent.ficn2-1.fna&oh=4673c88abb927b4c9bc8e23b60807286&oe=5D2E070B" />
		)
	}
}

export default Movie