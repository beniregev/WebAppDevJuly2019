class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.state = {
            count: 0
        }
    }

    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrease() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        var style = {
            width: 100,
            fontWeight: "bold",
            color: "blue",
            padding: "5px 20px"
        }
        return (
            <div>
                <button onClick={this.decrease}>decrease</button>
                <span style={style}> { this.state.count } </span>
                <button onClick={this.increase}>Increment</button>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div id="div-flex" class="flex">
                <Counter />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
