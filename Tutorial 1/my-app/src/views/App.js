import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ButtonClick from './Example/ButtonClick';
import FormInput from './Example/FormInput';
import Show_Hide from './Example/Show_Hide';

const App = () => {
  return (
    <div className="App">
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
          Learn React Tutorial  
        </a>

        {/* <b><MyComponent/></b> */}
        <br></br>
        <ButtonClick/>

        <br></br>

        {/* <FormInput /> */}

        <Show_Hide />
      </header>
    </div>
  );
}

export default App;
