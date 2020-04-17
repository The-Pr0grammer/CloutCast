import React, { Component } from "react";
import Header from "./components/Header";
import CastContainer from "./components/CastContainer";
import CastForm from "./components/CastForm";
import Search from "./components/Search";

class App extends Component {
  state = {
    casts: [],
    categories: [],
  };

  async componentDidMount() {
    const castsRes = await fetch("http://localhost:3000/casts");
    const castsData = await castsRes.json();
    const categoriesRes = await fetch("http://localhost:3000/categories");
    const categoriesData = await categoriesRes.json();
    this.setState({ casts: castsData, categories: categoriesData });
  }

  render() {
    return (
      <div
        style={{
          background: "black",
          position: "relative",
          maxWidth: "100vw",
          height: "300vh",
        }}
      >
        <Header />
        <CastForm categories={this.state.categories} />
        <Search categories={this.state.categories} />

        <CastContainer casts={this.state.casts} />
      </div>
    );
  }
}

export default App;
