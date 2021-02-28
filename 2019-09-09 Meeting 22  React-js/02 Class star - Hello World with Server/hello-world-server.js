class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                My first react Component

                <ul className="border-3px-solid-black">
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>forth</li>
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <MyFirstComponent/>,
    document.getElementById("root")
    );
    
