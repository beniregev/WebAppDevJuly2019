class ColorState extends React.Component {
    constructor(props) {
        super(props);
        this.toggleCyan = this.toggleCyan.bind(this);
        this.toggleGreen = this.toggleGreen.bind(this);
        this.togglePink = this.togglePink.bind(this);
        this.toggleRed = this.toggleRed.bind(this);
        this.toggleYellow = this.toggleYellow.bind(this);
        this.state = {
            isDisabledCyan: false,
            isDisabledGreen: false,
            isDisabledPink: false,
            isDisabledRed: false,
            isDisabledYellow: false
        }
    }

    toggleCyan() {
        var prev = this.state.isDisabledCyan;
        this.setState({
            isDisabledCyan: !prev
        });
    }

    toggleGreen() {
        var prev = this.state.isDisabledGreen;
        this.setState({
            isDisabledGreen: !prev
        });
    }

    togglePink() {
        var prev = this.state.isDisabledPink;
        this.setState({
            isDisabledPink: !prev
        });
    }

    toggleRed() {
        var prev = this.state.isDisabledRed;
        this.setState({
            isDisabledRed: !prev
        });
    }

    toggleYellow() {
        var prev = this.state.isDisabledYellow;
        this.setState({
            isDisabledYellow: !prev
        });
    }

    render() {
        var classesCyan     = "button " + (this.state.isDisabledCyan ? "disabled" : "cyan");
        var classesGreen    = "button " + (this.state.isDisabledGreen ? "disabled" : "green");
        var classesPink     = "button " + (this.state.isDisabledPink ? "disabled" : "pink");
        var classesRed      = "button " + (this.state.isDisabledRed ? "disabled" : "red");
        var classesYellow   = "button " + (this.state.isDisabledYellow ? "disabled" : "yellow");

        return (
            <div class="container">
                <button class={classesCyan} onClick={this.toggleCyan}>Cyan</button>
                <button class={classesGreen} onClick={this.toggleGreen}>Green</button>
                <button class={classesPink} onClick={this.togglePink}>Pink</button>
                <button class={classesRed} onClick={this.toggleRed}>Red</button>
                <button class={classesYellow} onClick={this.toggleYellow}>Yellow</button>
                {/* <div className={classNames}> </div> */}
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
