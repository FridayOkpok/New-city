import React from "react";

function Options({ countries }) {
  console.log(countries);
  return (
    <>
      <option value={countries}>{countries}</option>
    </>
  );
}
export default Options;
