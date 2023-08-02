import React, { useState } from "react";

function Categorize() {
  const [isHidden, setIsHidden] = useState("hidden");
  const [catgory, setCatgory] = useState([{ Category: 1 }]);
  return (
    <div className="flex flex-col  items-center">
      <h1 className="text-6xl font-bold">Categorize</h1>

      <form className=" flex justify-center border-solid border-2 mt-10 w-1/2 font-sans shadow-2xl rounded-2xl">
        <div className="grid grid-cols-3 place-content-start grid-rows-4 gap-6 w-11/12 my-5">
          <input
            type="text"
            className="col-span-full px-5 border-solid border-gray-200 border-2 rounded-md"
            placeholder="Description Text"
          />
          <div className="flex items-center col-span-full ">
            <p className="font-medium">Medium</p>
            <select className="mx-10  px-3 border-2 border-gray-300 rounded-md text-gray-400">
              <option>None</option>
            </select>
          </div>

          <div className="col-span-full flex flex-col">
            <p className=" font-medium">Categories</p>
            {catgory.map((el, idx) => {
              return (
                <>
                  <div key={idx} className="flex items-center">
                    <span
                      className="material-symbols-outlined"
                      style={{ visibility: isHidden }}
                    >
                      drag_indicator
                      {console.log(isHidden)}
                    </span>
                    <label htmlFor="category" className="">
                      <input
                        type="text"
                        className="border-solid  px-3 border-gray-200 border-2 rounded-md"
                        placeholder={`Category ${1}`}
                        onFocus={() => {
                          setIsHidden("");
                          console.log(isHidden);
                        }}
                        onBlur={() => {
                          setIsHidden("hidden");
                        }}
                      />
                    </label>
                    <span
                      className="material-symbols-outlined"
                      style={{ visibility: isHidden }}
                    >
                      close
                    </span>
                  </div>
                </>
              );
            })}
          </div>

          <div className=" w-[330%] full  flex justify-between">
            <div>
              <p className="font-medium">Items</p>
              <label>
                <input
                  type="text"
                  className="border-solid  px-3 border-gray-200 border-2 rounded-md"
                  placeholder={`Item ${1}`}
                />
              </label>
            </div>

            <div className="">
              <p className="font-medium px-20">Belongs to</p>
              <label>
                <select
                  type="text"
                  className=" mx-10  px-3 border-2 border-gray-300 rounded-md text-gray-400"
                  placeholder={``}
                >
                  <option>Choose Category</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Categorize;
