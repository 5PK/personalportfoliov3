import React, { useState} from "react";
import { Link } from "react-router-dom";
import { ColorPickerWrapped } from "./Colorpicker";

export default function NavBar() {
  const [color, setColor] = useState(window.localStorage.getItem('bg-color') ?? "#c8b1de");
  const [hexColor, setHexColor] = useState("");
  
  return (
    <nav className="z-depth-0">
    <div className="nav-wrapper z-depth-0">
        <Link to='/' className="brand-logo black-text" style={{paddingLeft: "3%"}}>kevincodes</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/experience' className="black-text">experience</Link></li>
            <li><Link to='/projects'className="black-text">personal projects</Link></li>
            <li><Link to='/35mm'className="black-text">35mm</Link></li>
            <li><a className="black-text" href={`https://5pk.github.io/espirit-de-corps/index.html?bgColor=${hexColor.replace('#','')}`}>check out my game!</a></li>
            <li className="valign-wrapper">
              <ColorPickerWrapped
                color={color}
                setColor={setColor}
                setHexColor={setHexColor}
              />
            </li>
        </ul>
    </div>
</nav>
  );
}