import React, { Component } from "react";
import "./Blog.css";
import Post from "../Posts/posts";
import Newpost from "../NewPost/NewPost";
import { Route } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Post} />
        <Route path="/new-post" component={Newpost} />
      </div>
    );
  }
}

export default Blog;
