class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var style = {
            width: 100,
            height: 100,
            textAlign: "center",
            margin: 10,
            backgroundColor: this.props.backgroundColor
        };

        return (
            <div style={style}>{ this.props.text }</div>
        );
    }
}



class App extends React.Component {
    render() {
        return (
            <div>
                <Box text="Fresh" backgroundColor="lightblue"/>
                <Box text="Calm" backgroundColor="lightgreen" />
                <Box text="Adventurous" backgroundColor="silver" />
                <Box text="Happiy" backgroundColor="yellow" />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
