import DeveloperCard from "./components/common/DeveloperCard";
import Greeting from "./components/common/Greeting";
import Card from "./components/common/Card"
import FruitList from "./components/common/FruitList";
import UserList from "./components/common/UserList"

const developerObj = {
  name: "Alice",
  age: 30,
  country: "USA",
}
function App() {
  return (
    <div>
      <div className="App">
        <Greeting isLoggedIn={true} />
      </div>
      <DeveloperCard {...developerObj} />
      <Card><h2>Hello</h2></Card>
      <FruitList />
      <UserList />
    </div>
  )

}

export default App;