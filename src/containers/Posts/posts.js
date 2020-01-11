import React, { Component } from "react";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import "./posts.css";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null
  };
  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Gunjan"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        console.log(error);
      });
  }

  postSelectHandler = id => {
    // this.setState({ selectedPostId: id });
    this.props.history.push({ pathname: "/FullPost/" + id });
  };

  render() {
    let post = <p style={{ textAlign: "Center" }}>Something Went Wrong</p>;

    if (!this.state.error) {
      post = this.state.posts.map(post => {
        return (
          // <Link to={"/FullPost/" + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            click={() => this.postSelectHandler(post.id)}
          />
          // </Link>
        );
      });
    }
    return <section className="Posts">{post}</section>;
  }
}

export default Posts;
