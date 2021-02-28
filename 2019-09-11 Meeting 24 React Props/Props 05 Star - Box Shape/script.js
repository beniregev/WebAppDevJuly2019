class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var boxSize = this.props.boxSize - 2;
        var style = {
            display: this.props.display,
            width: boxSize,
            height: boxSize
        };

        return (
            <div class="box" style={style}>
                
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div id="boxes">
                <div>
                    <Box boxSize='10' display='inline-block' />
                    <Box boxSize='20' display='inline-block' />
                    <Box boxSize='40' display='inline-block' />
                    <Box boxSize='20' display='inline-block' />
                    <Box boxSize='10' display='inline-block' />
                </div>
                <Box boxSize='102' display='block' />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
