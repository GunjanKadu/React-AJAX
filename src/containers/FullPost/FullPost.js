import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  componentDidUpdate() {
    if (this.props.selectedId) {
      if (
        !this.state.loadedPost ||
        this.props.selectedId !== this.state.loadedPost.id
      ) {
        axios.get("/posts/" + this.props.selectedId).then(response => {
          this.setState({ loadedPost: response.data });
          console.log(response);
        });
      }
    }
  }
  render() {
    let post = <p style={{ textAlign: "center" }}> Please select a Post! </p>;
    if (this.props.selectedId) {
      post = <p style={{ textAlign: "center" }}> ...Loading </p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1> {this.state.loadedPost.title} </h1>{" "}
          <p> {this.state.loadedPost.body} </p>{" "}
          <div className="Edit">
            <button className="Delete"> Delete </button>{" "}
          </div>{" "}
        </div>
      );
    }

    return post;
  }
}

export default FullPost;