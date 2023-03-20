import React from "react";

const Info = (prpos) => {
  return (
    <div className="flex gap-10 py-4 pl-8 bg-white">
      <div className=" space-y-4">
        <div>
          <h2 className="text-lg font-semibold pb-2">Height</h2>
          <h3>2'04"</h3>
        </div>
        <div>
          <h2 className="text-lg font-semibold pb-2"> Weight</h2>
          <h3>15.5lbs</h3>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold pb-2">Categori</h2>
          <h3>Seed</h3>
        </div>
        <div>
          <h2 className="text-lg font-semibold pb-2">Abilities</h2>
          <h3>Overgrow</h3>
          <h3>Blaze</h3>
        </div>
      </div>
    </div>
  );
};

export default Info;
