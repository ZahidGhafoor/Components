import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Axois = () => {
  const [posts, setpost] = useState([]);

  //   useEffect(() => {
  //     axios.get("https://jsonplaceholder.typicode.co/posts")
  //       .then((resp) =>  setpost(resp.data))
  //       .catch((error) => console.log(error.response));
  //   }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = "https://funds-map.herokuapp.com/api/v1/users/signup";
        const resp = await axios({url,method:"post",
            headers:{"Content-Type":"application/json"},
            data:{email:"izahid@gmail.com",userType:"INDIVIDUAL_CLIENT"}})
        console.log(resp);
        setpost(resp.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    getData();
  }, []);

  return (
    <>
      <h1>This is axois Api call</h1>
      <div>Hlo how are you???????????</div>
    </>
  );
};

export default Axois;
