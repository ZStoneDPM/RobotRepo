import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }))
      // .then((robots) => console.log(this.state.robots))
      .catch((error) => console.log("Cannot connect to fetch url!"));
  }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Robot Rolodex</h1>
        <SearchBox
          placeholder="search robots.."
          handleChange={this.handleChange}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
