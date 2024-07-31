import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {
  //let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  //CHecking if the whole component is render
  //console.log("Header rendered");

  //if no dependency array => useEffect is called at every render
  //useEffect(()=>{})

  //if dependency array is empty=> useEffect is called at initial render (just once)
  // useEffect(() => {
  //   console.log("useEffect rendered");
  // }, []);

  //if dependency array is not empty (ex. contains btnNameReact)=> useEffect is called everytime the btnNameReact is updated
  useEffect(() => {
    console.log("useEffect Rendered");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              // btnName = "Logout";
              // console.log(btnName);
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
