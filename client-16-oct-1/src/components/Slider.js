const Slider = ({ title, btn, size }) => {

  return (
    <div id="slider" className={size}>
      <h1>{title}</h1>
      {btn &&
        <a href="/" className="btn-white">{btn}</a>
      }
    </div>
  );
}
export default Slider;
