import React from "react";

function DisplayData(props){
  return (
    <div>
      <h1>{props.firstName}</h1>
      <hi>{props.lastName}</hi>
    </div>
  );
}

export default DisplayData;