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
          capacity={0}
          price={50}
          isAddons={false}
        />
        <ItemCard
          image={Lunch}
          title="Lunch"
          capacity={0}
          price={65}
          isAddons={false}
        />
        <ItemCard
          image={HighTea}
          title="High Tea"
          capacity={0}
          price={25}
          isAddons={false}
        />
        <ItemCard
          image={Dinner}
          title="Dinner"
          capacity={0}
          price={70}
          isAddons={false}
        />
      </div>
    </div>
  );
}

export default VenueComp;
