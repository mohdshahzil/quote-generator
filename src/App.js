import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [quote, setQuote] = useState("");
  const [error, setError] = useState("");
  const url = "https://api.quotable.io/random";
  const quoteHandler = () => {
    axios
      .get(url)
      .then((res) => {
        setQuote(res.data.content);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-950 h-screen w-screen text-white">
      <button
        onClick={quoteHandler}
        className="p-2 bg-slate-500 rounded-lg text-white text-2xl "
      >
        Generate{" "}
      </button>

      {error ? (
        <div className="text-2xl my-4 p-6 text-center">{error}</div>
      ) : (
        <div className="text-2xl my-4 p-6 text-center">{quote}</div>
      )}
    </div>
  );
};

export default App;
