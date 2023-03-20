import React from "react";
import Blog from "../components/Blog";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <div className="bg-[url('/img/Background.png')] h-[1080px] ">
        <img className="h-[1080px] absolute" src="./img/Texture.png" />
        <div className=" flex justify-center relative">
          <img className=" mt-10" src="./img/Logo.png" />
        </div>
      </div>
      <Card />
      <Blog />
    </div>
  );
};

export default Home;
