import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <div className="buttons">
      <button
        type="button"
        className="btn-lg"
        value="sortButton"
        onClick={event => {
          props.updateFilter(event.target.value);
        }}
      >
        Sort by Name
      </button>

      <button
        type="button"
        value="Gryffindor"
        onClick={event => {
          props.updateFilter(event.target.value);
        }}
        className="btn-lg"
      >
        Show All Gryffindors
      </button>
      <button
        type="button"
        value="Slytherin"
        onClick={event => {
          props.updateFilter(event.target.value);
        }}
        className="btn-lg"
      >
        Show All Slytherins
      </button>
      <button
        type="button"
        value="Hufflepuff"
        onClick={event => {
          props.updateFilter(event.target.value);
        }}
        className="btn-lg"
      >
        Show All Hufflepuffs
      </button>
      <button
        type="button"
        value="Ravenclaw"
        onClick={event => {
          props.updateFilter(event.target.value);
        }}
        className="btn-lg"
      >
        Show All Ravenclaws
      </button>
      <button
        type="button"
        value=""
        onClick={event => {
          props.updateFilter(event.target.value);
        }}
        className="btn-lg"
      >
        Show All
      </button>
    </div>
  );
}

export default NavBar;
