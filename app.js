// TODO
const App = (props) => (
    <div>
        <h1>My Grocery List</h1>
        <GroceryList groceryItems={['Cucumber', 'Kale']}/>
    </div>
);

const GroceryList = (props) => (
    <ul>
        {props.groceryItems.map(item =>
            <GroceryListItem item={item} />
            )}
    </ul>
);

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.item}</li>
        );
    }
} 

ReactDOM.render(<App />, document.getElementById("app"));