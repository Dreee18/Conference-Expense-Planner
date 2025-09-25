import { useState, type ReactNode } from "react";
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
      sectionList.map(
        (section, i) =>
          i === index
            ? { ...section, isSelected: true }
            : { ...section, isSelected: false }
      )
    );
  };

  return (
    <>
      <div className="container">
        <h2 className="title">C.E.P.</h2>

        <ul className="nav-list">
          {sectionList.map((value, i) => displaySections(value, i))}
        </ul>

        <button id="show-details">Show Details</button>
      </div>
    </>
  );
}

export default NavBar;
