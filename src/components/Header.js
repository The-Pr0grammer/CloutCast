import React, { Component } from "react";
import { Button, Segment } from "semantic-ui-react";

class Header extends Component {
  render() {
    return (
      <header>
        <Segment style={{ height: "70px" }} inverted>
          <h3 style={{ color: "blue", fontFamily: "impact" }}>CloutCast</h3>
          <Button
            inverted
            color="blue"
            style={{ position: "absolute", left: "30%", top: "20%" }}
          >
            Profile
          </Button>
          <Button
            inverted
            color="blue"
            style={{ position: "absolute", left: "40%", top: "20%" }}
          >
            Explore
          </Button>
          <Button
            inverted
            color="blue"
            style={{ position: "absolute", left: "50.5%", top: "20%" }}
          >
            Saved
          </Button>
          <Button
            inverted
            color="green"
            style={{ position: "absolute", left: "60%", top: "20%" }}
          >
            Cast
          </Button>
        </Segment>
      </header>
    );
  }
}

export default Header;
