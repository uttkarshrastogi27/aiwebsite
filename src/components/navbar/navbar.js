import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
// const nav_header = document.getElementById('')
// document.onreadystatechange = function () {
//   if (document.readyState === 'complete') {
        
//       const section_header = document.getElementById("home")
//   const observer = new IntersectionObserver((entries) => {
//      const ent = entries[0]
//      console.log(ent)
    
//   }, {
//     root: null,
//     rootmargin: "",
//     threshold:  0
//   });

//   observer.observe(section_header)
//   }
// }

const Navbar = () => {
  
  
  return (
    <>
      <div className="gpt3__navbar">
          <div className="gpt3__navbar-links-logo">
            <img src={logo} alt="" />
          </div>
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_conatiner">
            <p><a href="#home">Home</a></p>
            <p><a href="#what3">what is GPT3?</a></p>
            <p><a href="#features">Open AI</a></p>
            <p><a href="#possibility">Case Studies</a></p>
            <p><a href="#home">Library</a></p>
          </div>
          <div className="gpt3__navbar-sign">
            <p>Sign in</p>
            <button type = "button">Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
