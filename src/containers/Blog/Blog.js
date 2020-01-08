import React, { Component } from "react";
import "./Blog.css";
import Post from "../Posts/posts";
import Newpost from "../NewPost/NewPost";
import { Route, Link } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </Link>{" "}
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
