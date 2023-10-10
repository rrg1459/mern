const Slider = ({ title, btn }) => {

  return (
    <div id="slider" className="slider-big">
      <h1>{title}</h1>
      <a href="/" className="btn-white">{btn}</a>
    </div>
  );
}
export default Slider;
