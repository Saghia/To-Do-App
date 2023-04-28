import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

const PCode = (props) => {
  return (
    <p
      style={{
        backgroundColor: "#e7ecef",
        marginTop: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      Made By <code>Andrea Saggio (Saghia)</code> in{" "}
      <code>{props.CodeText}</code>.
    </p>
  );
};

export default PCode;
