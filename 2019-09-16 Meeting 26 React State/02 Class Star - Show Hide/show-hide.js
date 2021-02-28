class ShowHide extends React.Component {
    constructor(props) {
        super(props);
        this.toggleBox = this.toggleBox.bind(this);
        this.state = {
            isBoxHidden: false
        }
    }

    toggleBox() {
        var prevIsBoxHidden = this.state.isBoxHidden;
        this.setState({ isBoxHidden: !prevIsBoxHidden });
    }

    render() {
        var classNames = "box " + (this.state.isBoxHidden ? "hidden" : "visible");
        
        return (
            <div>
                <button onClick={this.toggleBox}>Show/Hide Toggle</button>
                <div id="box" className={classNames}> </div>
            </div >
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div id="div-flex" class="flex">
                <ShowHide />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
