import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function Card(props) {
  return (
    <div className="body">
      <h1 className="heading">{props.head}</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.img} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.tele}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tele="123-456-7890"
      email="Beyonce@gmail.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tele="+987 654 3210"
      email="jack@nowhere.com"
    />
    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tele="+918 372 5740"
      email="gmail@chucknorris.com"
    />
  </div>,
  document.getElementById("root")
);

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
