
import "./App.css";
import { Brand, Navbar, Cta } from "./components";
import {
  Footer,
  Header,
  Features,
  Blog,
  Possibility,
  WhatGPT3,
} from "./containers";

function App() {
  
  return (
    <div className="App" id="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta
        para="Request Early Access to Get Started"
        h3="Register Today & start exploring the endless possibilities."
      />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
