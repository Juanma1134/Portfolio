import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Inicio from './Components/Inicio';

function App() {
  return (
    <div className="App" id='Inicio'>
      <div className="Separador" id='InfoPersonal'>
        <p>.</p>
      </div>
      <Header />
      <Inicio />
      <Footer />
    </div>
  );
}

export default App;