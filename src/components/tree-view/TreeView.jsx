import React from "react";
import MenuList from "./MenuList";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="h-full w-[300px] p-4 text-white bg-gray-500 ">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
