import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getTemperaments } from "../../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const allTemp = useSelector((state) => state.temperament);

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  const [form, setForm] = useState({
    name: "",
    heightMax: "",
    heightMin: "",
    weightMax: "",
    weightMin: "",
    life: "",
    temperament: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    height: "",
    weight: "",
    life: "",
    temperament: "",
  });

  const [successfulcreation, setSuccessfulcreation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(form.name.length > 5){
      alert('El name debe ser menor a 5')
    }
    if (
      (form["weightMin"] !== "" &&
        form["weightMax"] !== "" &&
        parseInt(form["weightMin"]) > parseInt(form["weightMax"])) ||
      (form["heightMin"] !== "" &&
        form["heightMax"] !== "" &&
        parseInt(form["heightMin"]) > parseInt(form["heightMax"]))
    ) {
      // Actualiza el estado de errores
      setErrors({
        ...errors,
        weight: "Los máximos no pueden ser menores que los mínimos.",
      });
      return;
    } else {
      // Restablece el error
      setErrors({
        ...errors,
        weight: "",
      });
    }

    const formattedDog = {
      name: form.name,
      weight: `${form.weightMin} - ${form.weightMax}`,
      height: `${form.heightMin} - ${form.heightMax}`,
      life: form.life,
      temperament: form.temperament.map((temp) => temp.trim()),
    };

    axios
      .post("http://localhost:3001/dogs", formattedDog)
      .then((response) => {
        console.log("Form creado con éxito:", response.data);
        setSuccessfulcreation(true);
        setForm({
          name: "",
          life: "",
          weightMax: "",
          weightMin: "",
          heightMax: "",
          heightMin: "",
          temperament: [],
        });
      })
      .catch((error) => {
        console.error("Error al crear el perro:", error);
      });
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    let value;

    if (event.target.type === "select-multiple") {
      // Manejar el cambio en el campo "temperament" cuando se seleccionan varios temperamentos
      value = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      );
    } else {
      value = event.target.value;
    }

    setForm({
      ...form,
      [property]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Muestra errores de peso */}
        {errors.weight && <p className="error-message">{errors.weight}</p>}

        <div>
          <label>Name: </label>
          <input
            type="text"
            value={form.name}
            onChange={changeHandler}
            name="name"
            key="id"
          />
        </div>

        <div>
          <label>HeightMax: </label>
          <input
            type="number"
            placeholder="Max"
            value={form.heightMax}
            onChange={changeHandler}
            name="heightMax"
          />
        </div>

        <div>
          <label>HeightMin: </label>
          <input
            type="number"
            placeholder="Min"
            value={form.heightMin}
            onChange={changeHandler}
            name="heightMin"
          />
        </div>

        <div>
          <label>WeightMax: </label>
          <input
            type="number"
            placeholder="Max"
            value={form.weightMax}
            onChange={changeHandler}
            name="weightMax"
          />
        </div>

        <div>
          <label>WeightMin: </label>
          <input
            type="number"
            placeholder="Min"
            value={form.weightMin}
            onChange={changeHandler}
            name="weightMin"
          />
        </div>

        <div>
          <label>Life: </label>
          <input
            type="number"
            value={form.life}
            onChange={changeHandler}
            name="life"
          />
        </div>

        <div>
          <label>Temperaments: </label>
          <select
            type="text"
            name="temperament"
            value={form.temperament}
            onChange={changeHandler}
            multiple
            required
          >
            {allTemp?.map((temp, index) => (
              <option value={temp} key={index}>
                {temp}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {successfulcreation && <div> Perro creado con éxito </div>}
    </div>
  );
};

export default Form;
