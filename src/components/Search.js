import _ from "lodash";
import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";

const source = _.times(5, () => ({
  title: "a",
  description: "dk",
  image: "dkt",
  price: "f",
}));

const initialState = {
  isLoading: false,
  results: [],
  value: "",
  categories: "",
  chosenCat: "Latest Casts",
};

export default class SearchExampleStandard extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      });
    }, 300);
  };

  render() {
    // console.log(source);
    const { isLoading, value, results } = this.state;

    return (
      <div>
        <div style={{ height: "10vh" }}>
          <p
            style={{
              color: "blue",
              display: "block",
              height: "50px",
              width: "94%",
              background: "transparent url(images/logo.jpg) no-repeat 0 0",
              textAlign: "center",
              fontFamily: "dimensions",
              fontSize: "82px",
              letterSpacing: "10px",
            }}
          >
            {this.state.chosenCat}
          </p>
        </div>
        <Grid>
          <Grid.Column width={"10"} heigh={"10"}>
            <Search
              style={{ position: "relative", left: "67.5%", top: "150%" }}
              input={{ icon: "search", iconPosition: "left" }}
              loading={isLoading}
              placeholder="     search by cast tag"
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true,
              })}
              results={results}
              value={value}
              {...this.props}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
