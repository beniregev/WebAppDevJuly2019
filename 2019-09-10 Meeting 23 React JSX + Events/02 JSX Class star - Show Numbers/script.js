class App extends React.Component {
    render() {
        return (
            <div class="container">
                <ShowNumbers />
            </div>
        );
    }
}

class ShowNumbers extends React.Component {
    calc(max) {
        if (max < 0) { return "0"; }
        var output = "";
        for(var i=0; i<max; i++) {
            output += i + ", ";
        }
        output += max;
        return output;
    }

    render() {
        var result = this.calc(12);
        return (
            <div>
                <h3>{ result }</h3>
            </div>
        );
    }
}

//  Main render function
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
