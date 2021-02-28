class Actor {
    constructor(firstName, lastName, dob, imageUrl, imdbUrl) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dob;
        this.imageUrl = imageUrl;
        this.imdbUrl = imdbUrl;
        this.fullName = firstName + ' ' + lastName;
    }

    get actorFirstName() { return this.firstName; }
    set actorFirstName(fname) { this.firstName = fname; }
    get actorLastName() { return this.lastName; }
    set actorLastName(lname) { this.lastName = lname; }
    get actorDateOfBirth() { return this.dateOfBirth; }
    set actorDateOfBirth(dob) { this.dateOfBirth = dob; }
    get actorImageUrl() { return this.imageUrl; }
    set actorImageUrl(url) { this.imageUrl = url; }
    get actorImdbUrl() { return this.imdbUrl; }
    set actorImdbUrl(url) { this.imdbUrl = url; }

    /*  Calculate the age of the actor today 
        dateString is a string in YYYYMMDD or MMDDYYYY format */
    static getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
        return age;
    }

    /*  Returns this class reoresentaion as a string in JSON format.
        Important:  The value of km/yaer is a computed field and NOT 
                    part of the class, it's not included in the string. */
    toString() {
        return "{ \"firstName\": \"" + this.firstName + "\", \"lastName\": \"" + this.lastName +
            "\", \"dateOfBirth\": \"" + this.dateOfBirth + "\", \"imageUrl\": \"" + this.imageUrl +
            "\", \"imdbUrl\": \"" + this.imdbUrl + "\" }";
    }
};

class ActorsAlbum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFor: '',
            sortBy: ''
        };
        this.onTextChange = this.onTextChange.bind(this);
        this.handleSortByChanged = this.handleSortByChanged.bind(this);
    }

    onTextChange(newValue) {
        console.log("string in child component changed to " + newValue);
        this.setState({ searchFor: newValue });
    }

    handleSortByChanged(selectedItem) {
        console.log("ActorsAlbum.handleSortByChanged -- Sort By: " + selectedItem);
        this.setState({ sortBy: selectedItem });
        console.log("ActorsAlbum.handleSortByChanged -- this.state.sortBy: " + this.state.sortBy);
    }

    render() {
        var imageStyle = {
            display: "inline-block"
        }
        let styleCard = {
            // width: '290px',
            height: '650px'
        }

        console.log("this.state.sortBy = " + this.state.sortBy);
        let { actorsArray } = this.props;
        // list.sort((a, b) => (a.color > b.color) ? 1 : -1);
        if (this.state.sortBy === 'First Name') {
            actorsArray.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
        } else if (this.state.sortBy === 'Last Name') {
            actorsArray.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
        } else if (this.state.sortBy === 'Full Name') {
            actorsArray.sort((a, b) => (a.fullName > b.fullName) ? 1 : -1);
        } else if (this.state.sortBy === 'Age') {
            actorsArray.sort((a, b) => (Actor.getAge(a.dateOfBirth) > Actor.getAge(b.dateOfBirth)) ? 1 : -1);
        }

        //  using array .map function and an Arrow function
        let actorsAlbum = [];
        if (typeof (this.state.searchFor) !== '') {
            // actorsAlbum = this.props.actorsArray.map(actor => {
            actorsAlbum = actorsArray.map(actor => {
                if (actor.fullName.toLowerCase().indexOf(this.state.searchFor) > -1) {
                    return (
                        <ReactBootstrap.Col xs={1} sm={2}>
                            <ReactBootstrap.Card style={styleCard}>
                                <ReactBootstrap.CardImg style={imageStyle} variant="top" src={actor.imageUrl} />
                                <ReactBootstrap.Card.Body>
                                    <ReactBootstrap.Card.Title><a href={actor.imdbUrl} title="IMDB Profile Page" target="_blank">{actor.fullName}</a></ReactBootstrap.Card.Title>
                                    <ReactBootstrap.Card.Subtitle className="mb-2 text-muted">DOB: {actor.dateOfBirth} (Age: {Actor.getAge(actor.dateOfBirth)})</ReactBootstrap.Card.Subtitle>
                                </ReactBootstrap.Card.Body>
                                <ReactBootstrap.Card.Footer>
                                    Actor
                                </ReactBootstrap.Card.Footer>
                            </ReactBootstrap.Card>
                        </ReactBootstrap.Col>);
                } else {
                    <div></div>
                }
            });
        } else {
            // actorsAlbum = this.props.actorsArray.map(actor =>
            actorsAlbum = actorsArray.map(actor =>
                <ReactBootstrap.Col xs={1} sm={2}>
                    <ReactBootstrap.Card style={styleCard}>
                        <ReactBootstrap.CardImg top style={imageStyle} src={actor.imageUrl} />
                        <ReactBootstrap.CardBlock>
                            <ReactBootstrap.CardTitle>{actor.fullName}</ReactBootstrap.CardTitle>
                            <ReactBootstrap.CardSubtitle className="mb-2 text-muted">DOB: {actor.dateOfBirth} (Age: {Actor.getAge(actor.dateOfBirth)})</ReactBootstrap.CardSubtitle>
                        </ReactBootstrap.CardBlock>
                        <ReactBootstrap.Card.Footer>
                            Actor
                    </ReactBootstrap.Card.Footer>
                    </ReactBootstrap.Card>
                </ReactBootstrap.Col>);
        }

        return (
            <div>
                <SearchInput onTextChange={this.onTextChange} handleSortByChanged={(selectedItem) => this.handleSortByChanged(selectedItem)} val={this.state.searchFor} />
                <ReactBootstrap.Container fluid>
                    <ReactBootstrap.Row>
                        {actorsAlbum}
                    </ReactBootstrap.Row>
                </ReactBootstrap.Container>
            </div>
        );
    }
}

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            sortBy: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSortDropDownClick = this.onSortDropDownClick.bind(this);
    }

    handleChange(event) {
        var newValue = event.target.value;
        this.setState({ inputValue: newValue });
        console.log("SearchInput.handleChange -- this.state.sortBy: " + this.state.sortBy);
        this.props.onTextChange(newValue);
    }

    onSortDropDownClick(selectedItem) {
        console.log("SearchInput.onSortDropDownClick -- Sort By: " + selectedItem);
        this.setState({ sortBy: selectedItem });
        this.props.handleSortByChanged(selectedItem);
    }

    render() {
        var style = {
            width: "98%",
            margin: "10px",
            padding: "2px 4px"
        }

        return (
            <ReactBootstrap.InputGroup style={style} size="lg">
                <ReactBootstrap.InputGroup.Prepend>
                    <ReactBootstrap.InputGroup.Text id="inputGroup-sizing-lg">Search For: </ReactBootstrap.InputGroup.Text>
                </ReactBootstrap.InputGroup.Prepend>
                <ReactBootstrap.Form.Control
                    type="text"
                    name="search-for"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    componentClass="input" placeholder="Search for actor(s)"
                    inputRef={(ref) => { this.input = ref }}
                    defaultValue={this.state.inputValue}
                />
                <SortDropDown onSortDropDownClick={(item) => this.onSortDropDownClick(item)} />
            </ReactBootstrap.InputGroup>
        );
    }
}

class SortDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: '',
            options: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        var selectedItem = event.target.text;
        console.log("SortDropDown.handleClick -- SelectedItem: " + selectedItem);
        this.setState({ sortBy: selectedItem });
        console.log("SortDropDown.handleClick -- this.state.sortBy: " + this.state.sortBy);
        this.props.onSortDropDownClick(selectedItem);
    }

    render() {
        let items = ["First Name", "Last Name", "Full Name", "Age"];
        let sortByItems = items.map(item => {
            return (
                <ReactBootstrap.Dropdown.Item >{item}</ReactBootstrap.Dropdown.Item>
            );
        });

        let sortBy = 'Sort By' + (this.state.sortBy !== '' && typeof(this.state.sortBy) !== 'undefined' ? ': ' + this.state.sortBy : '');
        return (
            // <ReactBootstrap.DropdownButton size="lg" onSelect={this.handleSelect(event)} id="dropdown-basic-button" title="Sort By">
            <ReactBootstrap.DropdownButton size="lg" title={sortBy}
                id="dropdown-basic-button" onClick={this.handleClick}>
                {sortByItems}
            </ReactBootstrap.DropdownButton>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var actorsArray = [];
        actorsArray.push(new Actor("Jet", "Li", "1963/04/26", "https://m.media-amazon.com/images/M/MV5BMjAxNjc0MjIyM15BMl5BanBnXkFtZTcwNTM2NDA4MQ@@._V1_.jpg", "https://www.imdb.com/name/nm0001472/?ref_=fn_al_nm_1"));
        actorsArray.push(new Actor("Bruce", "Lee", "1940/11/27", "https://m.media-amazon.com/images/M/MV5BMTUwMTg4NDkzMV5BMl5BanBnXkFtZTYwMjU4Nzc2._V1_.jpg", "https://www.imdb.com/name/nm0000045/?ref_=nv_sr_1?ref_=nv_sr_1"));
        actorsArray.push(new Actor("Brandon", "Lee", "1965/02/01", "https://m.media-amazon.com/images/M/MV5BMjAxNTE1NDkwM15BMl5BanBnXkFtZTYwNjk1NzU2._V1_.jpg", "https://www.imdb.com/name/nm0000488/?ref_=nv_sr_1?ref_=nv_sr_1"));
        actorsArray.push(new Actor("Michael", "Weatherly", "1968/07/08", "https://m.media-amazon.com/images/M/MV5BMjEzMzExMDE3MV5BMl5BanBnXkFtZTcwMjM0NDY1OQ@@._V1_.jpg", "https://www.imdb.com/name/nm0915762/?ref_=tt_cl_t5"));
        actorsArray.push(new Actor("Tommy Lee", "Jones", "1946/09/15", "https://m.media-amazon.com/images/M/MV5BMTkyNjc4MDc0OV5BMl5BanBnXkFtZTcwOTc5OTUwOQ@@._V1_SY1000_CR0,0,665,1000_AL_.jpg", "https://www.imdb.com/name/nm0000169/?ref_=nv_sr_1?ref_=nv_sr_1"));
        actorsArray.push(new Actor("Lee", "Majors", "1939/04/23", "https://m.media-amazon.com/images/M/MV5BNWUxNjJlZjItZGEyZi00MTA2LWJkYjctNjI0ZWNkMTljNGExXkEyXkFqcGdeQXVyMjExMjk0NDc@._V1_SX1777_CR0,0,1777,999_AL_.jpg", "https://www.imdb.com/name/nm0000516/?ref_=nv_sr_1?ref_=nv_sr_1"));
        actorsArray.push(new Actor("William", "Shatner", "1931/03/22", "https://m.media-amazon.com/images/M/MV5BYzhmMjJhNmUtYmZkOS00YTJiLTg1MTUtZjc4ZTQzOTdmMzcxXkEyXkFqcGdeQXVyMzQ2MDUxMTg@._V1_.jpg", "https://www.imdb.com/name/nm0000638/?ref_=nv_sr_1?ref_=nv_sr_1"));
        actorsArray.push(new Actor("Leonard", "Nemoy", "1931/03/26", "https://m.media-amazon.com/images/M/MV5BMTkwMDc3NzcyN15BMl5BanBnXkFtZTgwNDE0NjM3OTE@._V1_.jpg", "https://www.imdb.com/name/nm0000559/"));
        actorsArray.push(new Actor("Mark", "Harmon", "1951/09/02", "https://m.media-amazon.com/images/M/MV5BMTU0NTU3OTU3NF5BMl5BanBnXkFtZTYwODg2NDE1._V1_.jpg", "https://www.imdb.com/name/nm0001319/?ref_=tt_ov_st_sm"));
        actorsArray.push(new Actor("Bruce", "Boxleitner", "1950/05/12", "https://m.media-amazon.com/images/M/MV5BMTI2MTc5OTQ0M15BMl5BanBnXkFtZTcwMjY1Mjg4Mg@@._V1_.jpg", "https://www.imdb.com/name/nm0000310/?ref_=nv_sr_1?ref_=nv_sr_1"));
        actorsArray.push(new Actor("Josh", "Coxx", "1964/04/09", "https://m.media-amazon.com/images/M/MV5BMjEwNTcyMjAxN15BMl5BanBnXkFtZTgwNzU1ODA1NTE@._V1_.jpg", "https://www.imdb.com/name/nm0185104/?ref_=ttfc_fc_cl_t14"));
        actorsArray.push(new Actor("Walter", "Koenig", "1936/09/14", "https://m.media-amazon.com/images/M/MV5BODk1Mzc4NTU0M15BMl5BanBnXkFtZTcwNTk2ODY5Nw@@._V1_SY1000_CR0,0,663,1000_AL_.jpg", "https://www.imdb.com/name/nm0000479/?ref_=ttfc_fc_cl_t26"));
        actorsArray.push(new Actor("Mark", "Hamil", "1951/09/25", "https://m.media-amazon.com/images/M/MV5BMTU4MTY5NzgwM15BMl5BanBnXkFtZTgwOTgwNTEwMjI@._V1_SY1000_CR0,0,664,1000_AL_.jpg", "https://www.imdb.com/name/nm0000434/?ref_=nv_sr_1?ref_=nv_sr_1"));
        actorsArray.push(new Actor("Orlando", "Bloom", "1977/01/13", "https://m.media-amazon.com/images/M/MV5BMjE1MDkxMjQ3NV5BMl5BanBnXkFtZTcwMzQ3Mjc4MQ@@._V1_.jpg", "https://www.imdb.com/name/nm0089217/?ref_=nv_sr_1?ref_=nv_sr_1"));
        actorsArray.push(new Actor("Jason", "Carter", "1960/09/23", "https://m.media-amazon.com/images/M/MV5BODI2ODY1MjAzNF5BMl5BanBnXkFtZTgwMzc5ODQ1MjE@._V1_.jpg", "https://www.imdb.com/name/nm0141682/?ref_=tt_cl_t13"));
        actorsArray.push(new Actor("Sean", "Murray", "1977/11/15", "https://m.media-amazon.com/images/M/MV5BNjMyNTU3ZWItNDlmZS00ZGQ0LWExNGItYjA0OGQyZDQ2OTQ0XkEyXkFqcGdeQXVyODIwODIzNTY@._V1_.jpg", "https://www.imdb.com/name/nm0615266/?ref_=tt_ov_st_sm"));
        actorsArray.push(new Actor("Richard", "Biggs", "1960/03/18", "https://m.media-amazon.com/images/M/MV5BMTA1Nzg1MTE5OTleQTJeQWpwZ15BbWU4MDM1OTg0NTIx._V1_.jpg", "https://www.imdb.com/name/nm0081863/?ref_=tt_ov_st_sm"));
        actorsArray.push(new Actor("Harison", "Ford", "1942/07/13", "https://m.media-amazon.com/images/M/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_.jpg", "https://www.imdb.com/name/nm0000148/?ref_=nv_sr_1?ref_=nv_sr_1"));
        actorsArray.push(new Actor("Stephen", "Furst", "1954/05/08", "https://m.media-amazon.com/images/M/MV5BMTUwNzU2OTgyMV5BMl5BanBnXkFtZTcwODg4NDcyMQ@@._V1_.jpg", "https://www.imdb.com/name/nm0299122/?ref_=tt_ov_st_sm"));
        actorsArray.push(new Actor("Andreas", "Katsulas", "1946/05/18", "https://m.media-amazon.com/images/M/MV5BMjEzNzQ4MTU2Ml5BMl5BanBnXkFtZTYwOTI0NjI3._V1_.jpg", "https://www.imdb.com/name/nm0441537/?ref_=tt_cl_t4"));
        actorsArray.push(new Actor("Kit", "Harington", "1986/12/26", "https://m.media-amazon.com/images/M/MV5BMTA2NTI0NjYxMTBeQTJeQWpwZ15BbWU3MDIxMjgyNzY@._V1_SY1000_CR0,0,665,1000_AL_.jpg", "https://www.imdb.com/name/nm3229685/?ref_=nv_sr_1?ref_=nv_sr_1"));
        actorsArray.push(new Actor("Jerry", "Doyle", "1956/07/16", "https://m.media-amazon.com/images/M/MV5BOTIwNDcyNzA0NV5BMl5BanBnXkFtZTYwMTMyMjAz._V1_.jpg", "https://www.imdb.com/name/nm0236381/?ref_=tt_cl_t6"));
        actorsArray.push(new Actor("David", "McCallum", "1933/09/19", "https://m.media-amazon.com/images/M/MV5BNDkzMDE5OTU0OV5BMl5BanBnXkFtZTgwMzQ1MjM1MjI@._V1_.jpg", "https://www.imdb.com/name/nm0564724/?ref_=ttfc_fc_cl_t130"));
        actorsArray.push(new Actor("Johnny", "Depp", "1963/06/09", "https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_SY1000_CR0,0,701,1000_AL_.jpg", "https://www.imdb.com/name/nm0000136/?ref_=nv_sr_1?ref_=nv_sr_1"));
        actorsArray.push(new Actor("Bruce", "Willis", "1955/03/19", "https://m.media-amazon.com/images/M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_.jpg", "https://www.imdb.com/name/nm0000246/?ref_=nv_sr_1?ref_=nv_sr_1"));
        actorsArray.push(new Actor("Michael", "O'Hare", "1952/05/06", "https://m.media-amazon.com/images/M/MV5BMjI2NDI2MzQ1OV5BMl5BanBnXkFtZTgwOTE5ODQ1MjE@._V1_.jpg", "https://www.imdb.com/name/nm0641365/?ref_=ttfc_fc_cl_t16"));
        actorsArray.push(new Actor("Bill", "Mumy", "1954/02/01", "https://m.media-amazon.com/images/M/MV5BMTI3NDY1NTIyOV5BMl5BanBnXkFtZTYwMTU5NzQ0._V1_.jpg", "https://www.imdb.com/name/nm0612621/?ref_=tt_cl_t7"));
        actorsArray.push(new Actor("Jeff", "Conaway", "1950/10/05", "https://m.media-amazon.com/images/M/MV5BMTMxNTI1Njc2NF5BMl5BanBnXkFtZTcwMTgzMzE0NQ@@._V1_SY1000_CR0,0,691,1000_AL_.jpg", "https://www.imdb.com/name/nm0001063/?ref_=tt_cl_t10"));
        actorsArray.push(new Actor("Peter", "Dinklage", "1969/06/11", "https://m.media-amazon.com/images/M/MV5BMTM1MTI5Mzc0MF5BMl5BanBnXkFtZTYwNzgzOTQz._V1_.jpg", "https://www.imdb.com/name/nm0227759/?ref_=tt_cl_t1"));
        actorsArray.push(new Actor("John", "Bradley", "1988/09/15", "https://m.media-amazon.com/images/M/MV5BMjA1MTQ3NTU4M15BMl5BanBnXkFtZTcwNzI0OTYyOQ@@._V1_SY1000_CR0,0,765,1000_AL_.jpg", "https://www.imdb.com/name/nm4263213/?ref_=tt_cl_t9"));
        actorsArray.push(new Actor("Nikolaj", "Coster-Waldau", "1970/07/27", "https://m.media-amazon.com/images/M/MV5BMTc0MzkzOTk0NF5BMl5BanBnXkFtZTcwNjU5NTgzMQ@@._V1_.jpg", "https://www.imdb.com/name/nm0182666/?ref_=tt_cl_t7"));
        actorsArray.push(new Actor("Iain", "Glen", "1964/06/24", "https://m.media-amazon.com/images/M/MV5BMGY2ZjdlMzAtODQ0Mi00NjQzLThmN2UtYTUxMTAzNDg5MzE0XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg", "https://www.imdb.com/name/nm0322513/?ref_=nv_sr_1?ref_=nv_sr_1"));
        actorsArray.push(new Actor("Aidan", "Gillen", "1968/04/24", "https://m.media-amazon.com/images/M/MV5BMjMwNzE4MzMxNl5BMl5BanBnXkFtZTgwOTYwMTEyMDE@._V1_SY1000_SX750_AL_.jpg", "https://www.imdb.com/name/nm0318821/?ref_=tt_cl_t14"));
        actorsArray.push(new Actor("Rory", "McCann", "1969/04/24", "https://m.media-amazon.com/images/M/MV5BYmIzMjdkZmEtMDA0Yy00YzVhLWEzYmEtOWRmZmMzODYxZDQ5XkEyXkFqcGdeQXVyMTAwMDczMTU3._V1_SY1000_CR0,0,763,1000_AL_.jpg", "https://www.imdb.com/name/nm0564920/?ref_=tt_cl_t16"));
        actorsArray.push(new Actor("Isaac Hempstead", "Wright", "1999/04/09", "https://m.media-amazon.com/images/M/MV5BMjE0MjM5MDkwMV5BMl5BanBnXkFtZTgwMTM0NzkwNTE@._V1_SY1000_CR0,0,695,1000_AL_.jpg", "https://www.imdb.com/name/nm3652842/?ref_=tt_cl_t15"));
        actorsArray.push(new Actor("Jerome", "Flynn", "1963/03/16", "https://m.media-amazon.com/images/M/MV5BMjMxMTE3Nzg1N15BMl5BanBnXkFtZTgwNTc2MTk4MjI@._V1_SY1000_CR0,0,666,1000_AL_.jpg", "https://www.imdb.com/name/nm0283492/?ref_=tt_cl_t18"));
        actorsArray.push(new Actor("Daniel", "Portman", "1992/02/13", "https://m.media-amazon.com/images/M/MV5BMjEwNjk5MjU2N15BMl5BanBnXkFtZTgwMzk1NjEwNzE@._V1_SY1000_CR0,0,562,1000_AL_.jpg", "https://www.imdb.com/name/nm4535552/?ref_=tt_cl_t19"));
        actorsArray.push(new Actor("Jacob", "Anderson", "1990/06/18", "https://m.media-amazon.com/images/M/MV5BN2IzOWVlZDYtZmFhZS00ZmQ5LThmNjItMjM1MjM2NGE4NjJhXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_SY1000_CR0,0,666,1000_AL_.jpg", "https://www.imdb.com/name/nm2760664/?ref_=tt_cl_t20"));
        actorsArray.push(new Actor("Kristofer", "Hivju", "1978/12/07", "https://m.media-amazon.com/images/M/MV5BMmIwMmVhMjMtZmM2ZC00MGEzLWFjMGMtYmEyYjM1NjkzYTJjXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg", "https://www.imdb.com/name/nm1970465/?ref_=tt_cl_t22"));
        actorsArray.push(new Actor("Charles", "Dance", "1946/10/10", "https://m.media-amazon.com/images/M/MV5BMzY0Mjg4MzM0Ml5BMl5BanBnXkFtZTcwODc4NTIxNw@@._V1_SY1000_CR0,0,746,1000_AL_.jpg", "https://www.imdb.com/name/nm0001097/?ref_=tt_cl_t25"));

        return (
            <div id="div-flex" class="flex">
                <h1>Actors Album</h1>
                <ActorsAlbum actorsArray={actorsArray} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
