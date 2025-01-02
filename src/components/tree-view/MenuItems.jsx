import React from "react";
import MenuList from "./MenuList";
import { useState } from "react";

const MenuItems = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }
  return (
    <li>
      <p>{item.label}</p>
      {item && item.children && item.children.length > 0 ? (
        <span onClick={() => handleToggleChildren(item.label)}>
          {displayCurrentChildren[item.label] ? "-" : "+"}
        </span>
      ) : null}
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <div>
          <MenuList list={item.children} />
        </div>
      ) : null}
    </li>
  );
};

export default MenuItems;
