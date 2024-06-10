import React, { useState } from "react";
import QrCode from "react-qr-code";
import "./style.css";

const QrCodeGenerator = () => {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput] = useState("");

  function handleQrcode(event) {
    event.preventDefault(); // Prevent form submission
    setQrcode(input);
  }

  return (
    <div>
      <div>
        <h1>QR Code Generator</h1>
        <p>Enter Text or URL to generate QR Code</p>
        <form onSubmit={handleQrcode}>
          <input
            className="input"
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter Text or URL"
          />
          <button
            className="btn"
            type="submit"
            disabled={input && input.trim() !== "" ? false : true}
          >
            Generate
          </button>
        </form>
      </div>
      {qrcode && (
        <div className="qrcode">
          <QrCode id="qrcode" value={qrcode} size={400} bgColor="white" />
        </div>
      )}
    </div>
  );
};

export default QrCodeGenerator;
