import React, { Component } from "react";
import axios from "axios";

export default class Ajax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ajax: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      // handle success
      console.log(response.data);
      this.setState({ ajax: response.data.slice(0,10) }); // Set the state to the entire array of data
    });
  }

  render() {
    return (
      <div>
        <center>
          <h3>Ajax Api</h3>
        </center>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.ajax.map((itm) => { // Removed "key" from the map function
              return (
                <tr key={itm.id}> {/* Add a unique "key" prop to the table row */}
                  <td>{itm.id}</td>
                  <td>{itm.title}</td>
                  <td>{itm.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
