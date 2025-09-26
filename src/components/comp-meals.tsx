import "./comp-meals.css";
import ItemCard from "./card/item-card";
import Breakfast from "../assets/images/meals/breakfast.png";
import Lunch from "../assets/images/meals/lunch.png";
import HighTea from "../assets/images/meals/high_tea.png";
import Dinner from "../assets/images/meals/dinner.png";

function VenueComp() {
  return (
    <div className="content-container">
      <h1 className="title" id="h1_meals">
        Meal <br /> Selection
      </h1>

      <div className="item-container">
        <ItemCard
          image={Breakfast}
          title="Breakfast"
          price={50}
          withCapacity={false}
        />
        <ItemCard
          image={Lunch}
          title="Lunch"
          price={65}
          withCapacity={false}
        />
        <ItemCard
          image={HighTea}
          title="High Tea"
          price={25}
          withCapacity={false}
        />
        <ItemCard
          image={Dinner}
          title="Dinner"
          price={70}
          withCapacity={false}
        />
      </div>
    </div>
  );
}

export default VenueComp;
