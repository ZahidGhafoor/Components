import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Axois = () => {
  const [posts, setpost] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.co/posts")
      .then((resp) =>  setpost(resp.data))
      .catch((error) => console.log(error.response));
  }, []);
  return (
    <>
      <h1>This is axois Api call</h1>

      {posts.map((post) => (
        <li>
         { ` ${post.id} || ${post.title}`}
        </li>
      ))}
    </>
  );
};

export default Axois;

