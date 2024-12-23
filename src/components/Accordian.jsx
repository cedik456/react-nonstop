import React, { useState } from "react";
import dummyData from "./data.js";

const Accordian = () => {
  const [selectedData, setSelectedData] = useState("");

  return (
    <div>
      <div>
        {dummyData && dummyData.length > 0 ? (
          dummyData.map((dataItem) => {
            <div>
              <div>
                <h3>{dataItem.question}</h3>
              </div>
            </div>;
          })
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
