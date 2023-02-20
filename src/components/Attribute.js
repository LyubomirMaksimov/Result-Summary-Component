import React from "react";
import classes from "./Attribute.module.css";

const Attribute = (props) => {
  return (
    <div className={`${props.styles} ${classes.container} `}>
      <div className={classes.left}>
        <img src={props.image} alt={props.title} />
        <p>{props.title}</p>
      </div>
      <div className={classes.right}>
        <p>
          <span>{props.score}</span> / 100
        </p>
      </div>
    </div>
  );
};

export default Attribute;
