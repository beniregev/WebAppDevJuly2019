class ColoredBoxes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var style = {
            
        }
        //  2. using array .map function and an Arrow function
        let boxesArray = this.props.colors.map(
            color => 
            <div style={{width: "500px", backgroundColor: color.value, padding: "10px", margin: "10px", border: "2px solid black"}}> {color.name} 
            </div>
            );  //  End .map function call

        return (
            <div>
                {boxesArray}
            </div >
        );
    }
}

class App extends React.Component {
    render() {
        let colors = [];
        colors.push( { name: "Eye in The Sky", value: "cyan" } );
        colors.push( { name: "Light Green", value: "lightgreen" } );
        colors.push( { name: "Yellow Submarine", value: "yellow" } );
        colors.push( { name: "The Silver Bullet", value: "silver" } );

        return (
            <div>
                <ColoredBoxes colors={colors} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
