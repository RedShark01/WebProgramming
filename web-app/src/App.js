import logo from './logo.svg';
import './App.css';
import {Button} from "./Button/Button";

function App() {
  return (
    <div className="App">
        <h1 className="header" style={{backgroundColor: "yellow"}}>Header</h1>
        <div>test div</div>
        <Button/>
    </div>
  );
}

export default App;
