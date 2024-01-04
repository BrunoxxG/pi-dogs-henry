import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const search = () => {
    if (!name) return alert("ingresa un nombre");
    dispatch(getDogsByName(name));
    setName("");
  };

  if (location.pathname === "/") {
    return null; // No mostrar el Navbar en la página de inicio
  }
  return (
    <div className={style.container}>
      <Link to="/">go out</Link>
      <Link to="/home" className={style.links}>
        Home
      </Link>
      <Link to="/form" className={style.links}>
        Create
      </Link>
      <input type="text" onChange={handleChange} value={name} />
      <button onClick={search}>🔍</button>
    </div>
  );
};

export default NavBar;
