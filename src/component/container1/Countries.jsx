import React from "react";

function Options({ countries }) {
  return (
    <>
      <option value={countries}>{countries}</option>
    </>
  );
}
export default Options;
