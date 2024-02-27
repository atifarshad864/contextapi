import React from "react";
import Body from "./Body";
import Footer from "./Footer";

const Header = ({ data }) => {
  return (
    <div>
      <h1>This is Header Section</h1>
      <h2>{data}</h2>
      <Body data={data} />
      <Footer data={data} />
    </div>
  );
};

export default Header;
