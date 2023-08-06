import React, { useEffect } from "react";

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

    // .then((res) => {
    //   // console.log(res.json());
    //   return res.json();
    // })
    // .then((data) => {
    //   console.log(data);
    //   setGtCtgryQn(data);
    // });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <>
        <h1>Categories Questions</h1>
        {gtCtgryQn ? (
          <>
            "category has some question questions"{" "}
            {gtCtgryQn.map((data, id) => {
              return <li key={id}>{!data ? data : ""}</li>;
            })}
          </>
        ) : (
          <>"no question"</>
        )}
      </>
    </div>
  );
}

export default Home;
