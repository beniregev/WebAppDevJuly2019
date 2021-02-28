class App extends React.Component {
    render() {
        return (
            <div class="container">
                <WinLoose />
            </div>
        );
    }
}

class WinLoose extends React.Component {
    calc() {
        return Math.trunc(Math.random() * 10) + 1;
    }

    render() {
        var randomNumber = this.calc();
        var output = "";
        if (randomNumber > 5) {
            output = <h1>The number is { randomNumber } -- You Win!</h1>;
        } else {
            output = <h3>The number is { randomNumber } -- You Lost!</h3>;
        }
        return (
            <div>{output}</div>
        );
}
}

//  Main render function
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
