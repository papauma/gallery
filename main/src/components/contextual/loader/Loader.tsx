import React from "react";

import './loader.scss';
export default function Loader() {
  return (
    <div className="loader">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span>Loading</span>
    </div>
  );
}
