import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="white z-depth-0">
    <div className="nav-wrapper z-depth-0">
        <Link to='/' className="brand-logo white black-text" style={{paddingLeft: "3%"}}>kevincodes.ca</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/experience' className="black-text">experience</Link></li>
            <li><Link to='/projects'className="black-text">personal projects</Link></li>
            {
/*             <li><a className="black-text" href="35mm.html">35mm</a></li>
            <li><a className="black-text" href="mp3.html">.mp3</a></li>
            <li><a className="black-text" href="espirit.html">espirit des corps</a></li>
            <li>
                <div className="center-align">
                    <input type="text" id="colorPicker" className="browser-default" style={{width:'50%', border:'3px solid', borderRadius:'10px'}}></input>
                </div>
            </li> */
            }
        </ul>
    </div>
</nav>
  );
}