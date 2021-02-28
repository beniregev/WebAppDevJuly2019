class UsernameInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            inputValue: ''
        };
    }

    // inputChanged() {
    handleChange(event) {
        var newValue = event.target.value;
        this.setState({ inputValue: newValue });
        this.props.onTextChange(newValue);
    }

    render() {
        var style = {
            margin: "10px",
            padding: "2px 4px"
        }
        return (
            <input type="text" id="sle_username"
                style={style}
                placeholder="Enter username"
                value={this.state.inputValue}
                onChange={this.handleChange} />
        );
    }
}

class ParentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
        this.onTextChange = this.onTextChange.bind(this);
    }

    // inputChanged() {
    onTextChange(newValue) {
        console.log("option in child component changed to " + newValue);
        this.setState({ username: newValue });
    }

    render() {
        return (
            <div>
                <label for="sle_username">Select a username: </label>
                {/* <input type="text" ref={(input) => { this.textInput = input; }} /> */}
                <UsernameInput onTextChange={this.onTextChange} val={this.state.username} />
                <p>{`Hello ${this.state.username}`}</p>
            </div >
        );
    }
}

class App extends React.Component {
    render() {
        return <ParentForm />;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
