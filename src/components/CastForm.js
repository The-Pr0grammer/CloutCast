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
      .then((resp) => resp.json())
      .then((resp) => this.props.handleAdd(resp));
  };

  render() {
    return (
      <div>
        <Segment
          inverted
          style={{
            height: "240px",
            width: "40vw",
            display: "fixed",
            left: "26.6%",
            padding: "30px 0px 0px 0px",
          }}
        >
          <div className="cat-div">
            <Form.Dropdown
              label="Categories"
              text={this.state.category}
              selection
              placeholder="Select a category"
              options={this.mapCats()}
              name="category"
              value={this.state.category}
              style={{
                height: "41px",
                width: "19vw",
                display: "relative",
              }}
            />
          </div>

          <Form
            inverted
            style={{ width: "40vw", height: "4vh" }}
            onSubmit={this.handleSubmit}
          >
            <Form.Group widths="equal">
              <div className="tags-input">
                <Form.Input
                  fluid
                  label="Tags"
                  width={8}
                  placeholder="Seperate your tags with commas"
                  name="tags"
                  value={this.state.tags}
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
              <div className="image-div">
                <Form.Input
                  fluid
                  label="Image URL"
                  width={7}
                  placeholder="Enter a URL. Gifs are supported"
                  name="imageUrl"
                  value={this.state.imageUrl}
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
              <div className="description-box">
                <label
                  style={{ position: "relative", right: "19.8%", bottom: "0.5%" }}
                >
                  Description
                </label>
                <Form.Field
                  style={{
                    position: "relative",
                    width: "18.8vw",
                    right: "50%",
                  }}
                  id="cast-description"
                  control={TextArea}
                  react-textarea-autosize
                  width={7}
                  placeholder="What are you promoting?"
                  name="description"
                  value={this.statedescription}
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
            </Form.Group>
            {/* <Form.Checkbox
              label="I agree to the Terms and Conditions"
              style={{ top: "12px", left: "467px" }}
            /> */}
            <Message
              success
              header="Your Cast was Posted"
              content="Head over to the explore page to check it out"
            />
            <Button
              type="submit"
              style={{ position: "relative", top: "69px", float: "right" }}
            >
              Submit
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}
