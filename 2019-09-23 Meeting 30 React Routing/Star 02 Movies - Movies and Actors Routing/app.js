class Movie {
  constructor(titleOrTmdbMovie, id, director, imageUrl, imdbUrl, runtime, mainStars) {
    if (arguments.length === 1) {
      this.director = titleOrTmdbMovie.director;
      this.id = titleOrTmdbMovie.id;
      this.imageUrl = "https://image.tmdb.org/t/p/w500" + titleOrTmdbMovie.poster_path;
      this.imdbUrl = "https://www.imdb.com/title/" + titleOrTmdbMovie.imdb_id;
      this.runtime = titleOrTmdbMovie.runtime;
      this.title = titleOrTmdbMovie.title;
      this.mainStars = titleOrTmdbMovie.mainStars;
    } else {
      this.director = director;
      this.id = id;
      this.imageUrl = "https://image.tmdb.org/t/p/w500" + imageUrl;
      this.imdbUrl = "https://www.imdb.com/title/" + imdbUrl;
      this.runtime = runtime;
      this.title = titleOrTmdbMovie;
      this.mainStars = mainStars;
    }
  }

  toString() {
    let staring = '';
    this.mainStars.forEach(star => {
      staring += '\"' + star + '\", ';
    });
    staring = staring.substring(0, staring.length - 2);

    return (
      "\n{ \n id: " + this.id +
      ", \n title: \"" + this.title +
      "\", \n runtime: " + this.runtime +
      ", \n image: \"" + this.image +
      "\", \n imdb: \"" + this.imdb +
      "\", \n \"mainStars\": [ " + staring + " ] \n}"
    );
  }
}

class Actor {
  constructor(firstNameOrObj, lastName, id, dob, imageUrl, imdbUrl) {
    if (arguments.length === 1) {
      //  This means that firstNameOrObj is an object
      this.firstName = firstNameOrObj.name.substring(0, firstNameOrObj.name.lastIndexOf(' '));
      this.lastName = firstNameOrObj.name.substring(firstNameOrObj.name.lastIndexOf(' ') + 1);
      this.id = firstNameOrObj.id;
      this.dateOfBirth = firstNameOrObj.birthday;
      // this.dateOfDeath = firstNameOrObj.deathday;
      this.imageUrl = "https://image.tmdb.org/t/p/w500" + firstNameOrObj.profile_path;
      this.imdbUrl = "https://www.imdb.com/name/" + firstNameOrObj.imdb_id;
      this.fullName = firstNameOrObj.name;
      this.credits = [];
    } else {
      //  This means that objOrFirstName is actor's first-name
      this.firstName = firstNameOrObj;
      this.lastName = lastName;
      this.id = id;
      this.dateOfBirth = dob;
      // this.dateOfDeath = deathday;
      this.imageUrl = "https://image.tmdb.org/t/p/w500" + imageUrl;
      this.imdbUrl = "https://www.imdb.com/name/" + imdbUrl;
      this.fullName = firstNameOrObj + ' ' + lastName;
      this.credits = [];
    }
  }

  get actorCredits() { return this.credits; }
  set actorCredits(allCredits) { this.credits = allCredits; }

  /*  Calculate the age of the actor today 
      dateOfBirth is a string in YYYYMMDD or MMDDYYYY format */
  getAge() {
    var today = new Date();
    var birthDate = new Date(this.dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }
    return age;
  }

  /*  Returns this class representaion as a string in JSON format. */
  toString() {
    return "{ \"id\": " + this.id + ", \"firstName\": \"" + this.firstName +
      "\", \"lastName\": \"" + this.lastName + "\", \"dateOfBirth\": \"" + this.dateOfBirth +
      "\", \"imageUrl\": \"" + this.imageUrl + "\", \"imdbUrl\": \"" + this.imdbUrl + "\" }";
  }
};

class ActorCredit {
  constructor(titleOrObj, id, character, releaseDate, imageUrl) {
    if (arguments.length === 1) {
      //  This means that titleOrObj is an object
      this.title = titleOrObj.title;
      this.id = titleOrObj.id;
      this.character = titleOrObj.character;
      this.releaseDate = titleOrObj.release_date;
      this.imageUrl = "https://image.tmdb.org/t/p/w500" + firstNameOrObj.poster_path;
    } else {
      //  This means that titleOrObj is actor's first-name
      this.title = titleOrObj;
      this.id = id;
      this.character = character;
      this.releaseDate = releaseDate;
      this.imageUrl = "https://image.tmdb.org/t/p/w500" + imageUrl;
    }
  }

  /*  Returns this class representaion as a string in JSON format. */
  toString() {
    return "{ \"id\": " + this.id + ", \"title\": \"" + this.title +
      "\", \"character\": \"" + this.character + "\", \"releaseDate\": \"" + this.releaseDate +
      "\", \"imageUrl\": \"" + this.imageUrl + "\" }";
  }
};

// props: movieData. An instance of the Movie class that the compoenent will render
class MovieComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navigateToID: null,
      movieData: {},
    };

    this.openMovieDetails = this.openMovieDetails.bind(this);
  }

  openMovieDetails() {
    this.state.navigateToID = this.props.movieData.id;
    this.state.movieData = this.props.movieData;
    this.setState(this.state);
  }

  render() {
    if (this.state.navigateToID != null) {
      return (
        <ReactRouterDOM.Redirect to={'/movies/' + this.state.navigateToID} />
      );
    } else {
      let staring = '';
      this.props.movieData.mainStars.forEach(star => {
        staring += star + ', ';
      });
      staring = staring.substring(0, staring.length - 2);
      return (
        <tr onClick={this.openMovieDetails}>
          <td><a href={this.props.movieData.imdbUrl} target='_blank'><img src={this.props.movieData.imageUrl} alt=""></img></a></td>
          <td>{this.props.movieData.title}</td>
          <td>{this.props.movieData.runtime}</td>
          <td>{this.props.movieData.director}</td>
          <td>{staring}</td>
        </tr>
      );
    }
  }
}

// props: actorData. An instance of the Actor class that the compoenent will render
class ActorComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navigateToID: null,
    };

    this.openActorDetails = this.openActorDetails.bind(this);
  }

  openActorDetails() {
    this.state.navigateToID = this.props.actorData.id;
    this.setState(this.state);
  }

  render() {
    if (this.state.navigateToID != null) {
      return (
        <ReactRouterDOM.Redirect to={'/actors/' + this.state.navigateToID} />
      );
    } else {
      return (
        <tr onClick={this.openActorDetails}>
          <td><a href={this.props.actorData.imdbUrl} target='_blank'><img src={this.props.actorData.imageUrl} alt=""></img></a></td>
          <td>{this.props.actorData.firstName}</td>
          <td>{this.props.actorData.lastName}</td>
          <td>{this.props.actorData.dateOfBirth}</td>
          <td>{this.props.actorData.getAge()}</td>
        </tr>
      );
    }
  }
}

// class SortDropDown extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           sortBy: '',
//           options: []
//       }
//       this.handleClick = this.handleClick.bind(this);
//   }
// 
//   handleClick(event) {
//       var selectedItem = event.target.text;
//       console.log("SortDropDown.handleClick -- SelectedItem: " + selectedItem);
//       this.setState({ sortBy: selectedItem });
//       console.log("SortDropDown.handleClick -- this.state.sortBy: " + this.state.sortBy);
//       this.props.onSortDropDownClick(selectedItem);
//   }
// 
//   render() {
//       let items = ["First Name", "Last Name", "Full Name", "Age"];
//       let sortByItems = items.map(item => {
//           return (
//               <ReactBootstrap.Dropdown.Item >{item}</ReactBootstrap.Dropdown.Item>
//           );
//       });
// 
//       let sortBy = 'Sort By' + (this.state.sortBy !== '' && typeof (this.state.sortBy) !== 'undefined' ? ': ' + this.state.sortBy : '');
//       return (
//           <ReactBootstrap.DropdownButton size="lg" title={sortBy}
//               id="dropdown-basic-button" onClick={this.handleClick}>
//               {sortByItems}
//           </ReactBootstrap.DropdownButton>
//       );
//   }
// }

class Movies extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      searchResults: [],
      selectedMovies: [],
      isLoading: true,
    };

    this.addMovie = this.addMovie.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
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

  componentDidMount() {
    // Get data from JSON using Axios
    axios.get('json/movies.json').then(res => {
      console.log(res);

      res.data.movies.forEach(movie => {
        let newMovie = new Movie(movie);
        this.state.movies.push(newMovie);
      });

      this.state.isLoading = false;
      this.setState(this.state);
    });
  }

  addMovie(e) {
    e.preventDefault();

    console.log("id: " + e.target.getAttribute("data-id"));
    let movieId = e.target.getAttribute("data-id");
    let movieDetailsURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=1de94191cb4c68f7224ea2eaa3ef0d53`;
    let movieCreditsURL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=1de94191cb4c68f7224ea2eaa3ef0d53`;

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
      let mainStars = [];
      let { cast, crew } = responsesArray[1].data;

      cast.forEach(castMember => {
        // we can seperate between female and male start by 
        // using the gender property (values: 0 = default (other?), 1 = female, 2 = male )
        // For Example: The following code will get only the male stars -
        // <code>
        // if (castMember.gender === 2) {
        //   mainStars.push(castMember.name);
        // }
        // </code>
        mainStars.push(castMember.name);
      });

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
        "\", movieDirector = \"" + movieDirector +
        "\", mainStars = \"" + mainStars + "\"");

      // let newMovie = new Movie(res.data);
      let newMovie = new Movie(movieTitle, movieId, movieDirector, movieImageUrl, movieImdbUrl, movieRuntime, mainStars);
      this.state.selectedMovies.push(newMovie);
      this.state.movies.push(newMovie);

      // Cleaning input
      this.searchInput.value = "";
      this.state.searchResults = [];

      this.setState(this.state);
    });

  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading Movies...</p>;
    }

    // Creating the HTML (JSX) for the search results
    let listSearchResults = this.state.searchResults.map(result => (
      <ReactBootstrap.ListGroup.Item action onClick={this.addMovie} data-id={result.id}>
        {result.title}
      </ReactBootstrap.ListGroup.Item>
    ));

    // I want to create an array of tr
    // We will loop over the movies data for each movie we will create a
    // tr element with its data and add it to the array
    let movieRows = [];
    for (var i = 0; i < this.state.movies.length; i++) {
      let movieRow = <MovieComp movieData={this.state.movies[i]} />;
      movieRows.push(movieRow);
    }

    return (
      <div>
        <div className="container">
          <h1>Movies List</h1>
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
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Runtime</th>
                <th>Director</th>
                <th>Staring</th>
              </tr>
            </thead>
            <tbody>{movieRows}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

class Actors extends React.Component {
  constructor() {
    super();

    this.state = {
      actors: [],
      searchResults: [],
      selectedActors: [],
      isLoading: true,
    };

    this.addActor = this.addActor.bind(this);
    this.searchActors = this.searchActors.bind(this);
  }

  componentDidMount() {
    // Get data from JSON using Axios
    axios.get('json/actors.json').then(res => {
      console.log(res);

      res.data.actors.forEach(actor => {
        let newActor = new Actor(actor);
        this.state.actors.push(newActor);
      });

      this.state.isLoading = false;
      this.setState(this.state);
    });
  }

  searchActors(e) {
    if (e.target.value) {
      let searchActorsURL = "https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=" + e.target.value;

      axios.get(searchActorsURL).then(res => {
        this.state.searchResults = res.data.results;
        this.setState(this.state);
      });

    } else {
      this.state.searchResults = [];
      this.setState(this.state);
    }

  }

  addActor(e) {
    e.preventDefault();

    let actorId = e.target.getAttribute("data-id");
    // let actorDetailsURL = "https://api.themoviedb.org/3/person/" + actorId + "?api_key=53d2ee2137cf3228aefae083c8158855";
    let actorDetailsURL = `https://api.themoviedb.org/3/person/${actorId}?api_key=53d2ee2137cf3228aefae083c8158855`;

    axios.get(actorDetailsURL).then(res => {
      let newActor = new Actor(res.data);
      this.state.selectedActors.push(newActor);
      this.state.actors.push(newActor);

      // Cleaning input
      this.searchInput.value = "";
      this.state.searchResults = [];

      this.setState(this.state);
    });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading Actors...</p>;
    }

    // Creating the HTML (JSX) for the search results
    let listSearchResults = this.state.searchResults.map(result => (
      <ReactBootstrap.ListGroup.Item action onClick={this.addActor} data-id={result.id}>
        {result.name}
      </ReactBootstrap.ListGroup.Item>
    ));

    // I want to create an array of <tr>. We will loop over the actors 
    // data for each actor we will create a <tr> element with its data 
    // and add it to the array
    let actorRows = [];
    for (var i = 0; i < this.state.actors.length; i++) {
      let actorRow = <ActorComp actorData={this.state.actors[i]} />;
      actorRows.push(actorRow);
    }

    return (
      <div>
        <div className="container">
          <h1>Actors List</h1>
          <ReactBootstrap.Form autocomplete="off">
            <ReactBootstrap.Form.Group controlId="searchTextId" className="search-box">
              <ReactBootstrap.Form.Control
                type="text"
                placeholder="Add actor"
                onChange={this.searchActors}
                ref={element => { this.searchInput = element }}
              />
              <ReactBootstrap.ListGroup className="search-results">
                {listSearchResults}
              </ReactBootstrap.ListGroup>
            </ReactBootstrap.Form.Group>
          </ReactBootstrap.Form>
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>D.O.B.</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>{actorRows}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: null,
    };
  }

  componentDidMount() {
    // Get data from JSON using Axios
    axios.get('json/movies.json').then(res => {
      console.log(res);

      let lookingForId = this.props.match.params.id;
      let movieFound = false;
      for (let i = 0; i < res.data.movies.length && !movieFound; i++) {
        if (res.data.movies[i].id == lookingForId) {
          let movie = new Movie(res.data.movies[i]);
          this.state.movie = movie;
          movieFound = true;
        }
      }

      this.setState(this.state);
    });
  }

  render() {
    if (!this.state.movie) {
      return false;
    } else {
      let staring = '';
      this.state.movie.mainStars.forEach(star => {
        staring += star + ', ';
      });
      staring = staring.substring(0, staring.length - 2);

      return (
        <ReactBootstrap.Container>
          <ReactBootstrap.Row id="movie-details">
            <ReactBootstrap.Col>
              <a href={this.state.movie.imdbUrl}><img src={this.state.movie.imageUrl} alt="" /></a>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col xs='9'>
              <p>
                <span>Title: </span>
                {this.state.movie.title}
              </p>
              <p>
                <span>Director: </span>
                {this.state.movie.director}
              </p>
              <p>
                <span>Runtime: </span>
                {this.state.movie.runtime} min
              </p>
              <p>
                <span>Staring: </span>
                {staring}
              </p>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
          <ReactBootstrap.Button href="#movies">
            &lt; Back To Movies List
          </ReactBootstrap.Button>
        </ReactBootstrap.Container>
      );
    }
  }
}

class ActorDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actor: null,
    };
  }

  componentDidMount() {
    // Get data from JSON using Axios
    axios.get('json/actors.json').then(res => {
      console.log(res);

      let lookingForId = this.props.match.params.id;
      let actorFound = false;
      for (let i = 0; i < res.data.actors.length && !actorFound; i++) {
        if (res.data.actors[i].id == lookingForId) {
          let actor = new Actor(res.data.actors[i]);

          let actorId = res.data.actors[i].id;
          let actorCreditsURL = `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=1de94191cb4c68f7224ea2eaa3ef0d53`;
          axios.get(actorCreditsURL).then(res => {
            let { cast } = res.data;

            let credits = [];

            cast.forEach(castCharacter => {
              console.log("movieId=" + castCharacter.id +
                ", title = \"" + castCharacter.title +
                "\", character = \"" + castCharacter.character +
                "\", release_date = " + castCharacter.release_date +
                ", poster_path = \"" + castCharacter.poster_path + "\"");

              let credit = new ActorCredit(castCharacter.title, castCharacter.id, castCharacter.character, castCharacter.release_date, castCharacter.poster_path);
              credits.push(credit);
            });

            // actor.actorCredits(credits);
            actor.credits = credits;
            this.state.actor = actor;
            actorFound = true;

            this.setState(this.state);
            console.log("this.state.actor = " + this.state.actor);
          });

        }
      }

      this.setState(this.state);
    });
  }

  render() {
    if (!this.state.actor) {
      return false;
    } else {
      let styleCard = {
        // width: '290px',
        height: '500px'
        // , fontFamily: 'Arial'
      }
      let styleCol = {
        textAlign: "center"
      }
      var styleImage = {
        display: "inline-block"
      }

      let creditsAlbum = this.state.actor.credits.map(credit => {
        return (
          <ReactBootstrap.Col xs={3} sm={4}>
            <ReactBootstrap.Card style={styleCard}>
              <ReactBootstrap.CardImg data-id={credit.id} style={styleImage} variant="top" src={credit.imageUrl} />
              <ReactBootstrap.Card.Body>
                <ReactBootstrap.Card.Title>{credit.character}</ReactBootstrap.Card.Title>
                <ReactBootstrap.Card.Subtitle className="mb-1 text-muted">Title: {credit.title}</ReactBootstrap.Card.Subtitle>
                <ReactBootstrap.Card.Subtitle className="mb-1 text-muted">Released: {credit.releaseDate}</ReactBootstrap.Card.Subtitle>
              </ReactBootstrap.Card.Body>
            </ReactBootstrap.Card>
          </ReactBootstrap.Col>);
      });

      return (
        <ReactBootstrap.Container>
          <ReactBootstrap.Row id="movie-details">
            <ReactBootstrap.Col style={styleCol}>
              <a href={this.state.actor.imdbUrl} target="_blank"><img src={this.state.actor.imageUrl} alt="" />{this.state.actor.fullName}</a>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col xs='9'>
              <p>
                <span>ID: </span>
                {this.state.actor.id}
              </p>
              <p>
                <span>First Name: </span>
                {this.state.actor.firstName}
              </p>
              <p>
                <span>Last Name: </span>
                {this.state.actor.lastName}
              </p>
              <p>
                <span>Date of Birth: </span>
                {this.state.actor.dateOfBirth}
              </p>
              <p>
                <span>Age: </span>
                {this.state.actor.getAge()}
              </p>
              <ReactBootstrap.Button href="#actors">
                &lt; Back To Actors List
              </ReactBootstrap.Button>

              <ReactBootstrap.Row>
                {creditsAlbum}
              </ReactBootstrap.Row>

              <ReactBootstrap.Button href="#actors">
                &lt; Back To Actors List
              </ReactBootstrap.Button>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      );
    }
  }
}

class Home extends React.Component {
  render() {
    return (
      <ReactBootstrap.Jumbotron>
        <h1>Movies &amp; Actors App!</h1>
        <p>Simple &quot;Movies &amp; Actors&quot; application with JavaScript, Axios, React, React-Bootstrap, React Routing and CSS3. This is a simple <code>Jumbotron</code>-style component to feature content/information. Above <code>Navbar</code> uses <code>React Routing</code> to navigate between actors and movies lists. The initial actors list is loaded from &quot;<i>actors.json</i>&quot; &amp; movies list from &quot;<i>movies.json</i>&quot; file.
        <ul>
            <li><b>Actors List: </b>
              <ul>
                <li>You can also add other male actors to the list, by typing their name and selecting the one you want to add from the selected results.</li>
                <li>The actors that you add by typing their names <b>ARE NOT ADDED TO THE JSON FILE</b>, as soon as you <code>Reload</code> the page, you will get the initial list.</li>
                <li>When you click on the row of an actor, the application will open his details with movie credits that include: The movie's poster, name of the character in the movie, the movie title and release date.</li>
                <li>If you click the actor's image in the list then in addition to showing you the actor's movie credits, the application will open the actor's IMDB profile page in a different tab.</li>
                <li>Click on &quot;Back to Actors list&quot; buttun to return to the actor's list.</li>
              </ul>
            </li>
            <li><b>Movies List: </b></li>
            <ul>
              <li>You can also add other movies to the list, by typing the movie title and selecting the one you want from the selected results.</li>
              <li>The movies you add by typing their title <b>ARE NOT ADDED TO THE JSON FILE</b>, as soon as you <code>Reload</code> the page, you will get the initial list.</li>
              <li>When you click on the line/row of a movie, the application will show you the details of this movie: title, director(s) name(s), length (in min) and main stars.</li>
              <li>If you click the movie's image then in addition to showing you the movie's details, the application will open the movie's IMDB page in a different tab.</li>
              <li>Click on &quot;Back to Movies list&quot; buttun to return to the movies list.</li>
            </ul>
          </ul>
          <p><b>IMPORTANT:</b> Using the browser's <code>Back</code> button will return you to the home (this) page. You can also return to this page by clicking on "Navbar" and "Home" titles in the <code>Navbar</code>.</p>

        </p>
        <p>
          <ReactBootstrap.Button href="#/movies" variant="primary">
            Enter Movies
          </ReactBootstrap.Button>
          <ReactBootstrap.Button href="#/actors" variant="primary">
            Enter Actors
          </ReactBootstrap.Button>
        </p>
      </ReactBootstrap.Jumbotron>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ReactBootstrap.Navbar bg="primary" variant="dark">
          <ReactBootstrap.Navbar.Brand href="/">Navbar</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link href="/">Home</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#actors">Actors</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#movies">Movies</ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>

        {/* Whatever elements that will be rendered here will be rendered always not depending on the routing */}
        <ReactRouterDOM.Switch>
          <ReactRouterDOM.Route exact path="/" component={Home} />

          <ReactRouterDOM.Route exact path="/movies" component={Movies} />
          {/* <ReactRouterDOM.Route path="/movies/:id" component={MovieDetails} /> */}
          <ReactRouterDOM.Route path="/movie/:id" render={(props) => (<MovieDetails {...props} movieData={movieData} />)} />

          <ReactRouterDOM.Route exact path="/actors" component={Actors} />
          <ReactRouterDOM.Route path="/actors/:id" component={ActorDetails} />
        </ReactRouterDOM.Switch>
      </div>
    );
  }
}

// Main render function
ReactDOM.render(
  <ReactRouterDOM.HashRouter>
    <App />
  </ReactRouterDOM.HashRouter>,
  document.getElementById('root')
);
