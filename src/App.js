import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  function handleOnchange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <h2>Update Data from an input</h2>

      <div className="input-display">
        Seached Keyword: <b>{search}</b>
      </div>

      <div className="inputs">
        <input
          className="input"
          type="text"
          value={search}
          placeholder="Seach Here"
          onChange={handleOnchange}
        />
      </div>
    </div>
  );
}

export default App;
