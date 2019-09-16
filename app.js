// TODO
const App = () => (
    <div>
        <h1>My Grocery List</h1>
        <ul>
            <Cucumbers />
            <Kale />
        </ul>
    </div>
);

const Cucumbers = () => (
    <li>Cucumbers</li>
);

const Kale = () => (
    <li>Kale</li>
);

ReactDOM.render(<App />, document.getElementById("app"));