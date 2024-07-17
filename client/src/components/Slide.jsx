import "../styles/Slide.scss"
import b1 from "../Files/b1.mp4"

const Slide = () => {
  return (
    <div className="slide">
    <div className="overlay" ></div>
      <video src={b1} autoPlay loop muted />
      <div className="content">
        <h1>
           Welcome Home! Anywhere you roam <br /> Stay in the moment. Make your
           memories
        </h1>
      </div>
    </div>
  );
};

export default Slide;
