import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Api = () => {
  const [posts, setpost] = useState([]);

  useEffect(() => {
    const getData = async ()=>{
        try {
            const url = "https://jsonplaceholder.typicode.com/posts";
            const response = await axios.get(url);
            console.log(response)
            setpost(response.data)
        } catch (error) {
            console.log(error)
        }
      }
      getData();
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
