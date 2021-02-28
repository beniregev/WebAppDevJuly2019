class ServiceCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="service-card">
                <img class="cardImg" src={this.props.imageURL} />
                <h2>{this.props.cardTitle}</h2>
                <p>{this.props.cardDescription}</p>
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
