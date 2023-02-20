import React from "react";
import classes from "./Results.module.css";

const Results = () => {
  return (
    <div className={classes.result_container}>
      <div className={classes.result}>Your Result</div>
      <div className={classes.score}>
        <div className={classes.circle}>
          <span>76</span>
          <p>of 100</p>
        </div>
      </div>
      <div className={classes.grate}>Great</div>
      <div className={classes.description}>
        You scored higher then 65% of the people who have taken these tasts.
      </div>
    </div>
  );
};

export default Results;
