// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import CardInfo from "./CardInfo";
const API = "https://pokeapi.co/api/v2/pokemon/";
const Card = () => {
  const [myData, setMyData] = useState([]);

  async function getData() {
    const res = await axios.get(API);
    getURLData(res.data.results);
  }
  async function getURLData(res) {
    res.map(async (items) => {
      const info = await axios.get(items.url);
      setMyData((data) => {
        data = [...data, info.data];

        return data;
      });
    });
  }
  useEffect(() => {
    getData();
  }, [API]);

  return (
    <div className="grid grid-cols-5 justify-items-center">
      {myData.map((data) => {
        return (
          <div className="bg-white shadow-md rounded-lg m-8 w-[235px] h-[307] p-3">
            <img
              className=" rounded-md h-[215px] w-[215px] bg-gray-100"
              src={data.sprites.other.dream_world.front_default}
              alt="product image"
            />
            <div className="py-2">
              <h3 className="font-semibold text-lg">{data.name}</h3>
              <div className="flex py-2 space-x-2">
                <h3 className=" px-4 py-.5 text-white rounded bg-green-400  text-sm font-normal ">
                  {data.type}
                </h3>
                <h3 className="px-4 py-.5 text-white rounded bg-purple-400 text-sm font-normal ">
                  Poison
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
