import { useState, type ReactNode } from "react";
import HomeComp from "./comp-home";
import VenueComp from "./comp-venue";
import AddonsComp from "./comp-addons";
import MealsComp from "./comp-meals";
import "./comp-navbar.css";

type Sections = {
  text: string;
  isSelected: boolean;
};

function NavBar() {
  const [sectionList, setSections] = useState<Sections[]>([
    {
      text: "Home",
      isSelected: true,
    },
    {
      text: "Venue",
      isSelected: false,
    },
    {
      text: "Add-ons",
      isSelected: false,
    },
    {
      text: "Meals",
      isSelected: false,
    },
  ]);

  const displaySections = (list: Sections, index: number) => {
    return (
      <li key={index} className={list.isSelected ? "selected" : ""}>
        <a href={"#" + list.text} onClick={() => toggleSelected(index)}>
          {list.text}
        </a>
      </li>
    );
  };

  const toggleSelected = (index: number) => {
    setSections(
      sectionList.map((section, i) =>
        i === index
          ? { ...section, isSelected: true }
          : { ...section, isSelected: false }
      )
    );
  };

  const displayContents = (section: Sections, index: number) => {
    if (index === 0 && section.isSelected) {
      return <HomeComp />;
    } else if (index === 1 && section.isSelected) {
      return <VenueComp />;
    } else if (index === 2 && section.isSelected) {
      return <AddonsComp />;
    } else if (index === 3 && section.isSelected) {
      return <MealsComp />;
    }
  };

  return (
    <>
      <div className="nav-container">
        <h2 className="title">C.E.P.</h2>

        <ul className="nav-list">
          {sectionList.map((value, i) => displaySections(value, i))}
        </ul>

        <button id="show-details">Show Details</button>
      </div>
      <div className="main">
        {sectionList.map((value, i) => displayContents(value, i))}
      </div>
    </>
  );
}

export default NavBar;
