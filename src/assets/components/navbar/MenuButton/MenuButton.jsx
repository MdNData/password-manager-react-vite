import { useState } from "react";

const MenuButton = ({
  containerWidth = 30,
  color = "white",
  barHeight = 4,
  barBorderRadius = "13px",
  barMargins = "6px 0 6px 0px",
  barTransition = "200ms all linear",
}) => {
  const [position, setPosition] = useState(false);

  const defaultBarStyle = {
    backgroundColor: color,
    height: barHeight + "px",
    display: "block",
    borderRadius: barBorderRadius,
    margin: barMargins,
    transition: barTransition,
    transform: "rotate(0) translateY(0)",
    width: "100%",
  };

  const topBarStyle = {
    transform: "rotate(45deg) translateY(14px)",
    margin: "6px 0 6px 9px",
  };

  const middleBarStyle = {
    width: "0px",
  };

  const bottomBarStyle = {
    transform: "rotate(-45deg) translateY(-14px)",
    margin: "6px 0 6px 9px",
  };

  return (
    <div
      className="btn-menu-container"
      style={{
        width: containerWidth + "px",
      }}
      onClick={() => {
        setPosition(!position);
      }}
    >
      <span
        style={
          position
            ? { ...defaultBarStyle, ...topBarStyle }
            : { ...defaultBarStyle }
        }
      ></span>
      <span
        style={
          position
            ? { ...defaultBarStyle, ...middleBarStyle }
            : { ...defaultBarStyle }
        }
      ></span>
      <span
        style={
          position
            ? { ...defaultBarStyle, ...bottomBarStyle }
            : { ...defaultBarStyle }
        }
      ></span>
    </div>
  );
};

export default MenuButton;
