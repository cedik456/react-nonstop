import React from "react";
import MenuList from "./MenuList";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="wrapper">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
