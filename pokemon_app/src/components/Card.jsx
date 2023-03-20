// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setMyData(res.data));
  }, []);
  return myData.map((data) => {
    <div className="bg-white shadow-md rounded-lg m-6 w-[235px] h-[307] p-3">
      <img
        className=" rounded-md h-[215px] w-[215px] "
        src="./img/Image01.png"
        alt="product image"
      />
      <div className="py-2">
        <h3 className="font-semibold text-lg">{data.name}</h3>
        <div className="flex py-2 space-x-2">
          <h3 className=" px-4 py-.5 text-white rounded bg-green-400  text-sm font-normal ">
            Grass
          </h3>
          <h3 className="px-4 py-.5 text-white rounded bg-purple-400 text-sm font-normal ">
            Poison
          </h3>
        </div>
      </div>
    </div>;
  });
};

export default Card;
