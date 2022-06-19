import classes from "./SingleMeetUp.module.css";
import React from "react";

const SingleMeetComponent = (props) => {
  return (
    <section className={classes.details}>
      <img src={props.src} alt={props.alt} />
      <h1>{props.title}</h1>
      <address>{props.address} </address>
      <p>{props.description}</p>
    </section>
  );
};

export default SingleMeetComponent;
