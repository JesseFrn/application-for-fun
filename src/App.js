import './App.css';
import React, { useState } from 'react';
import pic1 from "./englishbay.png";
import pic2 from "./kitsilano.png";
import thinkPic from "./think.png";
import shot1 from "./screencap1.png";
import shot2 from "./screencap2.png";
import shot3 from "./screencap3.png";

function App() {

  const [Pic1, setPic1] = useState(false)
  const [Pic2, setPic2] = useState(false)
  const [Reset, setReset] = useState(true)

  return (
    <div>
      <div className="title">Vancouver Friend Appreciation</div>
      <div className="container">

        <img className="img" src={
          Pic1 ? pic1 :
          Pic2 ? pic2 :
          Reset ? thinkPic :
          thinkPic
        } />

        <div className="buttonsDiv">
          <button className="button1" onClick={() => {
            setPic1(true);
            setPic2(false);
            setReset(false);
          }}>Choose Option 1</button>

          <button className="button2" onClick={() => {
            setPic2(true);
            setPic1(false);
            setReset(false);
          }}>Choose Option 2</button>

          <button className="buttonReset" onClick={() => {
            setPic2(false);
            setPic1(false);
            setReset(true);
          }}>Reset</button>
        </div>

      </div>
      <div className="title">Code</div>
      <div className="codediv">
          <img className="shot1" src={shot1} />
          <img className="shot2" src={shot2} />
          <img className="shot3" src={shot3} />
      </div>
    </div>

  )
}
export default App;
