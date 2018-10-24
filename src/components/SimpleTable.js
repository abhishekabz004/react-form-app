import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class SimpleTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var list = this.props.list;
    const listString = JSON.stringify(list)
    var tableBody = null
    if (listString === "[]" || listString === ""){
      tableBody = null
    }
    else {
      list= [];
      tableBody = list.map(entry => (
        <tr key={entry.userName}>
          <th scope="row">{entry.userName}</th>
          <td>{entry.shopName}</td>
          <td>{entry.status}</td>
        </tr>
      ));}
    return (
      <div className="container">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    );
  }
}

export default SimpleTable;
