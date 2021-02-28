class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                'http://via.placeholder.com/350x150',
                'http://via.placeholder.com/350x151'
            ],
            currentImage: 0
        };
        this.fadeImage = this.fadeImage.bind(this);
    }
    fadeImage(e) {
        e.preventDefault();
        this.setState({ currentImage: (this.state.currentImage + 1) % this.state.images.length })
    }
    render() {

        return (
            <FadeImage images={this.state.images} currentImage={this.state.currentImage} fadeImage={this.fadeImage} />
        )
    }
}

class FadeImage extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="image">
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                    <section>
                        <button className="button" onClick={this.props.fadeImage.bind(this)}>Click!</button>
                        <img src={this.props.images[this.props.currentImage]} /></section>
                </CSSTransitionGroup>
            </div>
        );
    }
}

class ButtonProps extends React.Component {
    constructor(props) {
        super(props);
        this.btnClick = this.btnClick.bind(this);
    }

    btnClick() {
        let newValue = !this.props.isVisible;
        console.log("this.props.isVisible: " + this.props.isVisible);
        console.log("Now isVisible will be: " + newValue);
        console.log("-------------------------------------------------");
        this.props.changeVisibility(newValue);
    }

    render() {
        var style = {
            margin: "10px",
            padding: "2px 4px"
        }
        return (
            <button style={style} onClick={this.btnClick}>
                PropsBox Toggle IsVisible
            </button>
        );
    }
}

class PropsOrState extends React.Component {
    constructor(props) {
        super(props);
        this.togglePropsIsVisible = this.togglePropsIsVisible.bind(this);
        this.toggleStateIsVisible = this.toggleStateIsVisible.bind(this);
        this.state = {
            isVisible: true
        }
    }

    toggleStateIsVisible() {
        var prev = this.state.isVisible;
        this.setState({
            isVisible: !prev
        });
    }

    togglePropsIsVisible(newValue) {
        var prev = newValue;
        this.props.isVisible = newValue;
        console.log("this.props.isVisible=" + this.props.isVisible);
        this.setState({ isVisible: this.props.isVisible });
    }

    render() {
        let isVisible = (typeof(this.props.isVisible) === "undefined" ? true : this.props.isVisible);
        let propsClass = "box yellow " + (this.props.isVisible ? "visible" : "hidden");
        let stateClass = "box blue " + (this.state.isVisible ? "visible" : "hidden");
        return (
            <div class="container">
                <ButtonProps changeVisibility={this.togglePropsIsVisible} isVisible={this.props.isVisible}/>
                <div id="divProps" className={propsClass}></div>
                <button onClick={this.toggleStateIsVisible}>StateBox Toggle IsVisible</button>
                <div id="divState" className={stateClass}></div>
            </div >
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <PropsOrState isVisible={true} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
