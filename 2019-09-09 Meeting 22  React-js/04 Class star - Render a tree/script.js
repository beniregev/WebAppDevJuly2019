class App extends React.Component {
    render() {
        return (
            <div>
                <div class="container">
                    <Box1 class="box box1">
                    </Box1>
                </div>
            </div>
        );
    }
}

class Box1 extends React.Component {
    render() {
        return (
            <div class="box box1">
                <Box2 class="box box2">
                </Box2>
            </div>
        );
    }
}

class Box2 extends React.Component {
    render() {
        return (
            <div class="box box2">
                <Box3 class="box box3">
                </Box3>
            </div>
        );
    }
}

class Box3 extends React.Component {
    render() {
        return (
            <div class="box box3" >
                <Box4 class="box box4" />
                <Box4 class="box box4" />
            </div>
        );
    }
}

class Box4 extends React.Component {
    render() {
        return (
            <div class="box box4" >

            </div>
        );
    }
}

//  Main render function
ReactDOM.render(
    <App />,
    document.getElementById("root")
);

