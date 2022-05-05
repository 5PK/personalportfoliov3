import React from "react";
import { CustomPicker } from "react-color";
import { Saturation, Hue } from "react-color/lib/components/common";

class ColorPicker extends React.Component {
  handleChange = data => {
    this.props.setColor(data);
  };
  
  componentDidMount(){
    document.getElementById("reset-this").classList.add("browser-default");
    document.getElementById("paletteDiv").firstChild.style.borderRadius = "10px 10px 0 0";
    this.setBgColor();
  }

  componentDidUpdate(){
    console.log(this.props.hex);
    this.setBgColor();
  }

  setBgColor(){
    window.localStorage.setItem('bg-color', this.props.hex);
    document.documentElement.style.setProperty('--bg-color', this.props.hex);
    this.props.setHexColor(this.props.hex);
  }

  render() {
    return (
      <div style={{ width: "100px", marginRight:'20px',marginLeft:'20px' }} className="_dropdown center-align">
        <input
          style={{
            margin:'0',
            textAlign: 'center',
            height: '2rem',
            borderBottom: 'unset'

          }}
          id="reset-this"
          value={this.props.hex}
          onChange={data => this.handleChange(data.Hex)}
        />
        <div className="_dropdown-content">
          <div
            id="paletteDiv"
            style={{
              width: "100px",
              height: "100px",
              borderRadius:"10px 10px 0 0",
              position: "relative",
            }}
          >
            <Saturation
              {...this.props}
              onChange={this.handleChange}
              pointer={Picker1}
            />
          </div>
          <div
            style={{
              width: "100px",
              height: "20px",
              position: "relative",
              borderRadius:"50%"
            }}
          >
            <Hue {...this.props} onChange={this.handleChange} pointer={Picker} />
          </div>
        </div>
      </div>
    );
  }
}

function Picker1() {
  return (
    <div
      style={{
        left:-10,
        top:-10,
        position:"absolute",
        width: 20,
        height: 20,
        borderRadius: 20,
        background: "rgba(255,255,255,0.2)",
        border: "1px solid white",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        boxSizing: "border-box"
      }}
    />
  );
}
function Picker() {
  return (
    <div
      style={{
                left:-10,
        
        width: 20,
        height: 20,
        borderRadius: 20,
        background: "rgba(255,255,255,0.2)",
        border: "1px solid white",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        boxSizing: "border-box"
      }}
    />
  );
}

export const ColorPickerWrapped = CustomPicker(ColorPicker);
