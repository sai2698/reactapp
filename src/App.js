//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import $ from 'jquery';
//import Popper from 'popper.js';

function App(props) {
  return (
    <div className="alert alert-primary" role="alert">
      hello {props.name} !
    </div>
  );
}

export default App;
