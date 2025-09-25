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
          capacity={0}
          price={200}
          isAddons={false}
        />
        <ItemCard
          image={Speaker}
          title="Speakers"
          capacity={0}
          price={35}
          isAddons={false}
        />
        <ItemCard
          image={Microphones}
          title="Microphones"
          capacity={0}
          price={45}
          isAddons={false}
        />
        <ItemCard
          image={Whiteboard}
          title="Whiteboards"
          capacity={0}
          price={80}
          isAddons={false}
        />
        <ItemCard
          image={Signage}
          title="Signages"
          capacity={0}
          price={80}
          isAddons={false}
        />
      </div>
    </div>
    );
}

export default AddonsComp