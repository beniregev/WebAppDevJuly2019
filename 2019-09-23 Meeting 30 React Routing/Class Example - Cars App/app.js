// Code goes here

// this is not a component
class Car {
  constructor(brandOrObj, model, year, km, id) {
    if (arguments.length === 1) {
      // This means that brandOrObj is Obj
      this.brand = brandOrObj.brand;
      this.model = brandOrObj.model;
      this.year = brandOrObj.year;
      this.km = brandOrObj.km;
      this.id = brandOrObj.id;
    } else {
      // this means that brandOrObj is brand
      this.brand = brandOrObj;
      this.model = model;
      this.year = year;
      this.km = km;
      this.id = id;
    }
  }

  kmPerYear() {
    let currentYear = new Date().getFullYear();
    let carAge = currentYear - this.year + 1;
    return this.km / carAge;
  }
}

// props: carData. An instance of the Car class that the compoenent will render
class CarComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navigateToID: null,
    };

    this.openCarDetails = this.openCarDetails.bind(this);
  }

  openCarDetails() {
    this.state.navigateToID = this.props.carData.id;
    this.setState(this.state);
  }

  render() {
    if (this.state.navigateToID != null) {
      return (
        <ReactRouterDOM.Redirect to={'/cars/' + this.state.navigateToID} />
      );
    } else {
      return (
        <tr onClick={this.openCarDetails}>
          <td>{this.props.carData.brand}</td>
          <td>{this.props.carData.model}</td>
          <td>{this.props.carData.year}</td>
          <td>{this.props.carData.km}</td>
          <td>{Math.floor(this.props.carData.kmPerYear())}</td>
        </tr>
      );
    }
  }
}

class Cars extends React.Component {
  constructor() {
    super();

    this.state = {
      cars: [],
      isLoading: true,
    };

    this.addSubaru = this.addSubaru.bind(this);
  }

  componentDidMount() {
    // Get data from JSON

    // jQuery
    // $.get("cars.json", data => {
    //   console.log(data);
    //   data.forEach(car => {
    //     let newCar = new Car(car.brand, car.model, car.year, car.km, car.id);
    //     this.state.cars.push(newCar);
    //   });
    //   this.state.isLoading = false;
    //   this.setState(this.state);
    // });

    // Axios
    axios.get('cars.json').then(res => {
      console.log(res);

      res.data.forEach(car => {
        let newCar = new Car(car);
        this.state.cars.push(newCar);
      });
      // for (let i = 0; i < res.data.length; i++) {
      //   let newCar = new Car(res.data[i].brand, res.data[i].model,
      //     res.data[i].year, res.data[i].km, res.data[i].id);
      //   this.state.cars.push(newCar);
      // }

      this.state.isLoading = false;
      this.setState(this.state);
    });
  }

  addSubaru() {
    let newId = this.state.cars[this.state.cars.length - 1].id + 1;
    let newCar = new Car('Subaru', 'B4', 2009, 180000, newId);
    this.state.cars.push(newCar);

    this.setState({
      cars: this.state.cars,
    });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    // I want to create an array of tr
    // We will loop over the cars data for each car we will create a
    // tr element with its data and add it to the array
    let carRows = [];
    for (var i = 0; i < this.state.cars.length; i++) {
      let carRow = <CarComp carData={this.state.cars[i]} />;
      carRows.push(carRow);
    }

    return (
      <div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>KM</th>
                <th>KM Per Year</th>
              </tr>
            </thead>
            <tbody>{carRows}</tbody>
          </table>
          <button onClick={this.addSubaru}>Add Subaru</button>
        </div>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <ReactBootstrap.Jumbotron>
        <h1>Car App!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
          </p>
        <p>
          <ReactBootstrap.Button href="#/cars" variant="primary">
            Enter
            </ReactBootstrap.Button>
        </p>
      </ReactBootstrap.Jumbotron>
    );
  }
}

class CarDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      car: null,
    };
  }

  componentDidMount() {
    // Get data from JSON

    // Axios
    axios.get('cars.json').then(res => {
      console.log(res);

      let lookingForId = this.props.match.params.id;
      let carFound = false;
      for (let i = 0; i < res.data.length && !carFound; i++) {
        if (res.data[i].id == lookingForId) {
          let car = new Car(res.data[i]);
          this.state.car = car;
          carFound = true;
        }
      }

      this.setState(this.state);
    });
  }

  render() {
    if (!this.state.car) {
      return false;
    } else {
      return (
        <ReactBootstrap.Container>
          <p>
            <span>Brand: </span>
            {this.state.car.brand}
          </p>
          <p>
            <span>Model: </span>
            {this.state.car.model}
          </p>
          <p>
            <span>KM: </span>
            {this.state.car.km}
          </p>
          <p>
            <span>Year: </span>
            {this.state.car.year}
          </p>
          <p>
            <span>KM Per Year: </span>
            {this.state.car.kmPerYear()}
          </p>
        </ReactBootstrap.Container>
      );
    }
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Whatever elements that will be rendered here will be rendered always not depending on the routing */}
        <ReactRouterDOM.Switch>
          <ReactRouterDOM.Route exact path="/" component={Home} />
          <ReactRouterDOM.Route exact path="/cars" component={Cars} />
          <ReactRouterDOM.Route path="/cars/:id" component={CarDetails} />
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
