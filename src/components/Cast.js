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
export default class Cast extends React.Component {
  state = {
    user: "",
    category: "",
  };

  componentDidMount() {
    fetch(`http://localhost:3000/casts/${this.props.cast.id}`)
      .then((resp) => resp.json())
      .then((cast) => {
        const meta = cast.included.map((attr) => attr.attributes.name);
        return this.setState({ user: meta[1], category: meta[0] });
      });
  }

  render() {
    return (
      <Card color={randomColor}>
        <img src={this.props.cast.image_url} />
        <Card.Content>
          <Card.Header content={this.state.user + " Smith"} />
          <Card.Meta content={this.state.category} />
          <Card.Description content={this.props.cast.description} />
        </Card.Content>
      </Card>
    );
  }
}
