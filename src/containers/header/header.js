import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text section__padding">
          lets build something amazing with GPT3 Open Ai
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing.<br/>Not
          thoughts all exercise blessing.<br/> Indulgence way everything joy
          alteration boisterous the attachment. <br/>Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="your Email address" />
          <button type="button">Get started</button>
          <div className="gpt3__header-content__people">
            <img src={people} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
          
        </div>
      </div>
        <div className="gpt3__header-image">
            <img src={ai} alt="" />
          </div>
    </div>
  );
};

export default Header;
