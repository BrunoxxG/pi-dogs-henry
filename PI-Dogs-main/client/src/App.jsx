import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Landing from "./views/landing/Landing";
import Detail from "./views/detail/detail";
import Form from "./views/form/Form";
import NavBar from "./components/navBar/NavBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTemperaments } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
