import './assets/css/App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TestSection from './components/TestSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />

      <div className="center">

        <TestSection />

        <Sidebar />
        <div className="clearfix"></div>

      </div>

      <Footer />

    </div>
  );
}

export default App;
