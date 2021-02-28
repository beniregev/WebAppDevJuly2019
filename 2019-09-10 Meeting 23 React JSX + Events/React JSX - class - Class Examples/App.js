// Code goes here


class MyComponent extends React.Component {

  // Do not declare varaibles like this - if you need to use
  // varaibles across many class methods use properties
  // properties are declared only indise constructor
  // var x = 0;
  constructor() {
    super();
    this.prop1 = 7;
    
    this.updateName = this.updateName.bind(this)
  }
  
  updateName(event) {
    // 1) read data in input
    // event is the event that was triggered. The event has a property named
    // target which is the element that raised the event.
    let name = event.target.value;
    
    // 2) update span
    document.getElementById("greeting").innerHTML = name;
  }
  
  calc(num) {
    return num + this.prop1;
  } 
  
  sayHello() {
    alert("Hello");
  }
  
  render() {
    var myStyle = {
      color: "red"
    };
    
    var x = 10;
    var y = this.calc(10);
    var arr = [1, 2, 10, 99];
    var pElement = <p>I am an element from a variable. value of x = {x}; value of y = {y}</p>
    
    var arrElements = [];
    arrElements.push(<p>Paragraph 1</p>);
    arrElements.push(<p>Paragraph 2</p>);
    arrElements.push(<p>Paragraph 3</p>);
    arrElements.push(<p>Paragraph 4</p>);
    
    var listItems = [];
    for (var i = 0; i < 5; i++) {
      listItems.push(<li>{i + 1}</li>);
    }
    var list = <ul>{listItems}</ul>
    
    
    return (
      <div style={{"background-color": "yellow"}}>
        <h3 style={myStyle}>Hello from MyComponent</h3>
        <span>x * 50 = {x * 50}</span>
        <div>y = {y}</div>
        <div>calling function directly: {this.calc(x)}</div>
        <div>array: {arr.join(", ")}</div>
        <div>prop1: {this.prop1}</div>
        <div>{pElement}</div>
        <div>{arrElements}</div>
        <div>{list}</div>
        <button onClick={this.sayHello}>Click Me</button>
        <div>
          <h2>Hello <span id="greeting"></span></h2>
          <input type="text" placeholder="Enter your name" onChange={this.updateName}/>
        </div>
      </div>
    );
  }
}


class App extends React.Component {
  
  render() {
    return (
      <div>
        <MyComponent/>
      </div>
    );
  }
} 

// Main render function
ReactDOM.render( 
  <App/>,
  document.getElementById("root")
);