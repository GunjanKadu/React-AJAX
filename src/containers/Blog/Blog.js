import React, { Component } from "react";
import "./Blog.css";
import Posts from "../Posts/posts";
import Newpost from "../NewPost/NewPost";
import { Route, Link, Switch } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

class Blog extends Component {
  render() {
    console.log("Blog Component");
    console.log(this.props);
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
        <Switch>
          <Route path="/" component={Posts} />
          <Route path="/new-post" component={Newpost} />
          {/* <Route path="/FullPost/:postId" component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
