import logo from './logo.svg';
import './App.css'; /* Quando usar o módulo, a fórmula de importar é diferente. */


function App() {
  return (
    <div className="App"/* O atributo class passa a ser classname */>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
