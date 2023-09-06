import { useRef } from "react";
import { links } from "./data";

const MenuList = ({ menuState }) => {
  const refMenuListContainer = useRef(null);
  return (
    <div
      className="nav-menu-list"
      style={
        menuState
          ? {
              height:
                refMenuListContainer.current.getBoundingClientRect().height +
                "px",
            }
          : { height: 0 }
      }
    >
      <ul
        ref={refMenuListContainer}
        style={
          menuState
            ? {
                borderTop: "1px solid rgba(255, 255, 255, 0.193)",
              }
            : { borderTop: "0" }
        }
      >
        {links.map((item) => {
          const { id, name, link } = item;
          return (
            <li key={id}>
              <a href={link}>{name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuList;
