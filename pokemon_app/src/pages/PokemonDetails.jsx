import React from "react";
import useFetch from "../components/useFetch";
import { useParams } from "react-router-dom";
import Class from "../components/Class";
import Info from "../components/Info";

const PokemonDetails = () => {
  const { id } = useParams;
  const { myData } = useFetch("https://pokeapi.co/api/v2/pokemon/" + id);
  const {
    types: [
      {
        type: { name: name2 = "default" },
      },
    ],
    sprites: {
      other: {
        dream_world: { front_default: species_name },
      },
    },
  } = myData;
  return (
    <div className="flex justify-between ">
      <img className=" h-screen" src="./img/Left.png" alt="" />
      <div>
        <div className=" flex justify-center relative">
          <img className=" mt-10" src="./img/Logo.png" />
        </div>
        <div className="flex justify-arouond max-w-7xl mx-auto mt-32 items-center">
          <div className=" w-1/3">
            <div>
              <h1 className=" font-bold text-cyan-600 text-4xl my-4">
                {species_name}
              </h1>
              <p className="font-medium text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis nostrum quia dolor nisi ipsa assumenda.
              </p>
            </div>
            <div className="p-1 mt-10 bg-gradient-to-r from-[#F366B9] to-[#FC7C23] w-[345px] rounded">
              <Info />
            </div>
          </div>
          <div className="w-1/3">
            <img className=" max-w-[300px] mx-auto" src="./img/b.png"></img>
          </div>

          <div className="w-1/3">
            <h1 className="font-semibold text-2xl py-2">Type</h1>
            <div className=" flex space-x-4">
              <Class text={name2} />
              <Class text="poison" />
            </div>
            <h1 className="font-semibold text-2xl py-2">Weaknesses</h1>
            <div className="flex space-x-4">
              <Class text="Fire" />
              <Class text="Phychic" />
              <Class text="Flyinf" />
              <Class text="Ice" />
            </div>
          </div>
        </div>
      </div>
      <img className=" h-screen" src="./img/Left.png" alt="" />
    </div>
  );
};

export default PokemonDetails;
