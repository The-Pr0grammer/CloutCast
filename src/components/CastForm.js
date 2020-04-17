import React from "react";
import {
  Button,
  Form,
  Segment,
  TextArea,
  Message,
  Dropdown,
} from "semantic-ui-react";

export default class CastForm extends React.Component {
  state = {
    category: "",
    imageUrl: "",
    description: "",
    tags: "",
  };

  mapCats = () => {
    return this.props.categories.map((cat) => (
      <Dropdown.Item
        key={cat.id}
        text={cat.name}
        value={cat.name}
        onClick={this.handleDropdownChange}
      />
    ));
  };

  handleChange = (event) => {
    return this.setState({ [event.target.name]: event.target.value });
  };

  handleDropdownChange = (event, data) => {
    return this.setState({ category: data.text });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let catId;
    let cat = this.props.categories.find(
      (cat) => cat.name === this.state.category
    );

    catId = cat && cat.id;

    let data = {};
    console.log("test");
    fetch("http://localhost:3000/casts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        category_id: catId,
        image_url: this.state.imageUrl,
        description: this.state.description,
      }),
    })
      .then((res) => res.json())
      .then(console.log("fetch comp"));
  };

  render() {
    return (
      <div>
        <Segment
          inverted
          style={{
            height: "30vh",
            width: "40vw",
            display: "fixed",
            left: "26.9%",
          }}
        >
          <div className="cat-div">
            <Dropdown
              text={this.state.category}
              selection
              options={this.mapCats()}
              name="category"
              value={this.state.category}
              style={{
                height: "20px",
                width: "19vw",
                display: "relative",
              }}
            />
          </div>

          <Form
            inverted
            style={{ width: "40vw", height: "45vh" }}
            onSubmit={this.handleSubmit}
          >
            <Form.Group widths="equal">
              <div className="yo">
                <Form.Input
                  fluid
                  label="Tags"
                  width={11}
                  placeholder="Seperate your tags with commas"
                  name="tags"
                  value={this.state.tags}
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
              <Form.Input
                fluid
                label="Image URL"
                width={7}
                placeholder="Enter a URL. Gifs are supported"
                name="imageUrl"
                value={this.state.imageUrl}
                onChange={(event) => this.handleChange(event)}
              />
              <Form.Field
                id="cast-description"
                control={TextArea}
                label="Description"
                width={7}
                placeholder="What are you promoting?"
                style={{
                  position: "absolute",
                  bottom: "41.8vh",
                  width: "411px",
                }}
                name="description"
                value={this.statedescription}
                onChange={(event) => this.handleChange(event)}
              />
            </Form.Group>
            <Form.Checkbox
              label="I agree to the Terms and Conditions"
              style={{ top: "10px", left: "427px" }}
            />
            <Message
              success
              header="Your Cast was Posted"
              content="Head over to the explore page to check it out"
            />
            <Button
              type="submit"
              style={{ position: "relative", bottom: "30px", float: "right" }}
            >
              Submit
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}
