import React from "react";
import Loader from "../../components/contextual/loader/Loader";

 import './home.scss';

export default function Home() {
  return (
    <div className="home">
      <h1 className="home_title">Welcome to the Gallery.</h1>
      <h2 className="home_subtitle">A photo gallery for all the users</h2>
    </div>
  );
}
