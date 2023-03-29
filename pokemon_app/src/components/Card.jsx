import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Card = () => {
  const { myData } = useFetch("https://pokeapi.co/api/v2/pokemon/");
  return (
    <div className="grid grid-cols-5 justify-items-center">
      {myData.slice(0, 10).map((info, id) => {
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
        } = info;
        return (
          <Link to={`/${id}`}>
            <div
              key={id}
              className="bg-white hover:bg-blue-700 shadow-md rounded-lg m-8 w-[235px] h-[307] p-3"
            >
              <div className="rounded-md h-[215px] w-[215px] bg-gray-100 pt-4">
                <img
                  className="h-[180px] w-[180px] m-auto"
                  src={species_name}
                  alt="product image"
                />
              </div>

              <div className="py-2">
                <h3 className="font-semibold text-lg">{info.name}</h3>
                <div className="flex py-2 space-x-2">
                  {/* <h3 className=" px-4 py-.5 text-white rounded bg-green-400  text-sm font-normal "></h3> */}
                  <h3
                    className="px-4 py-.5 text-white rounded  text-sm font-normal "
                    style={{
                      backgroundColor: name2 === "fire" ? "yellow" : "purple",
                    }}
                  >
                    {name2}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;
