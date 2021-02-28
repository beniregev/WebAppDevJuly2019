// Code goes here

class Click extends React.Component {
  
  constructor(props) {
    super(props);
    
    if (!this.props.label) {
      this.props.label = "Submit";
    }
    
    
  }
  
  render() {
    let btnStyle = {
      color: this.props.color
    }
    
    let classes = this.props.isTransparentBackground ? "transparent" : "";
    
    return (
      <div>
        <button className={classes} style={btnStyle}>{this.props.label}</button>
      </div>
    );
  }
} 



class App extends React.Component {
  
  render() {
    return (
      <div>
        <Click label="Submit" color="blue" isTransparentBackground={true}/>
        <Click label="Click" color="green"/>
      </div>
    );
  }
} 

// Main render function
ReactDOM.render( 
  <App/>,
  document.getElementById("root")
);