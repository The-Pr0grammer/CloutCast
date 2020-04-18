import React, { Component } from "react";
import { Button, Segment } from "semantic-ui-react";

class Header extends Component {
  render() {
    return (
      <div>
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
              onClick={this.props.handleToggle}
            >
              Cast
            </Button>
          </Segment>
        </header>
      </div>
    );
  }
}

export default Header;
