import React, { useState } from "react";
import dummyData from "./data.js";

const Accordion = () => {
  const [selectedData, setSelectedData] = useState("");
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false); // for enabling the selection mode
  const [multiple, setMultiple] = useState([]); // for storing multiple selected items

  const handleSingleSelection = (getCurrentId) => {
    setSelectedData(getCurrentId == selectedData ? null : getCurrentId);
  };

  const handleMultipleSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  };

  console.log(selectedData, multiple);

  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
        className="btn"
      >
        Enable Multi Selection
      </button>
      <div className="w-[500px]">
        {dummyData && dummyData.length > 0 ? (
          dummyData.map((dataItem) => (
            <div className="bg-gray-500 text-white mb-3 p-4" key={dataItem.id}>
              <div
                className="flex justify-between items-center "
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultipleSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div>{dataItem.answer}</div>
                  )
                : selectedData === dataItem.id && <div>{dataItem.answer}</div>}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
