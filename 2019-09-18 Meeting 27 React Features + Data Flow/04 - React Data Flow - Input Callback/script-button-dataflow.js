class GreetingButton extends React.Component {
    constructor(props) {
        super(props);
        this.greetingTo = this.greetingTo.bind(this);
    }

    greetingTo() {
        this.props.handleClick();
    }

    render() {
        return (
            <button onClick={this.greetingTo}>Greet</button>
        );
    }
}

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
                <GreetingButton handleClick={this.greet}></GreetingButton>
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
