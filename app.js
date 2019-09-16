// TODO
const App = () => (
    <div>
        <h1>My Grocery List</h1>
        <GroceryListItem groceryItems={[<Cucumbers />, <Kale />]}/>
    </div>
);

const GroceryListItem = (props) => (
    <ul>
        {props.groceryItems[0]}
        {props.groceryItems[1]}
    </ul>
);

const Cucumbers = () => (
    <li>Cucumbers</li>
);

const Kale = () => (
    <li>Kale</li>
);

ReactDOM.render(<App />, document.getElementById("app"));