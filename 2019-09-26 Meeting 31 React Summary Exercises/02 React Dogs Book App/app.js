class DogBread {
  constructor(nameOrObj, imageUrl) {
    if (arguments.length === 1) {
      this.name = nameOrObj.name;
      this.imageUrl = nameOrObj.imageUrl;
    } else {
      this.name = nameOrObj;
      this.imageUrl = imageUrl;
    }
  }

  toString() {
    return "{ \"name\": \"" + this.name +
      "\", \"imageUrl\": \"" + this.imageUrl +
      "\" }";
  }
}

class AppNavbar extends React.Component {
  //  props.selected= { 'breeds' , 'about' }
  constructor(props) {
    super(props);
    console.log("AppNavbar.constructor -- this.props.selected: " + this.props.selected);
  }

  render() {
    console.log("AppNavbar.render() -- this.props.selected = " + this.props.selected);
    const styleNavbarBrand = {
      fontFamily: 'Beth Ellen'
    }
    const styleNavbarItem = {
      // fontFamily: 'Beth Ellen',
      fontSize: '1.5em',
      margin: '2px 30px'
    }
    return (
      <ReactBootstrap.Navbar bg="primary" variant="dark">
        <ReactBootstrap.Navbar.Brand style={styleNavbarBrand} href="/">Dog Book</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Nav className="mr-auto">
          <ReactBootstrap.Nav.Link style={styleNavbarItem} active={this.props.selected === 'breeds'} href="#breeds">Breeds</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link style={styleNavbarItem} active={this.props.selected === 'about'} href="#about">About</ReactBootstrap.Nav.Link>
        </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar>
    );
  }
}

class AppHomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <ReactBootstrap.Jumbotron>
          <h3>Dogs Application Home Page</h3>
          <p>
            <div>
              When you click the <span>Enter</span> button or on <span>Breeds</span> in the Navbar and Dogs-App you will:
            </div>
            <div>
              * See a gallery of dogs breeds, each breed with a name and an image.
            </div>
            <div>
              * You can <span>Filter</span> the gallery and/or <span>Search</span> for a specific dog breed.
            </div>
            <div>
              * You can <span>refresh</span> the breeds  images by clicking the <span>&lt;Refresh Images&gt;</span> button.
            </div>
            <div>
              * You can click on a breed and see all images related to it.
            </div>
          </p>
          <p>
            <ReactBootstrap.Button href="#/breeds" variant="primary">
              Enter
            </ReactBootstrap.Button>
          </p>
        </ReactBootstrap.Jumbotron>
      </div>
    );
  }
}

class SearchBreedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateBreedsImages = this.handleUpdateBreedsImages.bind(this);
  }

  handleChange(event) {
    var newValue = event.target.value;
    this.setState({ inputValue: newValue });
    console.log("SearchBreedComponent.handleChange: After this.setState({ inputValue: newValue });");
    this.props.onTextChange(newValue);
  }

  handleUpdateBreedsImages(event) {
    console.log("SearchBreedComponent.handleUpdateBreedsImages() -- Start");
    this.props.handleRefreshBreedsImages();
  }

  render() {
    const style = {
      width: "99%",
      margin: '10px auto',
      padding: "2px 4px"
    }

    const styleInputText = {
      height: '64px',
      fontSize: '1.3em',
      margin: '10px 40px 10px 0'
    }

    const styleUpdateButton = {
      padding: '2px 20px',
      margin: '10px 0'
    }

    return (
      <ReactBootstrap.InputGroup style={style} size="lg">
        <ReactBootstrap.Form.Control
          type="text"
          style={styleInputText}
          name="search-for"
          value={this.state.inputValue}
          onChange={this.handleChange}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-lg"
          componentClass="input" placeholder="Search for breed(s)"
          inputRef={(ref) => { this.input = ref }}
          defaultValue={this.state.inputValue}
        />
        <ReactBootstrap.Button style={styleUpdateButton} onClick={(event) => this.handleUpdateBreedsImages(event)}>Refresh Images</ReactBootstrap.Button>
      </ReactBootstrap.InputGroup>
    );
  }
}

//  props: breedData, an instance of DogBreed class that the compoenent will render
//  Render a single item for display
class BreedCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navigateToName: null,
    };

    this.openBreedAllImages = this.openBreedAllImages.bind(this);
  }

  openBreedAllImages() {
    this.state.navigateToName = this.props.breedData.name;
    this.setState(this.state);
  }

  render() {
    const styleCard = {
      height: '350px',
      border: '1px solid black',
      padding: '5px'
      // , width: '250px'
      // , fontFamily: 'Arial'
    }
    const styleImage = {
      height: '290px',
      display: "inline-block"
    }
    if (this.state.navigateToName != null) {
      return (
        <ReactRouterDOM.Redirect to={'/breeds/' + this.state.navigateToName} />
      );
    } else {
      return (
        <ReactBootstrap.Card style={styleCard} onClick={this.openBreedAllImages} breedName={this.props.breedData.name}>
          <ReactBootstrap.Card.Title>{this.props.breedData.name}</ReactBootstrap.Card.Title>
          <ReactBootstrap.CardImg breedName={this.props.breedData.name} style={styleImage} variant="top" src={this.props.breedData.imageUrl} />
        </ReactBootstrap.Card>
      );
    }
  }
}

class BreedsPage extends React.Component {
  constructor(props) {
    super(props);

    //  searchFor ==> Contains the string typed in search-breed-input-text
    this.state = {
      breeds: [],
      dog: null,
      searchResults: [],
      searchFor: '',
      navigateToName: null,
      isLoading: true,
      isOnStartup: true,
    };

    this.handleRefreshBreedsImages = this.handleRefreshBreedsImages.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.openBreedAllImages = this.openBreedAllImages.bind(this);
  }

  openBreedAllImages() {
    // this.state.navigateToID = this.props.actorData.id;
    this.state.navigateToName = this.props.breedData.name;
    // this.setState(this.state);
    this.setState(this.state);
  }

  onTextChange(newValue) {
    console.log("string in child component changed to " + newValue);
    this.setState({ searchFor: newValue });
  }

  handleRefreshBreedsImages() {
    console.log("BreedsPage.handleRefreshBreedsImages() -- Started");
    const apiGetBreedsListURL = `https://dog.ceo/api/breeds/list/all`;

    let breeds = [];
    axios.get(apiGetBreedsListURL).then(res => {
      console.log("   res.data.message = " + res.data.message);
      const message = res.data.message;
      let breedsNames = Object.keys(message).sort();
      console.log("   breedsNames = " + breedsNames);
      breedsNames.map(name => {
        let apiGetBreedRandomImageURL = `https://dog.ceo/api/breed/${name}/images/random`;
        // axios.get(apiGetBreedImagesURL).then(resp => {
        axios.get(apiGetBreedRandomImageURL).then(resp => {
          const imageUrl = resp.data.message;
          let newBreed = new DogBread(name, imageUrl);
          console.log("   breed(" + breeds.length + ") = bread " + newBreed.toString());
          breeds.push(newBreed);
          this.setState({ breeds });
        });
      });
      this.setState({ breeds, isLoading: false });
      console.log("   breeds(" + breeds.length + ")");
    });
    console.log("BreedsPage.handleRefreshBreedsImages() -- Finished");
  }

  componentDidMount() {
    // Get data from API using Axios
    let apiGetBreedImagesURL = `https://dog.ceo/api/breed/${name}/images`;
    this.handleRefreshBreedsImages();
    console.log("BreedsPage.componentDidMount() -- this.state.breeds(" + this.state.breeds.length + ")");
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading Actors...</p>;
    }

    if (this.state.navigateToName != null) {
      return (
        <ReactRouterDOM.Redirect to={'/actors/' + this.state.navigateToName} />
      );
    }

    const styleCard = {
      height: '350px',
      border: '1px solid black',
      padding: '5px'
      // , width: '250px'
      // , fontFamily: 'Arial'
    }
    const styleCol = {
      textAlign: "center"
    }
    const styleImage = {
      display: "inline-block"
    }
    const { breeds } = this.state;
    breeds.sort((a, b) => (a.name > b.name) ? 1 : -1);

    // let BreedsAlbum = this.state.breeds.map(breed => {
    let breedsAlbum = [];
    if (this.state.searchFor) {
      breedsAlbum = breeds.map(breed => {
        if (breed.name.toLowerCase().indexOf(this.state.searchFor) > -1) {
          return (
            <ReactBootstrap.Col style={styleCol} xs={3} sm={2}>
              <BreedCard breedData={breed} />
            </ReactBootstrap.Col>
            // <ReactBootstrap.Col style={styleCol} xs={3} sm={2}>
            //   <ReactBootstrap.Card style={styleCard} onClick={this.openBreedAllImages}>
            //     <ReactBootstrap.Card.Header as='h4'>{breed.name}</ReactBootstrap.Card.Header>
            //     <ReactBootstrap.CardImg style={styleImage} variant="top" src={breed.imageUrl} />
            //   </ReactBootstrap.Card>
            // </ReactBootstrap.Col>
          );
        } else {
          <div></div>
        }
      });
    } else {
      breedsAlbum = breeds.map(breed => {
        return (
          <ReactBootstrap.Col style={styleCol} xs={3} sm={2}>
            <BreedCard breedData={breed} />
          </ReactBootstrap.Col>
          // <ReactBootstrap.Col xs={3} sm={2}>
          //   <ReactBootstrap.Card style={styleCard}>
          //     <ReactBootstrap.Card.Header as='h4'>{breed.name}</ReactBootstrap.Card.Header>
          //     <ReactBootstrap.CardImg style={styleImage} variant="top" src={breed.imageUrl} />
          //   </ReactBootstrap.Card>
          // </ReactBootstrap.Col>
        );
      });
    }

    return (
      <div>
        <AppNavbar selected='breeds' />
        <ReactBootstrap.Jumbotron>
          <h3>Dogs Application Dogs Breeds Page</h3>
          <h5>List of dog breeds, Seach possibility, Update Images buttons</h5>
          <p>
            Click on a breed to open all its images.
          </p>
        </ReactBootstrap.Jumbotron>
        <SearchBreedComponent onTextChange={this.onTextChange} handleRefreshBreedsImages={this.handleRefreshBreedsImages} val={this.state.searchFor} />
        <ReactBootstrap.Container fluid>
          <ReactBootstrap.Row>
            {breedsAlbum}
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </div>
    );
  }
}

class BreedImagesAlbumPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breed: null,
      breedImages: [],
    };
  }

  componentDidMount() {
    // Get All Images for specific Breed from Dogs API GET request
    // let { breedImages } = this.state;
    let breedName = this.props.match.params.id;
    let apiGetBreedAllImagesURL = `https://dog.ceo/api/breed/${breedName}/images`;
    axios.get(apiGetBreedAllImagesURL).then(res => {
      const { message } = res.data;
      message.forEach(msg => {
        console.log("breed imageUrl=\"" + msg + "\"");
        // breedImages.push(message);
      });
      this.setState({ breed: breedName, breedImages: message });
      console.log("BreedImagesAlbumPage.componentDidMount()a -- this.state.breedImages.length=" + this.state.breedImages.length);
    });
    console.log("BreedImagesAlbumPage.componentDidMount()b -- this.state.breedImages.length=" + this.state.breedImages.length);
  }

  render() {
    if (!this.state.breed) {
      return false;
    } else {
      console.log("BreedImagesAlbumPage.render() -- this.state.breedImages.length=" + this.state.breedImages.length);
      const styleCard = {
        // height: '300px',
        textAlign: 'center',
        border: '1px solid black',
        padding: '2px 4px'
      }
      const styleCol = {
        textAlign: 'center'
      }
      // const styleImage = {
      //   // height: '290px',
      //   display: 'inline-block'
      // }

      let imagesAlbum = this.state.breedImages.map(imageUrl => {
        return (
          <ReactBootstrap.Col xs={4} sm={3}>
            <ReactBootstrap.Card style={styleCard}>
              {/* <ReactBootstrap.CardImg data-id={imageUrl} style={styleImage} variant="top" src={imageUrl} /> */}
              <ReactBootstrap.CardImg data-id={imageUrl} variant="top" src={imageUrl} />
            </ReactBootstrap.Card>
          </ReactBootstrap.Col>
        );
      });

      return (
        <ReactBootstrap.Container>
          <ReactBootstrap.Button href="#breeds">
            &lt; Back To Breeds Gallery
			  </ReactBootstrap.Button>

          <ReactBootstrap.Row>
            {imagesAlbum}
          </ReactBootstrap.Row>

          <ReactBootstrap.Button href="#breeds">
            &lt; Back To Breeds Gallery
			  </ReactBootstrap.Button>
        </ReactBootstrap.Container>
      );
    }
  }
}

class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dog: null,
    };
  }
  render() {
    return (
      <div>
        <AppNavbar selected='about' />
        <ReactBootstrap.Jumbotron>
          <h1>Dogs Application About Page</h1>
          <p>
            <p>
              When you click the <span>Enter</span> button or on <span>Breeds</span> in the Navbar and Dogs-App you will:
            </p>
            <p>
              * See a gallery of dogs breeds, each breed with a name and an image.
            </p>
            <p>
              * You can <span>Filter</span> the gallery and/or <span>Search</span> for a specific dog breed.
            </p>
            <p>
              * You can <span>refresh</span> the breeds  images by clicking the <span>&lt;Refresh Images&gt;</span> button.
            </p>
            <p>
              * You can click on a breed and see all images related to it.
            </p>
          </p>
          <p>
            <ReactBootstrap.Button href="/" variant="primary">
              Return to <i>Home Page</i>
            </ReactBootstrap.Button>
          </p>
        </ReactBootstrap.Jumbotron>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      selectedActors: []
    };
  }

  render() {
    return (
      <div>
        {/* Whatever elements that will be rendered here will be rendered always not depending on the routing */}
        <ReactRouterDOM.Switch>
          <ReactRouterDOM.Route exact path="/" component={AppHomePage} />
          <ReactRouterDOM.Route exact path="/breeds" component={BreedsPage} />
          <ReactRouterDOM.Route path="/breeds/:id" component={BreedImagesAlbumPage} />
          <ReactRouterDOM.Route path="/about" component={AboutPage} />
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
