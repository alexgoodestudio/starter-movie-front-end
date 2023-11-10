import React from "react";
import HeaderNav from "./HeaderNav";
import headerImage from "./header.jpg";
import image1 from "../images/2.png"

function Header() {
  const style = {
    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${image1})`,
    backgroundPosition: "center",
    backgroundSize: "100% auto",
  };


  return (
    <div
    className="jumbotron jumbotron-fluid text-white border-bottom border-dark pt-0"
    style={style}
  >
      {/* <img src={image1} className="w-100"/> */}
      <HeaderNav />
      <div className="container">
        <h1 className="display-4">Find your next favorite movie!</h1>
        <p className="lead">
          <em>WeLoveMovies</em> is your source for finding reviews of movies in
          theatres near you.
        </p>
      </div>
    </div>
  );
}

export default Header;
