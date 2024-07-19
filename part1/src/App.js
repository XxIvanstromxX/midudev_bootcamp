import './App.css';
import Mensaje from './Mensaje';

function App() {
  return (
    <div className="App">
      <Mensaje message='Estamos Creando' color='red' />
      <Mensaje message='Una app' color='green' />
      <Mensaje message='Desde React' color='blue' />
    </div>
  );
}

export default App;
