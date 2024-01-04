import { Link } from "react-router-dom";
import style from "./landing.module.css";

const Landing = () => {
  return (
    <div>
      <h1 className={style.title} >Dog Landing Páge </h1>
      <button className={style.btn} >
        <Link to="/home">Start Tour</Link>
      </button>
    </div>
  )
};

export default Landing;

