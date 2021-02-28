class App extends React.Component {
    render() {
        return (
            <div class="container">
                <MyForm />
            </div>
        );
    }
}

/*
    1.  (a) Link that will open in a new page, with class 
            border that will set a border around the link. 
        (b) The address of the link will be passed in the 
            data object, in the attribute linkAddress. 
        (c) The link text should be "go to <address>" where 
            address is the one passed in the data object.
    2.  A slider (range) with block display. min value, is the min 
        attribute (from the data) - 1, the max is the data max * 2, 
        the step is 2.
    3.  a button with id "click", text color from the data, and 
        font weight from the data. the text of the button will also 
        be supplied in the data under "buttonText"
*/
class MyForm extends React.Component {
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
            linkAddress: "https://www.google.com/",
            linkText: "google",
            min: -5,
            max: 5,
            color: "maroon",
            "font-weight": "bold",
            buttonText: "click me"
        };

        var buttonStyle = {
            color: data.color,
            "font-weight": data["font-weight"]
        }

        var inputRange = {
            minValue: data.min - 1,
            maxValue: data.max * 2,
            value: (data.min - 1) + ((data.max * 2) - (data.min - 1)) / 2,
            step: 2
        }

        return (
            <form>
                <div id="goto-site" class="form-element">
                    <a href={data.linkAddress} target="_blank">Go to {data.linkText}</a>
                </div>
                <div class="form-element">
                    {/* <input type="range" id="sld" min={inputRange.minValue} max={inputRange.maxValue} value={inputRange.value} step={inputRange.step} /> */}
                    {inputRange.minValue}  <input type="range" min={inputRange.minValue} max={inputRange.maxValue} step={inputRange.step} value={this.state.val_range} name='val_range' onChange={(e) => { this.handleChange(e) }} /> {inputRange.maxValue}
                </div>
                <div id="buttons-belt" class="form-element">
                    <button>{data.buttonText}</button>
                </div>
            </form>
        );
    }
}

//  Main render function
ReactDOM.render(
    <App />,
    document.getElementById("root")
);

