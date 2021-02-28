class ColorState extends React.Component {
    constructor(props) {
        super(props);
        this.toggleBlue = this.toggleBlue.bind(this);
        this.toggleGreen = this.toggleGreen.bind(this);
        this.toggleOrange = this.toggleOrange.bind(this);
        this.toggleYellow = this.toggleYellow.bind(this);
        this.state = {
            isBoxHidden: false,
            isBlue: false,
            isYellow: false
        }
    }

    toggleBlue() {
        var prevIsBlue = this.state.isBlue;
        this.setState({
            isBlue: !prevIsBlue,
            isGreen: false,
            isOrange: false,
            isYellow: false
        });
    }

    toggleGreen() {
        var prevIsGreen = this.state.isGreen;
        this.setState({
            isBlue: false,
            isGreen: !prevIsGreen,
            isOrange: false,
            isYellow: false
        });
    }

    toggleOrange() {
        var prevIsOrange = this.state.isOrange;
        this.setState({
            isBoxHidden: false,
            isBlue: false,
            isGreen: false,
            isOrange: !prevIsOrange,
            isYellow: false
        });
    }

    toggleYellow() {
        var prevIsYellow = this.state.isYellow;
        this.setState({
            isBlue: false,
            isGreen: false,
            isOrange: false,
            isYellow: !prevIsYellow
        });
    }

    render() {
        var classNames = "box" +
            (this.state.isBoxHidden ? " hidden" : "") + 
            (this.state.isBlue ? " blue" : "") + 
            (this.state.isGreen ? " green" : "") + 
            (this.state.isOrange ? " orange" : "") + 
            (this.state.isYellow ? " yellow" : "");

        return (
            <div>
                <button class="blue" onClick={this.toggleBlue}>Blue</button>
                <button class="green" onClick={this.toggleGreen}>Green</button>
                <button class="orange" onClick={this.toggleOrange}>Orange</button>
                <button class="yellow" onClick={this.toggleYellow}>Yellow</button>
                <div className={classNames}> </div>
            </div >
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div id="div-flex" class="flex">
                <ColorState />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
