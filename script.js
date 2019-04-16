const movies = [
	{
		movie_id: 1,
		title: 'Forrest Gump',
		year: 1994,
		description: 'The story depicts several decades in the life of Forrest Gump (Hanks), a slow-witted but kind-hearted man from Alabama who witnesses several defining historical events in the 20th century in the United States.',
		poster: 'https://images-na.ssl-images-amazon.com/images/I/512y3FISDIL._SL160_.jpg'
	},
	{
		movie_id: 2,
		title: 'The Godfather',
		year: 1972,
		description: 'The story, spanning 1945 to 1955, chronicles the family under the patriarch Vito Corleone (Brando), focusing on the transformation of Michael Corleone (Pacino) from reluctant family outsmovie_ider to ruthless mafia boss.',
		poster: 'https://images-na.ssl-images-amazon.com/images/I/41%2BHJCUl3EL._SL160_.jpg'
	},
	{
		movie_id: 3,
		title: 'The Shawshank Redemption',
		year: 1994,
		description: 'The story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murder of his wife and her lover, despite his claims of innocence.',
		poster: 'https://images-na.ssl-images-amazon.com/images/I/519NBNHX5BL._SL160_.jpg'
	},
	{
		movie_id: 4,
		title: 'Pulp Fiction',
		year: 1994,
		description: 'several stories of criminal Los Angeles. The film\'s title refers to the pulp magazines and hardboiled crime novels popular during the mmovie_id-20th century, known for their graphic violence and punchy dialogue.',
		poster: 'https://images-na.ssl-images-amazon.com/images/I/51xTf3g7OhL._SL160_.jpg'
	},
	{
		movie_id: 5,
		title: 'Inception',
		year: 2010,
		description: 'The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious, and is offered a chance to have his criminal history erased as payment for the implantation of another person\'s movie_idea into a target\'s subconscious.',
		poster: 'https://images-na.ssl-images-amazon.com/images/I/51TfUWh5N9L._SL160_.jpg'
	}
];

const MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title);
	}
});

const MovieYear = React.createClass({
	propTypes: {
		year: React.PropTypes.number.isRequired
	},
	render: function() {
		return React.createElement('span', {}, ` (${this.props.year})`);
	}
});

const MovieDescription = React.createClass({
	propTypes: {
		description: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('p', {}, this.props.description);
	}
});

const MoviePoster = React.createClass({
	propTypes: {
		poster: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('img', {src: this.props.poster});
	}
});

const Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function() {
		return React.createElement('li', {key: this.props.movie.movie_id},
			React.createElement(MoviePoster, {poster: this.props.movie.poster}),
			React.createElement(MovieTitle, {title: this.props.movie.title}),
			React.createElement(MovieYear, {year: this.props.movie.year}),
			React.createElement(MovieDescription, {description: this.props.movie.description}));
	}
});

const MoviesList = React.createClass({
	PropTypes: {
		movies: React.PropTypes.array.isRequired
	},
	render: () => React.createElement('ul', {}, movies.map(movie => React.createElement(Movie, {key: movie.movie_id, movie: movie})))
}); 

const element = React.createElement('div', {},
	React.createElement('h1', {},'Top 5 best films ever'.toUpperCase()),
	React.createElement(MoviesList, {movies: movies}));
	
ReactDOM.render(element, document.getElementById('app'));