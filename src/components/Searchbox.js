import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

class SearchBox extends Component {
  constructor(props) {
    super();
    this.state = {
      searchKey: ""
    };
  }

  updateInput(key, value) {
    // update react state
    //style={{    right: "50%", position: "absolute",      width: "200px",        height: "120px"  }}
    this.setState({ [key]: value });
  }

  sendKey() {
    const key = JSON.stringify(this.state.searchKey);
    const list = JSON.parse(localStorage.getItem("testObject"));
    let flag = false;
    for (var entry in list) {
      const val = JSON.stringify(list[entry].userName);
      if (val === key) {
        flag = true;
        localStorage.setItem("searchResult", JSON.stringify(list[entry]));
      }
    }
    if (!flag) {
      let val = [];
      localStorage.setItem("searchResult", JSON.stringify(val));
    }
    this.props.onSubmit();
  }
  render() {
    return (
      <form action="">
        <div className="{input-group} {stylish-input-group}">
          <div className="row">
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={e => this.updateInput("searchKey", e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <span className="input-group-addon">
                <button type="submit" onClick={e => this.sendKey()}>
                  <span className="glyphicon glyphicon-search">>></span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBox;
