import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to={"/"}>
        <h1>TODOS</h1>
      </Link>
    </>
  );
};

export default Header;