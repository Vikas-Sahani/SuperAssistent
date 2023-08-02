import React, { useState } from "react";

function Categorize() {
  const [isHidden, setIsHidden] = useState(true);
  const [category, setCategory] = useState([{ id: 1, val: "" }]);
  const [item, setItem] = useState([{ id: 1, val: "" }]);
  const [inp, setInpu] = useState("");

  console.log(...category);
  // const postData = (e) => {
  //   e.preventDefault();
  //   console.log("POST");
  //   fetch("/categorize", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(category),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  const postData = (e) => {
    e.preventDefault();
    console.log("POST");
    fetch("/categorize", {
      // Update the route to /categorize
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col  items-center">
      <h1 className="text-6xl font-bold">Categorize</h1>

      <form
        onSubmit={postData}
        method="post"
        className=" flex justify-center border-solid border-2 mt-10 w-1/2 font-sans shadow-2xl rounded-2xl"
      >
        <div className="grid grid-cols-3 place-content-start gap-2 w-11/12 my-5">
          <input
            type="text"
            className="col-span-full px-5 my-2 border-solid border-gray-200 border-2 rounded-md"
            placeholder="Description Text"
          />
          <div className="flex items-center col-span-full my-2">
            <p className="font-medium">Medium</p>
            <select className="mx-10  px-3 border-2 border-gray-300 rounded-md text-gray-400">
              <option>None</option>
            </select>
          </div>

          <div className="col-span-full flex flex-col my-2">
            <p className=" font-medium">Categories</p>
            {category.map((el, idx) => {
              return (
                <div key={idx} className="flex items-center my-1">
                  <span
                    className="material-symbols-outlined"
                    style={{ visibility: isHidden ? "hidden" : "" }}
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    drag_indicator
                  </span>
                  <label htmlFor="category" className="">
                    <input
                      type="text"
                      className="border-solid w-32 px-3 border-gray-200 border-2 rounded-md"
                      placeholder={`Category ${el.id}`}
                      onFocus={() => {
                        setIsHidden("");
                      }}
                      onBlur={() => {
                        setIsHidden("hidden");
                      }}
                      onChange={(e) => {
                        setInpu(e.target.value);
                      }}
                      onKeyPress={(e) => {
                        if (e.target.value !== "") {
                          if (e.key === "Enter") {
                            console.log("key pressed", e, category);

                            setCategory([
                              ...category,
                              {
                                id: el.id + 1,
                                val: inp,
                              },
                            ]);
                          }
                        }
                      }}
                    />
                  </label>
                  <span
                    className="material-symbols-outlined"
                    style={{ visibility: isHidden ? "hidden" : "" }}
                  >
                    close
                  </span>
                </div>
              );
            })}
          </div>

          <div className="col-span-full grid grid-flow-col justify-between grid-cols-2 my-2">
            <div className="flex flex-col">
              <p className=" font-medium">Items</p>
              {item.map((el, idx) => {
                return (
                  <div key={idx} className="flex items-center my-1">
                    <span
                      className="material-symbols-outlined"
                      style={{ visibility: isHidden ? "hidden" : "" }}
                    >
                      drag_indicator
                    </span>
                    <label htmlFor="category" className="">
                      <input
                        type="text"
                        className="border-solid w-36 px-3 border-gray-200 border-2 rounded-md"
                        placeholder={`Item ${el.id}`}
                        onFocus={() => {
                          setIsHidden("");
                        }}
                        onBlur={() => {
                          setIsHidden("hidden");
                        }}
                        onChange={(e) => {
                          setInpu(e.target.value);
                        }}
                        onKeyPress={(e) => {
                          if (e.target.value !== "") {
                            if (e.key === "Enter") {
                              console.log("key pressed", e, category);

                              setItem([
                                ...item,
                                {
                                  id: el.id + 1,
                                  val: inp,
                                },
                              ]);
                            }
                          }
                        }}
                      />
                    </label>
                    <span
                      className="material-symbols-outlined"
                      style={{ visibility: isHidden ? "hidden" : "" }}
                    >
                      close
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col">
              <p className="font-medium mx-5">Belongs to</p>
              {item.map((el, keyId) => {
                return (
                  <label key={keyId}>
                    <select
                      type="text"
                      className="h-[26px] mx-5 w-42 px-3 border-2 border-gray-300 rounded-md text-gray-400 my-1"
                      placeholder={``}
                    >
                      <option>Choose Category</option>
                      {category.map((el, keyId) => {
                        return <option key={keyId}>{el.val}</option>;
                      })}
                    </select>
                  </label>
                );
              })}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-fuchsia-50 rounded-2xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Categorize;
