class SunnyWeather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var style = {
            width: "500px",
            backgroundColor: "yellow",
            border: "2px solid black",
            margin: 10
        }

        return (
            <div style={style}>
                <h1>The Weather is Sunny</h1>
            </div >
        );
    }
}

class RainyWeather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var style = {
            width: "500px",
            backgroundColor: "silver",
            border: "2px solid black",
            margin: 10
        }
        return (
            <div style={style}>
                <h1>The Weather is Rainy</h1>
                <h3>Don't let the rain get you. Use superUmbrela</h3>
            </div >
        );
    }
}

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.isSunny ? <SunnyWeather /> : <RainyWeather />
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Weather isSunny={true} />
                <Weather isSunny={false} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
