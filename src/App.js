import "./styles.css";
import { useState } from "react";
import Data from "./city.json";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <h1>Cities</h1>
      <h3>Enter your city</h3>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      {Data.filter((city) =>
        city.name.toLowerCase().includes(search.toLowerCase())
      ).map((city) => {
        return (
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              borderRadius: "30px",
              margin: "10px",
              maxWidth: "70%"
            }}
          >
            {city.name}
          </div>
        );
      })}
    </div>
  );
}
