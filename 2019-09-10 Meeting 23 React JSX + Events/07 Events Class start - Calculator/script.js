class CalculatorWithOneNumber extends React.Component {
    constructor() {
        super();

        this.resultSquared = 0;
        this.resultSigma = 0;

        this.calculateAll = this.calculateAll.bind(this);
        this.calculateSquaredNumber = this.calculateSquaredNumber.bind(this);
        this.calculateSquaredRoot = this.calculateSquaredRoot.bind(this);
        this.calculateSigma = this.calculateSigma.bind(this);
        this.calculateHighestBetweenSquaredAndSigma = this.calculateHighestBetweenSquaredAndSigma.bind(this);
    }

    calculateSquaredNumber(num) {
        console.log("Calculator.calculateSquaredNumber(" + num + ")");
        this.resultSquared = Math.pow(num, 2);
        console.log(num + "^2 = " + this.resultSquared);
        document.getElementById("result1").innerHTML = "Squared Number = " + this.resultSquared;
    }

    calculateSquaredRoot(num) {
        console.log("Calculator.calculateSquaredRoot(" + num + ")");
        var squaredRoot = Math.pow(num, .5);
        document.getElementById("result2").innerHTML = "Squared Root = " + squaredRoot;
    }

    calculateSigma(num) {
        console.log("Calculator.calculateSigma(" + num + ")");
        var output = '';
        this.resultSigma = 0;
        for (var i = 1; i <= num; i++) {
            this.resultSigma += i;
            output += i + ' ';
            if (i < num)
                output += "+ ";
            else
                output += "= ";
        }
        document.getElementById("result3").innerHTML = "Sigma result: " + output + this.resultSigma;
    }

    calculateHighestBetweenSquaredAndSigma() {
        console.log("Calculator.calculateHighestBetweenSquaredAndSigma()");
        var output = "result: ";
        if (this.resultSigma > this.resultSquared) {
            output += "Sigma is higher than Squared, " + this.resultSigma + " > " + this.resultSquared;
        } else {
            output += "Sigma is lower than Squared, " + this.resultSigma + " < " + this.resultSquared;
        }
        document.getElementById("result4").innerHTML = output;
    }

    calculateAll(event) {
        console.log("Calculator.calculateAll(event)");
        var valueEntered = parseInt(event.target.value);
        console.log("valueEntered = " + valueEntered);

        this.calculateSquaredNumber(valueEntered);
        this.calculateSquaredRoot(valueEntered);
        this.calculateSigma(valueEntered);
        this.calculateHighestBetweenSquaredAndSigma();
    }

    render() {
        return (
            <div>
                <h1>Enter one number and make all calculations on it.</h1>
                <fieldset>
                    <p class="p-input">
                        <label class="column-left" for="sle-number">Enter Number: </label>
                        <input type="number" id="sle-number" class="column-right"
                            onBlur={this.calculateAll} required placeholder="Enter a number" />
                    </p>
                    <p id="result1">
                        Calculate Squared Number:
                </p>
                    <p id="result2">
                        Calculate Squared Root:
                </p>
                    <p id="result3">
                        Calculate Sigma:
                </p>
                    <p id="result4">
                        Calculate Highest Between Squared &amp; Sigma:
                </p>
                </fieldset>
            </div>
        );
    }
}

class CalculatorWithThreeNumbers extends React.Component {
    constructor() {
        super();

        this.resultSquared = 0;
        this.resultSigma = 0;

        this.calculateSquaredNumber = this.calculateSquaredNumber.bind(this);
        this.calculateSquaredRoot = this.calculateSquaredRoot.bind(this);
        this.calculateSigma = this.calculateSigma.bind(this);
        this.calculateHighestBetweenSquaredAndSigma = this.calculateHighestBetweenSquaredAndSigma.bind(this);
    }

    calculateSquaredNumber(event) {
        console.log("Calculator.calculateSquaredNumber(" + num + ")");
        var num = parseInt(event.target.value);
        this.resultSquared = Math.pow(num, 2);
        console.log(num + "^2 = " + this.resultSquared);
        document.getElementById("result01").innerHTML = "Squared Number = " + this.resultSquared;
        this.calculateHighestBetweenSquaredAndSigma();
    }

    calculateSquaredRoot(event) {
        console.log("Calculator.calculateSquaredRoot(" + num + ")");
        var num = parseInt(event.target.value);
        var squaredRoot = Math.pow(num, .5);
        document.getElementById("result02").innerHTML = "Squared Root = " + squaredRoot;
    }

    calculateSigma(event) {
        console.log("Calculator.calculateSigma(" + num + ")");
        var num = parseInt(event.target.value);
        this.resultSigma = 0;
        var output = '';
        for (var i = 1; i <= num; i++) {
            this.resultSigma += i;
            output += i + ' ';
            if (i < num)
                output += "+ ";
            else
                output += "= ";
        }
        document.getElementById("result03").innerHTML = "Sigma result: " + output + this.resultSigma;
        this.calculateHighestBetweenSquaredAndSigma();
    }

    calculateHighestBetweenSquaredAndSigma() {
        console.log("Calculator.calculateHighestBetweenSquaredAndSigma()");
        var output = "result: ";
        if (this.resultSigma === 0 && this.resultSquared > 0) {
            output += "Sigma is lower than Squared, " + this.resultSigma + " < " + this.resultSquared;
        } else if (this.resultSigma > 0 && this.resultSquared === 0) {
            output += "Sigma is higher than Squared, " + this.resultSigma + " > " + this.resultSquared;
        } else if (this.resultSigma === 0 && this.resultSquared === 0) {
            output += "Can't determine. Sigma and Squared are not uet calculated or equal zero (0)";
        } else {
            if (this.resultSigma > this.resultSquared) {
                output += "Sigma is higher than Squared, " + this.resultSigma + " > " + this.resultSquared;
            } else {
                output += "Sigma is lower than Squared, " + this.resultSigma + " < " + this.resultSquared;
            }
        }
        document.getElementById("result04").innerHTML = output;
    }

    render() {
        return (
            <div id="calculator3numbers">
                <h1>Enter 3 numbers, a number for each calculation</h1>
                <fieldset>
                    <p class="p-input">
                        <label class="column-left" for="sle-number1">Enter Number: </label>
                        <input type="number" id="sle-number1" class="column-right"
                            onBlur={this.calculateSquaredNumber} required placeholder="Number for squared (^2)" />
                    </p>
                    <p id="result01">
                        Calculate Squared Number
                    </p>
                </fieldset>
                <fieldset>
                    <p class="p-input">
                        <label class="column-left" for="sle-number2">Enter Number: </label>
                        <input type="number" id="sle-number2" class="column-right"
                            onBlur={this.calculateSquaredRoot} required placeholder="Number for squared root" />
                    </p>
                    <p id="result02">
                        Calculate Squared Root
                    </p>
                </fieldset>
                <fieldset>
                    <p class="p-input">
                        <label class="column-left" for="sle-number3">Enter Number: </label>
                        <input type="number" id="sle-number3" class="column-right"
                            onBlur={this.calculateSigma} required placeholder="Number for Sigma" />
                    </p>
                    <p id="result03">
                        Calculate Sigma
                </p>
                </fieldset>
                <p id="result04">
                    Calculate Highest Between Squared &amp; Sigma:
                </p>
            </div >
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <form id="calculators">
                <p>
                    <CalculatorWithOneNumber />
                </p>
                <p>
                    <CalculatorWithThreeNumbers />
                </p>
            </form>
        );
    }
}

//  Main render function
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
