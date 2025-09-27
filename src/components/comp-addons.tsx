import "./comp-addons.css";
import ItemCard from "./card/item-card";
import Projectors from "../assets/images/addons/projectors.png";
import Speaker from "../assets/images/addons/speakers.png";
import Microphones from "../assets/images/addons/microphone.png";
import Whiteboard from "../assets/images/addons/whiteboard.png";
import Signage from "../assets/images/addons/signage.png";

function AddonsComp() {
  return (
    <div className="content-container">
      <h1 className="title" id="h1_addons">
        Add-ons <br /> Selection
      </h1>

      <div className="item-container">
        <ItemCard
          image={Projectors}
          title="Projectors"
          price={200}
          withCapacity={false}
        />
        <ItemCard
          image={Speaker}
          title="Speakers"
          price={35}
          withCapacity={false}
        />
        <ItemCard
          image={Microphones}
          title="Microphones"
          price={45}
          withCapacity={false}
        />
        <ItemCard
          image={Whiteboard}
          title="Whiteboards"
          price={80}
          withCapacity={false}
        />
        <ItemCard
          image={Signage}
          title="Signages"
          price={80}
          withCapacity={false}
        />
      </div>
    </div>
  );
}

export default AddonsComp;
