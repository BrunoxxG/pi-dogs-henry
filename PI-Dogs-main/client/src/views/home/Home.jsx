import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../../components/cards/Cards";
import {
  getAllDogs,
  filterApiBdd,
  ordenAlph,
  orderweight,
} from "../../redux/actions";
import Paginate from "../../components/paginate/Paginate";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDogs());
  }, []);

  const allDogs = useSelector((state) => state.allDogs);

  //PAGINATED
  const [actualPage, setActualpage] = useState(1);
  const [DogsPage, setDogsPage] = useState(8);
  const indiceultimodog = actualPage * DogsPage;
  const indiceprimerdog = indiceultimodog - DogsPage;
  const paginate = allDogs.slice(indiceprimerdog, indiceultimodog);

  const paginado = (pagenumber) => {
    setActualpage(pagenumber);
  };
  const prev = () => (actualPage > 1 ? setActualpage(actualPage - 1) : "");
  const next = (e) =>
    actualPage < e.target.value
      ? setActualpage(actualPage + 1)
      : alert("No more page");

  const clicSelect = (event) => {
    const valor = event.target.value;
    setActualpage(1);
    dispatch(filterApiBdd(valor));
  };

  const handleSelect = (e) => {
    e.preventDefault();
    dispatch(ordenAlph(e.target.value));
  };
  const order = (e) => {
    e.preventDefault();
    dispatch(orderweight(e.target.value));
  };

  return (
    <div>
      <img/>
      <div>
        <select onChange={clicSelect}>
          <option value={""}>null</option>
          <option value={"database"}>Base de datos</option>
          <option value={"apidog"}>Api dog</option>
        </select>
        <select onChange={handleSelect}>
          <option>Ordenamiento Alfabetico</option>
          <option value={"A-Z"}>A-Z</option>
          <option value={"Z-A"}>Z-A</option>
        </select>
        <select name="" id="" onChange={order}>
          <option value="Default">Default</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>
      <Cards allDogs={paginate} />
      <Paginate
        DogsPage={DogsPage} 
        allDogs={allDogs.length} 
        paginado={paginado} //setea el estado
        prev={prev}
        next={next}
        currentpage={actualPage}
      />
    </div>
  );
};

export default Home;
