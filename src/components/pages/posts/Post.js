import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((post) => setPosts(post.data));
  }, []);
  return (
    <Fragment>
    <article>
      <h2>پست ها به شرح زیر می باشد:</h2>
      {posts.slice(0,10).map((p) => (
        <ul>
          <li>
            <Link to={`/post/${p.id}`}>
            <h3>{p.title}</h3>
            </Link>
            <p>{p.body}</p>
          </li>
        </ul>
      ))}
    </article>
    </Fragment>
  );
};

export default Post;
