// Code goes here


// this is not a component
class Car {
  constructor(brand, model, year, km) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.km = km;
  }
}


class Cars extends React.Component {

  render() {
    
    let cars = [];
    cars.push(new Car("Toyota", "Corola", 2010, 150000));
    cars.push(new Car("Honda", "Civic", 2002, 250000));
    cars.push(new Car("Seat", "Ibiza", 2010, 50000));
    
    // I want to create an array of tr
    // We will loop over the cars data for each car we will create a
    // tr element with its data and add it to the array
    let carRows = [];
    for (var i = 0; i < cars.length; i++) {
      let carRow =  <tr>
                        <td>{cars[i].brand}</td>
                        <td>{cars[i].model}</td>
                        <td>{cars[i].year}</td>
                        <td>{cars[i].km}</td>
                    </tr>
      carRows.push(carRow);
    }
    
    // let carRows = cars.map(car => 
    //   <tr>
    //     <td>{car.brand}</td>
    //     <td>{car.model}</td>
    //     <td>{car.year}</td>
    //     <td>{car.km}</td>
    //   </tr>    
    // );
    
    
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
              </tr>
            </thead>
            <tbody>
              {carRows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
}


class App extends React.Component {
  
  render() {
    return (
      <div>
        <Cars/>
      </div>
    );
  }
} 

// Main render function
ReactDOM.render( 
  <App/>,
  document.getElementById("root")
);