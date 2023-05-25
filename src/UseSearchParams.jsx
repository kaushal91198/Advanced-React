import React from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";

// The useSearchParams hook is used to read and modify the query string in the URL for the current location.
export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const favoriteFruit = searchParams.get("fruit");
  return (
    <div className="App">
      <h1>Favorite fruit</h1>
      {favoriteFruit ? (
        <p>
          Your favorite fruit is <b>{favoriteFruit}</b>
        </p>
      ) : (
        <i>No favorite fruit selected yet.</i>
      )}

      {["🍒", "🍑", "🍎", "🍌"].map((fruit) => {
        return (
          <p key={fruit}>
            <label htmlFor={`id_${fruit}`}>{fruit}</label>
            <input
              type="radio"
              value={fruit}
              checked={favoriteFruit === fruit}
              onChange={(event) => {
                setSearchParams(
                  createSearchParams({ fruit: event.target.value })
                );
              }}
            />
          </p>
        );
      })}
    </div>
  );
}
