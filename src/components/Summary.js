import React from "react";
import data from "../data";

const summary = () => {
  return (
    <div className="summary">
      <p dangerouslySetInnerHTML={{ __html: data.summary }} />
    </div>
  );
};

export default summary;
