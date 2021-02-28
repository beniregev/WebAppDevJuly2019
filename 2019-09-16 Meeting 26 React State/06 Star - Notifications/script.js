class ColorState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: ["", "&#10122", "&#10123", "&#10124", "&#10125", "&#10126", "&#10127", "&#10128", "&#10129", "&#10130", "&#10131"]
        }
    }

    render() {
        let styleContainer = {
            position: "relative"
        }
        let styleImgMenu = {
            height: "40px",
            padding: "0px 3px",
            margin: "2px"
        }

        let styleSmallRoundSpan = {
            height: "15px",
            width: "15px",
            "font-size": "10px",
            "text-align": "center",
            "background-color": "#bbb",
            "border-radius": "50%",
            position: "absolute",
            top: "2px",
            left: "210px",
            border: "1px solid black"
        }
        let randomNum = Math.trunc(Math.random() * 10) + 1;
        console.log("Random Number = " + randomNum);
        return (
            <div class="container" style={styleContainer}>
                <img class="imgMenu" style={styleImgMenu} src="images/user.png" alt="user" />
                <img class="imgMenu" style={styleImgMenu} src="images/favorite.png" alt="favorite" />
                <img class="imgMenu" style={styleImgMenu} src="images/10 commadments 3.png" alt="dowload to tablet" />
                <img class="imgMenu" style={styleImgMenu} src="images/email 2.png" alt="email" />
                <img class="imgMenu" style={styleImgMenu} src="images/www.png" alt="www" />
                <img class="imgMenu" style={styleImgMenu} src="images/youtube 1.png" alt="youtube" />
                {/* <span class="small-span span-num">{this.state.numbers[randomNum]}</span> */}
                <span class="small-round-span num" style={styleSmallRoundSpan}>{randomNum > 0 ? randomNum : null}</span>
            </div >
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div id="div-flex" class="flex">
                <ColorState />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
