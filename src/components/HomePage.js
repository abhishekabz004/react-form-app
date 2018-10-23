import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SimpleForm from "./SimpleForm";
import SimpleTable from "./SimpleTable";

class HomePage extends Component {
  constructor() {
    super();
    var testObject = [
      { userName: "Rach", shopName: "Rach Stores", status: "open" },
      { userName: "Vinay", shopName: "Vinay Stores", status: "closed" },
      {
        userName: "Joe",
        shopName: "Rach Stores",
        status: "currently being transitioned"
      }
    ];

    localStorage.setItem("testObject", JSON.stringify(testObject));

    this.state = {
      list: JSON.parse(localStorage.getItem("testObject"))
    };
  }

  showResults() {
    console.log("submitted");
    this.setState({
      list: JSON.parse(localStorage.getItem("testObject"))
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <SimpleTable list={this.state.list} />
        </div>
        <div className="col-md-4">
          <SimpleForm onSubmit={() => this.showResults()} />
        </div>
      </div>
    );
  }
}

export default HomePage;
