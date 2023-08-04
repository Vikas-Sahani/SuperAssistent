import React, { useState } from "react";

function Categorize() {
  const [desc, setDesc] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [category, setCategory] = useState([{ id: 0, val: "" }]);
  const [item, setItem] = useState([{ id: 0, val: "", Category: "" }]);
  const [inp, setInpu] = useState("");

  const validateData = () => {
    if (desc.trim() === "" || category.length === 1 || item.length === 1) {
      alert("Please Fill the input fields of Category");
      return false;
    }
    return true;
  };

  const postData = (event) => {
    event.preventDefault();

    if (!validateData()) {
      console.log("Please Fill the input fields of Category"); // If data is not valid, return early and don't make the API call
      return;
    }
    const arr = [
      desc,
      category.filter((el, idx) => {
        return idx !== 0;
      }),
      item.filter((el, idx) => {
        return idx !== 0;
      }),
    ];

    console.log(
      "POST",
      desc,
      category,
      item,
      "jsonStrinfy -> ",
      JSON.stringify(arr)
    );

    fetch("/categorize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arr),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("data sent successully");
      })
      .catch((err) => {
        console.log(err);
        alert("data failed");
      });
  };

  const handleKeyPress = (event, el, idx) => {
    if (event.key === "Enter" && event.target.value) {
      if (!el.hasOwnProperty("Category")) {
        setCategory([
          ...category,
          {
            id: el.id + 1,
            val: inp,
          },
        ]);
      } else {
        setItem([
          ...item,
          {
            id: el.id + 1,
            val: inp,
            Category: "",
          },
        ]);
      }
    }
  };

  return (
    <div className="flex flex-col  items-center bg-gradient-to-r from-sky-500 to-pink-500 h-[100vh] text-xl font-bold">
      <h1 className="text-6xl font-bold text-gray-50">Categorize</h1>

      <form
        method="POST"
        className=" flex justify-center border-solid border-2 mt-10 w-1/2 font-sans shadow-2xl rounded-2xl bg-white"
      >
        <div className="grid grid-cols-3 place-content-start gap-2 w-11/12 my-5">
          <input
            type="text"
            className="col-span-full px-5 my-2 border-solid border-gray-200 border-2 rounded-md"
            placeholder="Description Text"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
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
                  >
                    drag_indicator
                  </span>
                  <label htmlFor="category" className="">
                    <input
                      type="text"
                      className="border-solid w-32 px-3 border-gray-200 border-2 rounded-md"
                      placeholder={`Category ${el.id + 1}`}
                      onFocus={() => {
                        setIsHidden("");
                      }}
                      onBlur={() => {
                        setIsHidden("hidden");
                      }}
                      onChange={(event) => {
                        setInpu(event.target.value);
                      }}
                      onKeyPress={(event) => {
                        handleKeyPress(event, el, idx);
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

          <div className="col-span-full grid gap-3 grid-cols-2 my-2">
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
                    <label htmlFor="category">
                      <input
                        type="text"
                        className="border-solid px-3 w-11/12 border-gray-200 border-2 rounded-md"
                        placeholder={`Item ${el.id + 1}`}
                        onFocus={() => {
                          setIsHidden("");
                        }}
                        onBlur={() => {
                          setIsHidden("hidden");
                        }}
                        onChange={(event) => {
                          setInpu(event.target.value);
                        }}
                        onKeyPress={(event) => {
                          handleKeyPress(event, el, idx);
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

            <div className="flex flex-col place-self-end">
              <p className="font-medium mx-5">Belongs to</p>
              {item.map((el, keyId) => {
                return (
                  <label key={keyId}>
                    <select
                      type="text"
                      className="h-[30px] mx-5 w-11/12 px-3 border-2 border-gray-300 rounded-md text-gray-400 my-1 font-semibold"
                      onChange={(e) => {
                        const newItem = [...item];
                        newItem[keyId].Category = e.target.value;
                        // when I am doing the above 2 line with item so I am getting error that map is not a function so to handle that error I have used itme's new refference(newItem) & updating to it.
                        setItem(newItem);
                      }}
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
          <span
            className="text-center ease-in-out duration-1000 col-span-full p-1 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
            onClick={(event) => postData(event)}
          >
            Submit
          </span>
        </div>
      </form>
    </div>
  );
}

export default Categorize;
