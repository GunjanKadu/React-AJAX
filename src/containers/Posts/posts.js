import React, { Component } from "react";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import "./posts.css";

class Posts extends Component {
  state = {
    posts: []
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
    this.setState({ selectedPostId: id });
  };

  render() {
    let post = <p style={{ textAlign: "Center" }}>Something Went Wrong</p>;

    if (!this.state.error) {
      post = this.state.posts.map(post => {
        return (
          <Post
            // passing router props to components in lower heierarchy
            //match={this.props.match}
            key={post.id}
            title={post.title}
            author={post.author}
            click={() => this.postSelectHandler(post.id)}
          />
        );
      });
    }
    return <section className="Posts">{post}</section>;
  }
}

export default Posts;
