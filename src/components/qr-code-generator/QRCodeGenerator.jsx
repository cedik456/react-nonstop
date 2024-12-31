import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleQrCode() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div className="wrapper">
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter something"
        />
        <button
          disabled={input && input.trim !== "" ? false : true}
          onClick={handleQrCode}
          className="btn"
        >
          Generate
        </button>
      </div>
      <QRCode id="qr-code-value" value={qrCode} size={400} />
    </div>
  );
};

export default QRCodeGenerator;
