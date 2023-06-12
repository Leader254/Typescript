import ListGroup from "./components/ListGroup"

const App = () => {
  const listGroupItems = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Phoenix",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  return (
    <div>
      <ListGroup listGroupItems={listGroupItems} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  )
}

export default App