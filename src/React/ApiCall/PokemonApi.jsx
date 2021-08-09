import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemon = () => {
  const [num, setNum] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
        const resp = await axios({ url, method: "get" });
        console.log(resp.data.name);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getData();
  });

  //   const [num, setNum] = useState();

  //   useEffect(() => {
  //     const getData = async () => {
  //       try {
  //         const resp = await axios.get(
  //           `https://pokeapi.co/api/v2/pokemon/${num}`
  //         );
  //         console.log(resp.data.name);
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     };

  //     getData();
  //   });

  return (
    <>
      <h1>you chose {num} value</h1>

      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default Pokemon;
