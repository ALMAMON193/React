
import './App.css'
import Data from "./data.json"
import Card from "./components/Card"

function App() {
  //<Card name={Data[x].name} email={Data[x].email} phone={Data[x].phone}
  let items = [];
  // for ( let x = 0; x<Data.length; x++){
  //   items.push(<Card name={Data[x].name} email={Data[x].email} phone={Data[x].phone} />)
  // }

  // Data add  in mappling
  Data.map((x,y) => {
    items.push(<Card key={y} name={x.name} email={x.email} phone={x.phone} />)
  })

  return (
    <>
    <h1 className='headingStyle'>The article element</h1>
     {items}
    </>
  )
}

export default App
