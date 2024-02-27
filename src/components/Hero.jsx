import React, { useContext } from "react";
import { AppState } from "../App";
const Hero = () => {
  const appManage = useContext(AppState);
  return (
    <div>
      <h1>This is my Hero Section</h1>
      <h5>{appManage}</h5>
    </div>
  );
};

export default Hero;
