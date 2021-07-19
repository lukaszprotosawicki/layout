import slider from "../img/slider.jpg";

function Slider() {
  return (
    <div className="slider">
      <img src={slider} alt="layout" />
      <ul className="position_slider">
        <span></span>
        <span></span>
        <span className="slider_color"></span>
        <span></span>
        <span></span>
      </ul>
      <span></span>
    </div>
  );
}

export default Slider;
