class HelloGreeting extends React.Component {
    sayHello() {
        document.getElementById("greeting").innerHTML = "Hello World";
    }

    render() {
        return (
            <div>
                <button onClick={this.sayHello}>
                    Click Me
                </button>
                <p id="greeting" ></p>
            </div>
        );
}
}

class App extends React.Component {
    render() {
        return (
            <div>
                <HelloGreeting />
            </div>
        );
    }
}

//  Main render function
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
