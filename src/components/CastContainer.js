import React from "react";
import { Card, Icon, img } from "semantic-ui-react";

const src =
  "https://encrypted-tbn0.gstatic.com/imgs?q=tbn%3AANd9GcSs9LnbQHIpqntBmtLJYT5DcUDQxnT42fHs6lwlQOb0XsFDOlV8&usqp=CAU";
let colors = [
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
];

const randomColor = colors[Math.floor(Math.random() * colors.length)];
const renderCasts = (props) => {
  return props.casts.map((cast, key) => (
    <Card color={randomColor} key={cast.id}>
      <img src={cast.image_url} />
      <Card.Content>
        <Card.Header content={"Jake Smithhhhh"} />
        <Card.Meta content={"Music"} />
        <Card.Description content={cast.description} />
      </Card.Content>
    </Card>
  ));
};

const CastContainer = (props) => (
  <div style={{ position: "relative", top: "100px" }}>
    <Card.Group itemsPerRow={4}>{renderCasts(props)}</Card.Group>
  </div>
);

export default CastContainer;
