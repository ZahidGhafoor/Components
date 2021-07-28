import React, { useEffect } from "react";
import { useState } from "react";

const Api = () => {
  const [posts, setpost] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setpost(resp))
      .catch((error) => console.log("error"));
  }, []);

  return (
    <>
      <h1>This is react api call</h1>
      {posts.map((post) => (
        <div>
          <p>{`${post.id} || ${post.title}`}</p>
        </div>
      ))}
    </>
  );
};

export default Api;
