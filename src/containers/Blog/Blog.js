import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import axios from "axios";
class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
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
        this.setState({ error: true });
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
            key={post.id}
            title={post.title}
            author={post.author}
            click={() => this.postSelectHandler(post.id)}
          />
        );
      });
    }

    return (
      <div>
        <section className="Posts">{post}</section>{" "}
        <section>
          <FullPost selectedId={this.state.selectedPostId} />
        </section>{" "}
        <section>
          <NewPost />
        </section>{" "}
      </div>
    );
  }
}

export default Blog;
