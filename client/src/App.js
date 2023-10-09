import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import MyComponent from './components/MyComponent';
import Movies from './components/Movies';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />

      <div className="center">
        <section id="content">
          <img src={logo} className="App-logo" alt="logo" />
          <section className="components">
            <MyComponent />
            <Movies />
          </section>
        </section>

        <Sidebar />
        <div className="clearfix"></div>

      </div> {/* END DIV CENTER */}

      <Footer />

    </div>
  );
}

export default App;
