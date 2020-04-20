import React, { Component } from "react";
import { Container, Header, Search } from "semantic-ui-react";

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      chosenCat: "Latest Cast",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `http://localhost:3000/casts`;
    fetch(url)
      .then((response) => response.json())
      .then((casts) => {
        const searchCasts = casts.filter((cast) =>
          cast.description
            .toUpperCase()
            .includes(this.state.query.toUpperCase())
        );
        this.props.handleSearch(searchCasts);
      });
  }

  render() {
    return (
      <div style={{ position: "relative", left: "27%", width: "70vh" }}>
        <Container text>
          <p className="chosen-cat">{this.state.chosenCat}</p>
          <form
            style={{ height: "1vh", psition: "absolute" }}
            onSubmit={this.handleSubmit}
          >
            <Search
              className="search-box"
              onSearchChange={this.handleChange}
              type="text"
              value={this.state.query}
              size="big"
              placeholder="search by cast tags"
            />
            <input
              type="submit"
              value="Submit"
              style={{ display: "none" }}
              onSubmit={this.handleSubmit}
            />
          </form>
        </Container>
      </div>
    );
  }
}

export default SearchBox;
