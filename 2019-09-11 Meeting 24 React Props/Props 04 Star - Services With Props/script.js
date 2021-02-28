class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md bg-white sticky-top">
                <NavbarCollapse />
            </nav>
        );
    }
}

class BodyContent extends React.Component {
    render() {
        return (
            <div class="body-content">
                <Jumbotron />
                <CardDeckContainer />
            </div>
        );
    }
}

class NavbarCollapse extends React.Component {
    render() {
        return (
            <div class="collapse navbar-collapse" id="collapse_target">
                <NavbarMenu />
                <NavbarPhone />
            </div>
        );
    }
}

class NavbarMenu extends React.Component {
    render() {
        return (
            <ul class="navbar-nav">
                <NavItemServices />
                <NavItemWork />
                <NavItemTheTeam />
            </ul>
        );
    }
}

class NavItemServices extends React.Component {
    render() {
        return (
            <li class="nav-item">
                <a id="menu-services" class="nav-link" href="#">SERVICES</a>
            </li>
        );
    }
}

class NavItemWork extends React.Component {
    render() {
        return (
            <li class="nav-item">
                <a id="menu-contact" class="nav-link" href="#">WORK</a>
            </li>
        );
    }
}

class NavItemTheTeam extends React.Component {
    render() {
        return (
            <li class="nav-item">
                <a id="menu-theTeam" class="nav-link" href="#">THE TEAM</a>
            </li>
        );
    }
}

class NavbarPhone extends React.Component {
    render() {
        return (
            <ul class="navbar-nav ml-auto">
                <NavbarItemImgPhone>

                </NavbarItemImgPhone>
            </ul>
        );
    }
}

class NavbarItemImgPhone extends React.Component {
    render() {
        return (
            <div>
                <li class="nav-item">
                    <a class="nav-link menu-img-phone" href="#"><img src="images/smart‏‏phone.JPG" alt="smartphone.jpg" /></a>
                </li>
            </div>
        );
    }
}

class Jumbotron extends React.Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <JumbotronContainer />
            </div>
        );
    }
}

class CardDeckContainer extends React.Component {
    render() {
        return (
            <div class="card-deck-container">
                <RowCardDeck />
            </div>
        );
    }
}

class JumbotronContainer extends React.Component {
    render() {
        return (
            <div class="container jumbotron-container">
                <h2>SERVICES</h2>
                <p class="lead p-lead">
                    Our vision is simple: We want to create websites and applications with both
                    high quality design and easy-to-access. The finished product will be
                    totally unique and represent awesomeness.
                </p>
                <hr class="my-2 d-none" />
                <p class="d-none"></p>
                <p class="lead d-none">
                    <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                </p>
            </div>
        );
    }
}

class RowCardDeck extends React.Component {
    render() {
        let dataCard1 = {
            image: {
                url: "data:image/jpeg;base64,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",
                alt: "kitten"
            },
            card: {
                title: "USER INTERFACE DESIGN",
                texts: ["Wireframing", "prototyping", "Usability Testing"]
            }
        }

        let dataCard2 = {
            image: {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4eGV4c-uCFKig2n_boE7e7Yk_8lQKMDJhJVa94Cnieuoe4RyWgw",
                alt: "ninja cat"
            },
            card: {
                title: "CONCEPT AND IDEAS",
                texts: ["Conceptualization", "Digital Branding", "Product Strategy"]
            }
        }

        let dataCard3 = {
            image: {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDYWbE2jz0KlosG_xDT4cD-qQxL-rYHvdYKpbjlW0iFfFZdegXA",
                alt: "hairless cat"
            },
            card: {
                title: "DESIGN AND BRANDING",
                texts: ["Interaction Design", "Graphic Design", "Identity Design"]
            }
        }

        return (
            <div class="row card-deck">
                <Service cardData={dataCard1} />
                <Service cardData={dataCard2} />
                <Service cardData={dataCard3} />
            </div>
        );
    }
}

class Service extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("this.props.cardData = { " + this.props.cardData + " }");

        return (
            <div class="card col-md-3">
                <ServiceHeader
                    imageUrl={this.props.cardData.image.url}
                    imageAlt={this.props.cardData.image.alt}
                    serviceTitle={this.props.cardData.card.title}
                />
                <ServiceBody listItems={this.props.cardData.card.texts} />
            </div>
        );
    }
}

class ServiceHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="card-header">
                <HeaderImage imageUrl={this.props.imageUrl} imageAlt={this.props.imageAlt} />
                <HeaderTitle serviceTitle={this.props.serviceTitle} />
            </div>
        );
    }
}

class HeaderImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img class="card-img-top img-circle mx-auto"
                src={this.props.imageUrl}
                alt={this.props.imageAlt} />
        );
    }
}

class HeaderTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h4 class="card-title text-center">{this.props.serviceTitle}</h4>
        );
    }
}

class ServiceBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var itemsList = "";
        for (var i = 0; i < this.props.listItems.length; i++) { itemsList += this.props.listItems[i] + ' '; }

        return (
            <div class="card-body d-flex flex-column">
                <ul class="card-text">
                    {itemsList}
                </ul>
            </div>
        );
    }
}

/*
    <Navbar>
        <NavbarCollapse>
            <NavbarMenu>
                <NavItemServices />     SERVICES
                <NavItemWork />         WORK
                <NavItemTheTeam />      THE TEAM
            </NavbarMenu>
            <NavbarPhone>
                <NavbarItemImgPhone />  "images/smart‏‏phone.JPG"
            </NavbarPhone>
        <NavbarCollapse>
    </Navar>
    <BodyContent>
        <Jumbotron>
            <JumbotronContainer />
        </Jumbotron>
        <CardDeckContainer>
            <RowCardDeck>
                <Service cardData={dataCard1}>
                    <ServiceHeader imageUrl={..} imageAlt={..} serviceTitle={..}
                        <HeaderImage imageUrl={this.props.imageUrl} imageAlt={this.props.imageAlt} />
                        <HeaderTitle serviceTitle={this.props.serviceTitle} />
                    </ServiceHeader>
                    <ServiceBody listItems={[]}>
                        <ul class="card-text">
                            {itemsList}
                        </ul>
                    </ServiceBody>
                </Service>
                <Service cardData={dataCard2}>
                    <ServiceHeader imageUrl={..} imageAlt={..} serviceTitle={..}
                        <HeaderImage imageUrl={this.props.imageUrl} imageAlt={this.props.imageAlt} />
                        <HeaderTitle serviceTitle={this.props.serviceTitle} />
                    </ServiceHeader>
                    <ServiceBody listItems={[]}>
                        <ul class="card-text">
                            {itemsList}
                        </ul>
                    </ServiceBody>
                </Service>
                <Service cardData={dataCard3}>
                    <ServiceHeader imageUrl={..} imageAlt={..} serviceTitle={..}
                        <HeaderImage imageUrl={this.props.imageUrl} imageAlt={this.props.imageAlt} />
                        <HeaderTitle serviceTitle={this.props.serviceTitle} />
                    </ServiceHeader>
                    <ServiceBody listItems={[]}>
                        <ul class="card-text">
                            {itemsList}
                        </ul>
                    </ServiceBody>
                </Service>
            </RowCardDeck>
        </CardDeckContainer>
    </BodyContent>
*/
class App extends React.Component {
    render() {
        return (
            <div class="container">
                <Navbar />
                <BodyContent />
            </div>
        );
    }
}

//  Main render function
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
