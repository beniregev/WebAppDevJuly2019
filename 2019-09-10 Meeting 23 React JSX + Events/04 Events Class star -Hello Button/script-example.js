class HelloCounter extends React.Component {
    Constructor() {
        super();
        this.counter = 0;
        //  Option 1 to preserve the context of 'this' => bind 'this' to "sayHello"
        this.sayHello = this.sayHello.bind(this);
    }

    // //  Option 2 to preserve the context of 'this' => use an Arraow function
    // sayHello2 = () => {
    //     ++this.counter;
    //     document.getElementById("result").innerHTML = "Hello " + this.counter;
    // }

    render() {
        return (
            <div>
                <button onClick={this.sayHello}>
                    Click Me
                </button>
                <span id="result" ></span>
            </div>
        );
}
}

class App extends React.Component {
    render() {
        return (
            <div>
                <HelloCounter />
            </div>
        );
    }
}

//  Main render function
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
