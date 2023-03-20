import React from "react";

const Class = (props) => {
  return (
    <div>
      <h3 className="px-4 py-1 text-white rounded bg-purple-400 text-lg font-normal">
        {props.text}
      </h3>
    </div>
  );
};

export default Class;
