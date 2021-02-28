// Code goes here

class MovieModel {
    constructor(titleOrTmdbMovie, id, director, imageUrl, imdbUrl, runtime) {
        if (arguments.length === 1) {
            this.director = titleOrTmdbMovie.director;
            this.id = titleOrTmdbMovie.id;
            this.imageUrl = "https://image.tmdb.org/t/p/w500" + titleOrTmdbMovie.poster_path;
            this.imdbUrl = "https://www.imdb.com/title/" + titleOrTmdbMovie.imdb_id;
            this.runtime = titleOrTmdbMovie.runtime;
            this.title = titleOrTmdbMovie.title;
        } else {
            this.director = director;
            this.id = id;
            this.imageUrl = "https://image.tmdb.org/t/p/w500" + imageUrl;
            this.imdbUrl = "https://www.imdb.com/title/" + imdbUrl;
            this.runtime = runtime;
            this.title = titleOrTmdbMovie;
        }
    }

    toString() {
        return (
            "\n{ \n id: " + this.id +
            ", \n title: \"" + this.title +
            "\", \n runtime: " + this.runtime +
            ", \n image: \"" + this.image +
            "\", \n imdb: \"" + this.imdb + "\" \n}"
        );
    }
}

class Movies extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Creating an array of movie cards based on this.props.movies
        let movieCards = this.props.movies.map(movie => (
            <ReactBootstrap.Col md="4">
                <ReactBootstrap.Card>
                    <ReactBootstrap.Card.Img variant="top" src={movie.imageUrl} />
                    <ReactBootstrap.Card.Body>
                        <ReactBootstrap.Card.Title>
                            <a href={movie.imdbUrl} target="_blank">{movie.title}</a>, {movie.runtime} min
                        </ReactBootstrap.Card.Title>
                        <ReactBootstrap.Card.Subtitle>
                            directed by {movie.director}
                        </ReactBootstrap.Card.Subtitle>
                    </ReactBootstrap.Card.Body>
                </ReactBootstrap.Card>
            </ReactBootstrap.Col>
        ));

        return <ReactBootstrap.Row>{movieCards}</ReactBootstrap.Row>;
    }
}

class MoviesAlbum extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [],
            selectedMovies: [],
            searchResultsMovies: [],
            isLoading: true
        };

        this.addMovie = this.addMovie.bind(this);
        this.searchMovies = this.searchMovies.bind(this);
        
        this.handleSortHasChanged = this.handleSortHasChanged.bind(this);
        // this.onMovieSearchTextChange = this.onMovieSearchTextChange.bind(this);
        // this.searchMoviesInAlbum = this.searchMoviesInAlbum.bind(this);
    }

    componentDidMount() {
        //  Get data from JSON files in different ways (for the practice)
        //  jQuery
        let movies = [];
        $.get("json/movies.json", data => {
            data.movies.forEach(movie => {
                // let newMovie = new Movies(movie);
                // movies.push(new MovieModel(movie));
                // this.state.movies.push(newMovie);
                console.log("movie.id = " + movie.id +
                    ", movie.title = \"" + movie.title +
                    "\", movie.runtime = " + movie.runtime +
                    ", movie.imageUrl = \"" + movie.imageUrl +
                    "\", movie.imdbUrl = \"" + movie.imdbUrl +
                    "\", movie.director = \"" + movie.director + "\"");
                let newMovie = new MovieModel(movie.title, movie.id, movie.director, movie.imageUrl, movie.imdbUrl, movie.runtime);

                movies.push(newMovie);
                this.state.selectedMovies.push(newMovie);
            });
            this.setState(this.state);

            console.log("componentDidMount() --> movies[" + movies.length + "] = " + movies);
            console.log("componentDidMount() --> retrieve #1: It worked, JSON imported.");
        });
    }

    handleSortHasChanged(selectedItem) {
        console.log("ActorsAlbum.handleSortHasChanged -- Sort By: " + selectedItem);
        this.setState({ sortBy: selectedItem });
        console.log("ActorsAlbum.handleSortHasChanged -- this.state.sortBy: " + this.state.sortBy);
    }

    searchMovies(e) {
        if (e.target.value) {
            console.log("name: " + e.target.value);

            let searchMoviesURL = "https://api.themoviedb.org/3/search/movie?api_key=53d2ee2137cf3228aefae083c8158855&query=" + e.target.value;

            axios.get(searchMoviesURL).then(res => {
                this.state.searchResults = res.data.results;
                this.setState(this.state);
                console.log("this.state.searchResults=" + this.state.searchResults);
            });
        } else {
            this.state.searchResults = [];
            this.setState(this.state);
        }
    }

    addMovie(e) {
        e.preventDefault();

        console.log("id: " + e.target.getAttribute("data-id"));
        let movieId = e.target.getAttribute("data-id");
        let movieDetailsURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=1de94191cb4c68f7224ea2eaa3ef0d53`;
        let movieCreditsURL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=1de94191cb4c68f7224ea2eaa3ef0d53`;

        ////    Use the following code when using AXIOS with ONLY 1 GET Request 
        // axios.get(movieDetailsURL).then(res => {
        //     let newMovie = new MovieModel(res.data);
        //     this.state.selectedMovies.push(newMovie);
        //     // Cleaning input
        //     this.searchInput.value = "";
        //     this.state.searchResults = [];
        //     this.setState(this.state);
        // });

        let promiseMovieDetails = axios.get(movieDetailsURL);
        let promiseMovieCredits = axios.get(movieCreditsURL);
        let promisesArray = [promiseMovieDetails, promiseMovieCredits];

        Promise.all(promisesArray).then(responsesArray => {
            console.log(responsesArray[0]); //  responsesArray[0].data.<propertyName>
            console.log(responsesArray[1]); //  responsesArray[1].data.crew[index].<propertyName>
            let movieId = responsesArray[0].data.id;
            let movieTitle = responsesArray[0].data.title;
            let movieRuntime = responsesArray[0].data.runtime;
            let movieImageUrl = responsesArray[0].data.poster_path;
            let movieImdbUrl = responsesArray[0].data.imdb_id
            let movieDirector = '';
            let { crew } = responsesArray[1].data;

            crew.forEach(crewMember => {
                //  Director, 1st & 2nd Assistant Director in the directing department, might be more
                if (crewMember.department.toLowerCase() === "directing" &&
                    crewMember.job.toLowerCase() === "director") {
                    movieDirector = crewMember.name;
                }
            });

            console.log("movieId=" + movieId +
                ", movieTitle = \"" + movieTitle +
                "\", movieRuntime = " + movieRuntime +
                ", movieImageUrl = \"" + movieImageUrl +
                "\", movieImdbUrl = \"" + movieImdbUrl +
                "\", movieDirector = \"" + movieDirector + "\"");

            // let newMovie = new MovieModel(res.data);
            let newMovie = new MovieModel(movieTitle, movieId, movieDirector, movieImageUrl, movieImdbUrl, movieRuntime);
            this.state.selectedMovies.push(newMovie);

            // Cleaning input
            this.searchInput.value = "";
            this.state.searchResults = [];

            this.setState(this.state);
        });

    }

    render() {
        // Creating the HTML (JSX) for the search results
        let listSearchResults = this.state.searchResults.map(result => (
            <ReactBootstrap.ListGroup.Item action onClick={this.addMovie} data-id={result.id}>
                {result.title}
            </ReactBootstrap.ListGroup.Item>
        ));

        // let listSearchResults = [];
        // for (let i = 0; i < this.state.searchResults.length; i++) {
        //   listSearchResults.push(
        //     <ReactBootstrap.ListGroup.Item action>
        //       {this.state.searchResults[i]}
        //     </ReactBootstrap.ListGroup.Item>
        //   )
        // }

        return (
            <ReactBootstrap.Container>
                <h1>Movies</h1>
                <ReactBootstrap.Form autocomplete="off">
                    <ReactBootstrap.Form.Group controlId="searchTextId" className="search-box">
                        <ReactBootstrap.Form.Control
                            type="text"
                            placeholder="Add Movie"
                            onChange={this.searchMovies}
                            ref={element => { this.searchInput = element }}
                        />
                        <ReactBootstrap.ListGroup className="search-results">
                            {listSearchResults}
                        </ReactBootstrap.ListGroup>
                    </ReactBootstrap.Form.Group>
                </ReactBootstrap.Form>
                <Movies movies={this.state.selectedMovies} />
            </ReactBootstrap.Container>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="div-flex" class="flex">
                <h1>Movies Album AJAX + API</h1>
                <MoviesAlbum />
            </div>
        );
    }
}

// Main render function
ReactDOM.render(<App />, document.getElementById('root'));
