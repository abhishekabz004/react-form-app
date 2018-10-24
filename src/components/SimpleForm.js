import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      shopName: "",
      status: ""
    };
  }
  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }
  updateList(key, value) {
    const list = JSON.parse(localStorage.getItem("testObject"));
    const newItem = {
      userName: this.state.userName,
      shopName: this.state.shopName,
      status: this.state.status
    };
    list.concat(newItem);
    console.log({ list });
    localStorage.setItem("testObject", JSON.stringify(list));
    alert((localStorage.getItem("testObject")))
    this.props.onSubmit();
  }
  render() {
    return (
      <div className="container">
        <form action="">
          <h3>Enter Client Details</h3>
          <div className="form-group">
            <label>NAME:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              name="name"
              value={this.state.userName}
              onChange={e => this.updateInput("userName", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>SHOP NAME:</label>
            <input
              type="text"
              className="form-control"
              id="shopName"
              placeholder="Shop Name"
              name="shopName"
              value={this.state.shopName}
              onChange={e => this.updateInput("shopName", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>STATUS:</label>
            <textarea
              name="txtMsg"
              className="form-control"
              placeholder="Your Message *"
              style={{ width: "100%", height: "150px" }}
              value={this.state.status}
              onChange={e => this.updateInput("status", e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={e => this.updateList()}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SimpleForm;
