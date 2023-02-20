import React from "react";
import Attribute from "./Attribute";
import reactionImg from "../assets/images/icon-reaction.svg";
import memoryImg from "../assets/images/icon-memory.svg";
import verbalImg from "../assets/images/icon-verbal.svg";
import visualImg from "../assets/images/icon-visual.svg";
import classes from "./Summary.module.css";

const Summary = () => {
  return (
    <div className={classes.summary_container}>
      <h1>Summary</h1>
      <div className={classes.result_container}>
        <Attribute
          styles={classes.reaction}
          title="Reaction"
          image={reactionImg}
          score={80}
        />
        <Attribute
          styles={classes.memory}
          title="Memory"
          image={memoryImg}
          score={92}
        />
        <Attribute
          styles={classes.verbal}
          title="Verbal"
          image={verbalImg}
          score={61}
        />
        <Attribute
          styles={classes.visual}
          title="Visual"
          image={visualImg}
          score={73}
        />
      </div>
      <div className={classes.btn_container}>
        <div className={classes.btn}>
          <p>Continue</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
