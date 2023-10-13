import Sidebar from "./Sidebar";
import Slider from "./Slider";

const Form = () => {

  return (
    <div id="form">
      <Slider
        title="Form"
        size="slider-small"
      />
      <div className="center">
        <div id="content">
          {/* ***  */}
        </div>

        <Sidebar
        />

      </div>
    </div>

  );
}

export default Form;
