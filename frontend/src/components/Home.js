import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Categorize from "./Categorize";

function Home() {
  const [gtCtgryQn, setGtCtgryQn] = React.useState("");

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:5000/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setGtCtgryQn(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid place-items-center place-content-center">
      <>
        <h1 className="text-5xl">Categories Questions</h1>
        {gtCtgryQn ? (
          gtCtgryQn.map((data, idx) => {
            return (
              <div key={idx} className="QuestionContainer">
                <h3>{data.desc}</h3>
                <div className="ItemContainer">
                  {data.Items.map((item) => {
                    return <span>{item.val} &nbsp;</span>;
                  })}
                </div>
                <div>
                  {data.Categories.map((Category) => {
                    return <div>{Category.val} &nbsp;</div>;
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <>
            <Link to="/categorize">"no question"</Link>
          </>
        )}
      </>
    </div>
  );
}

export default Home;
