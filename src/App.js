import logo from './logo.svg';
import './App.css';
import ButtonOptions from './components/ButtonOptions';
import ClipBoardControls from './components/ClipBoardControl';

function App() {
  return (
    <div className="App">
      <p> components comes here! </p>
      <div>
        <ClipBoardControls />
        <ButtonOptions />
      </div>
    </div>
  );
}

export default App;
