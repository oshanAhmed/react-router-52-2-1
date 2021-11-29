import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Post from "./Post/Post";

const Posts = () => {
  const [posts, setPost] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      <h2>Post: {posts.length}</h2>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
