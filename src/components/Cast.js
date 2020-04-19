import React from "react";
import { Card } from "semantic-ui-react";

const src = "https://react.semantic-ui.com/images/wireframe/white-image.png";

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
const Cast = (props) => (
  <Card color={randomColor}>
    <img src={props.cast.image_url} />
    <Card.Content>
      <Card.Header content={"Jake Smithhhhh"} />
      <Card.Meta content={"Music"} />
      <Card.Description content={props.cast.description} />
    </Card.Content>
  </Card>
);

export default Cast;
