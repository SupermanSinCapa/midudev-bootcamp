import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje.js';



const Description = () => {
  return <p>Esta es la app del FUllStack</p>
}


const App = () => {
  const a = 2
  const b = 5

  return (
    <div className="App">
      <Mensaje color = 'red' message = 'Estamos trabajando'/>
      <Mensaje color = 'yellow' message = 'en un curso'/>
      <Mensaje color = 'green' message = 'de REACT'/>
      <Description />
    </div>
  );
}

export default App;
