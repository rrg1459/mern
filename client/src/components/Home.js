import Sidebar from "./Sidebar";
import Slider from "./Slider";

const Home = () => {

  const btnString = "to blog"

  return (
    <div id="home">
      <Slider
        title="Welcome to MERN app"
        btn={btnString}
      />
      <div className="center">
        <div id="content">
          <h1 className="subheader">Last articles</h1>
        </div>

        <Sidebar />

      </div>
    </div>

  );
}

export default Home;
