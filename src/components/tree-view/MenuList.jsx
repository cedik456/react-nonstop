import React from "react";
import MenuItems from "./MenuItems";

const MenuList = ({ list = [] }) => {
  return (
    <ul>
      {list && list.length
        ? list.map((listItem) => <MenuItems item={listItem} />)
        : null}
    </ul>
  );
};

export default MenuList;
