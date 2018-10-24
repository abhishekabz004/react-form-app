import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SimpleForm from "./SimpleForm";
import SimpleTable from "./SimpleTable";
import SearchBox from "./SearchBox";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOriginal: 1,
      list: JSON.parse(localStorage.getItem("testObject")),
      searchList: []
    };

    this.showResults = this.showResults.bind(this);
    this.findEntry = this.findEntry.bind(this);
  }

  showResults(e) {
    console.log("submitted");
    this.setState({
      showOriginal: 1,
      list: JSON.parse(localStorage.getItem("testObject")),
      searchList: JSON.parse(localStorage.getItem("searchResult"))
    });
    e.preventDefault();
  }
  findEntry(e) {
    console.log("submitted");
    this.setState((prevState) => ({
      showOriginal: 0,
      list: JSON.parse(localStorage.getItem("testObject")),
      searchList: prevState.searchList.concat(JSON.parse(localStorage.getItem("searchResult")))
    }));
    e.preventDefault();
   
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <SearchBox onSubmit={() => this.findEntry()} />
          {this.state.showOriginal ? 
            <SimpleTable list={this.state.list} />
           : 
            <SimpleTable list={this.state.searchList} />
          }
        </div>
        <div className="col-md-4">
          <SimpleForm onSubmit={() => this.showResults()} />
        </div>
      </div>
    );
  }
}

export default HomePage;
