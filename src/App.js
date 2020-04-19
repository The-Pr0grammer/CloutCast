import React, { Component } from "react";
import Header from "./components/Header";
import CastContainer from "./components/CastContainer";
import CastForm from "./components/CastForm";
import Search from "./components/Search";
import { Message } from "semantic-ui-react";
import ScrollToTop from "./components/ScrollToTop.js";
class App extends Component {
  state = {
    casts: [],
    categories: [],
    formToggle: false,
    formSuccess: true,
    successTimer: 0,
  };

  async componentDidMount() {
    const castsRes = await fetch("http://localhost:3000/casts");
    const castsData = await castsRes.json();
    const categoriesRes = await fetch("http://localhost:3000/categories");
    const categoriesData = await categoriesRes.json();
    this.setState({ casts: castsData, categories: categoriesData });
  }

  handleAdd = (newCast) => {
    this.setState({ casts: [...this.state.casts, newCast] });
  };

  castFormToggle = () => {
    return this.setState({ formToggle: !this.state.formToggle });
  };

  clearForm = () => {
    this.setState({ formToggle: false, formSuccess: true });
    this.successTimer();
  };

  successTimer = () => {
    var timer = setInterval(() => {
      this.setState({ successTimer: this.state.successTimer + 1 });

      {
        if (this.state.successTimer > 60) {
          this.setState({ successTimer: 0 });
          clearInterval(timer);
        }
      }
    }, 100);
  };

  render() {
    console.log(this.state.successTimer);
    return (
      <div
        style={{
          background: "black",
          position: "relative",
          maxWidth: "100vw",
          height: "300vh",
        }}
      >
        <div className="upper-site-center">
          <Header handleToggle={this.castFormToggle} />
          {this.state.successTimer > 0 && (
            <div
              className="ui compact message"
              style={{ position: "relative", left: "37.8%" }}
            >
              <Message
                visible
                success
                header="Your Cast was Posted"
                content="Head over to the explore page to check it out"
              />
            </div>
          )}
          {this.state.formToggle && (
            <CastForm
              categories={this.state.categories}
              handleAdd={this.handleAdd}
              clearForm={this.clearForm}
            />
          )}
        </div>
        <Search categories={this.state.categories} />
        <CastContainer casts={this.state.casts} />
        <ScrollToTop />
      </div>
    );
  }
}

export default App;
