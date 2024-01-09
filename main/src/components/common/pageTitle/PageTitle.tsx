import React from "react";

import './pageTitle.scss';
export default function PageTitle({text} : {text: string}) {
  return <h1 className="pageTitle">{text}</h1>;
}
