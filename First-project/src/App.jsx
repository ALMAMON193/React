
import './App.css'

function App() {
  const list = "To DO List";
  const description = "This is the first React Project";
  let date = new Date();
  const dateName = date.getDate();
  const monthName = date.getMonth()+1;
  const yearName = date.getFullYear();
  
 
  return (
    <>
      <h1>{ list}</h1>
      <p>{description}</p>
      <p>{dateName +" "+ monthName +" "+ yearName}</p>

     
    </>
  )
}

export default App
