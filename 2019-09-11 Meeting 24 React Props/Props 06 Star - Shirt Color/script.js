class ColorSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: this.props.colors[0]
        }
        this.colorUpdate = this.colorUpdate.bind(this);
    }

    colorUpdate(event) {
        let selectedColorIndex = event.target.selectedIndex;
        this.state.selectedColor = this.props.colors[selectedColorIndex];
        this.setState(this.state);
    }

    render() {
        ////    Initializing options array 
        ////    1. with regular for-loop
        // let optionsArray[];
        // for (let i=0; i<this.props.colors.length; i++) {
        //     optionsArray.push(<option value={this.props.colors[i].value}>{this.props.colors[i].name}</option>)
        // }

        //  2. using array .map function and an Arrow function
        let optionsArray = this.props.colors.map(color => <option value={color.value}> {color.name} </option>);

        return (
            <div>
                <select onChange={this.colorUpdate}>
                    {optionsArray}
                </select>
                <p>Your {this.props.type} will be <spam style={{color: this.state.selectedColor.value}}> {this.state.selectedColor.name} </spam></p>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        //  Declaring the arrays and pushing the  
        //  colors. It makes the code more readable
        let colors1 = [];
        colors1.push( { name: "Mellow Pink", value: "pink" } );
        colors1.push( { name: "Golden Brown", value: "brown" } );
        colors1.push( { name: "Yellow Submarine", value: "yellow" } );

        let colors2 = [];
        colors2.push( { name: "Blue", value: "blue" } );
        colors2.push( { name: "Silver", value: "silver" } );
        colors2.push( { name: "Dark Gray", value: "darkgray" } );
 
        return (
            <div>
                <ColorSelector colors={colors1} type="dress" />
                <ColorSelector colors={colors2} type="shirt" />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
