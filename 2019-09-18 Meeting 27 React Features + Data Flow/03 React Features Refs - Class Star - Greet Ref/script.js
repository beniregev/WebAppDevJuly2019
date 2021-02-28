class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
        this.greet = this.greet.bind(this);
    }

    greet() {
        this.setState({ name: this.textInput.value });
    }

    render() {
        return (
            <div>
                <input type="text" ref={(input) => { this.textInput = input; }} />
                <button onClick={this.greet}>Greet</button>
                <p>{`Hello ${this.state.name}`}</p>
            </div >
        );
    }
}

class App extends React.Component {
    render() {
        return <Greeting />;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
