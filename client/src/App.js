import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import MyComponent from './components/MyComponent';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section className="components">
          <MyComponent />
        </section>
        <Movies />
      </header>
    </div>
  );
}

export default App;
