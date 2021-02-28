class App extends React.Component {
    render() {
        return (
            <div class="container">
                <Factorial />
            </div>
        );
    }
}

class Factorial extends React.Component {
    calc(num) {
        if (num === 0 || num === 1) { return 1; } 

        var result = 1
        for(var i=2; i<=num; i++) {
            result *= i;
        }
        return "Factorial of " + num + " is " + result;
    }

    render() {
        var result = this.calc(5);
        return (
            <div>
                <b>{ result }</b>
            </div>
        );
    }
}

//  Main render function
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
