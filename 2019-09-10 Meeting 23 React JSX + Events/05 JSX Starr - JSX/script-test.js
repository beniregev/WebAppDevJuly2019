class App extends React.Component {

    constructor() {
        super();
        this.state = {
            val_range: ''
        }
    }

    handleChange(e) {
        let obj = {};
        obj[e.target.name] = e.target.value;
        this.setState(obj);
    }

    render() {
        var data = {
            min: -5,
            max : 5
        }

        var inputRange = {
            minValue: data.min - 1,
            maxValue: data.max * 2,
            initialValue: (data.min - 1) + ((data.max * 2) - (data.min - 1)) / 2,
            step: 2
        }
        
        return (
            <div className="action -bar">
                {inputRange.minValue}  <input type="range" min={inputRange.minValue} max={inputRange.maxValue} step={inputRange.step} value={this.state.val_range} name='val_range' onChange={(e) => { this.handleChange(e) }} /> {inputRange.maxValue}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))