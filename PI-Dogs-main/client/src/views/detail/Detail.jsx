import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getDetail, cleanState } from "../../redux/actions";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(cleanState("details"));
    };
  }, [id]);

  return (
    <div>
      <NavLink to="/home" className={style.navlink}>
        <div className={style.arrow}>
          <span>← </span>
        </div>
      </NavLink>
      <div>
        <img src={details?.image} alt={`imagen de ${details?.name}`} />
      </div>

      <div>
        <h2>Name: {details?.name}</h2>
      </div>

      <div>
        <h3>height: {details?.height}</h3>
      </div>

      <div>
        <h3>Weight: {details?.weight}</h3>
      </div>

      <div>
        <h3>Life: {details?.life}</h3>
      </div>

      <div>
        <h3>
          Temperaments:{" "}
          {details?.Temperaments?.map((i) => i.name).join(", ") ??
            details.temperament}
        </h3>
      </div>
    </div>
  );
};

export default Detail;
