class App extends React.Component {
    render() {
        return (
            <div>
                <div class="container">
                    <QuizTitle />
                    <form>
                        <Question1 />
                        <Question2 />
                    </form>
                </div>

            </div>
        );
    }
}

class QuizTitle extends React.Component {
    render() {
        return (
            <div>
                <h3>How Do You Like Front End?</h3>
            </div>
        );
    }
}

class Question1 extends React.Component {
    render() {
        return (
            <div class="form-group">
                <label for="sld-loveFed">How much you love Front End Development?</label>
                <input type="range" id="sld-loveFed" class="form-control input-element" name="HowLoveFed" min="0" max="10" value="5"/>
            </div>
        );
    }
}

class Question2 extends React.Component {
    render() {
        return (
            <div class="form-group" >
                <label for="sle-favoriteTopic">What is your favorite Front End feature Topic?</label>
                <input type="text" id="sle-favoriteTopic" class="form-control input-element" placeholder="Enter what is your favorite FE topic?" />
            </div>
        );
    }
}

//  Main render function
ReactDOM.render(
    <App />,
    document.getElementById("root")
);

