import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemon = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [length, setLength] = useState();
  const [weight, setWeight] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
        const resp = await axios({ url, method: "get" });
        console.log(resp.data);
        setName(resp.data.name);
        setLength(resp.data.moves.length);
        setWeight(resp.data.weight);
        setId(resp.data.id);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  });

  return (
    <>
      <h1>you chose {num} value</h1>

      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
          console.log("The event is", event);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="25">25</option>
      </select>

      <div>
        <p>{`${name} || ${length} || ${weight} || ${id} `}</p>
      </div>
    </>
  );
};

export default Pokemon;
