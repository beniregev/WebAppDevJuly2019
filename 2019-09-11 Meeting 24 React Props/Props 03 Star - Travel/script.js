class BreadCrumbs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var style = {
            width: this.props.dotsCount * 18
        };

        //  var dotsArray = ['not-active', 'active', 'not-active', 'not-active', 'not-active'];
        var dotsArray = [];
        for (var i = 0; i < this.props.dotsCount; i++) { dotsArray.push("not-Active"); }
        dotsArray[this.props.dotsIndex - 1] = 'active';

        const dots = dotsArray.map((dotsArray) =>
          <svg height="15" width="15">
            <circle class={dotsArray} cx="10" cy="10" r="5" stroke="black" stroke-width="1" fill="yellow" />
            Sorry, your browser does not support inline SVG.
          </svg>
        );

        // return (
        //     <div id="dotsBreadCrumbs" style={style}>
        //         <svg height="15" width="15">
        //             <circle cx="10" cy="10" r="5" stroke="black" stroke-width="1" fill="yellow" />
        //             Sorry, your browser does not support inline SVG.
        //         </svg>
        //         <svg height="15" width="15">
        //             <circle cx="10" cy="10" r="5" stroke="black" stroke-width="1" fill="blue" />
        //             Sorry, your browser does not support inline SVG.
        //         </svg>
        //         <svg height="15" width="15">
        //             <circle cx="10" cy="10" r="5" stroke="black" stroke-width="1" fill="yellow" />
        //             Sorry, your browser does not support inline SVG.
        //         </svg>
        //     </div>
        // );
        return (
            <div id="dotsBreadCrumbs" style={style}>
                { dots }
            </div>
        );
    }
}

class TravelCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="travel-card">
                <img class="cardImg" src={this.props.imageURL} />
                <h4>{this.props.cardTitle}</h4>
                <p>{this.props.description}</p>
                <BreadCrumbs dotsCount={this.props.dotsCount} dotsIndex={this.props.dotsIndex} />
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div id="div-flex" class="flex">
                <TravelCard imageURL='images/ready-To-Travel.jpg' cardTitle='Ready to Travel' description='Choose your destination, plan your trip. Pick the best place for your holiday.' dotsCount='3' dotsIndex='1' />
                <TravelCard imageURL='images/select-the-date.jpg' cardTitle='Select The Date' description='Select the day, pick your ticket. We give you the best price. Guarantied!' dotsCount='3' dotsIndex='2' />
                <TravelCard imageURL='images/feels-like-home.jpg' cardTitle='Feels Like Home' description="Enjoy your holidays! Don't forget to take a beer and take a photo!" dotsCount='3' dotsIndex='3' />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
