import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alert variant="primary">This is an Alert</Alert>
        <Button>Test button</Button>
      </header>
    </div>
  );
}

export default App;
