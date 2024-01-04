import Card from "../card/Card";
import style from "./Cards.module.css";

const Cards = ({allDogs}) => {
  return (
    <div className={style.container} >
      {allDogs?.map((dog) => {
        return (
          <Card
          key={dog.id}
          id={dog.id}
          image={dog.image}
          name={dog.name}
          weight={dog.weight}
          temperament={dog.id.length > 5 ? dog.Temperaments?.map((i)=>i.name).join(", ") : dog.temperament}
        />);
      })}
    </div>
  );
};

export default Cards;
