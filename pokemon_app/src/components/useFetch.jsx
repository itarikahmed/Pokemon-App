import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (API) => {
  const [myData, setMyData] = useState([]);
  //   const API = "https://pokeapi.co/api/v2/pokemon/";
  async function getData(API) {
    const res = await axios.get(API);
    getURLData(res.data.results);
  }
  async function getURLData(res) {
    res.map(async (items) => {
      const info = await axios.get(items.url);
      console.log(info);
      setMyData((data) => {
        data = [...data, info.data];
        return data;
      });
    });
  }
  useEffect(() => {
    getData(API);
  }, []);

  return;
};

export default useFetch;
