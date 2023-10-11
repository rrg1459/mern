import './assets/css/App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Router from './Router';

function App() {

  const btnString = "to blog"

  return ( 
    <div className="App">
      <Header />

      <Slider
        title="Welcome to MERN app"
        btn={btnString}
      />

      <div className="center">

        <Router />

        <Sidebar />
        <div className="clearfix"></div>

      </div>

      <Footer />

    </div>
  );
}

export default App;
