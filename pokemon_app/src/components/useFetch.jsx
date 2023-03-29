import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (API) => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
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

    getData(API);
  }, [API]);

  return { myData };
};

export default useFetch;
