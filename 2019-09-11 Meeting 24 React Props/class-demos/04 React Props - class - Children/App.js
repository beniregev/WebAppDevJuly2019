// Code goes here

class Box extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    let boxStyle = {
      backgroundColor: this.props.color
    }
    
    
    return (
      <div style={boxStyle} className="box">
        {this.props.children}
      </div>
    );
  }
} 


class App extends React.Component {
  
  render() {
    return (
      <div>
        <Box color="green">
          <Box color="blue">
            <Box color="pink">
              <Box color="purple"/>
              <Box color="purple"/>
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
} 

// Main render function
ReactDOM.render( 
  <App/>,
  document.getElementById("root")
);