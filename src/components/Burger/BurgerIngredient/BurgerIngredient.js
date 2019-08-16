import React from "react";
import "./burgerIngredient.css";

const burgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className="bread-bottom" />;
      break;
    case "bread-top":
      ingredient = (
        <div className="bread-top">
          <div className="sesame1" />
          <div className="sesame2" />
        </div>
      );
      break;
    case "meat":
      ingredient = <div className="meat" />;
      break;
    case "lettuce":
      ingredient = <div className="lettuce" />;
      break;
    case "cheese":
      ingredient = <div className="cheese" />;
      break;
    case "bacon":
      ingredient = <div className="bacon" />;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

export default burgerIngredient;
