import React from "react";
import "./Property1btnSubmitDesktop.css";

function Property1btnSubmitDesktop(props) {
  const { className } = props;

  return (
    <div className={`btn-submit ${className || ""}`}>
      <div className="submit valign-text-middle worksans-normal-white-14px">Submit</div>
    </div>
  );
}

export default Property1btnSubmitDesktop;
