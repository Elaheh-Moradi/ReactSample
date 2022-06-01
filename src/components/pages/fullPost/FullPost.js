import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FullPost = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data));
  }, [id]);

  console.log(post);
  return <article>
      <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
      </div>
      <div>
          <Link to='/posts'>بازگشت</Link>
      </div>
  </article>;
};

export default FullPost;
