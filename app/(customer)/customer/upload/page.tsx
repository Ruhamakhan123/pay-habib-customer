"use client";

import React, { useState } from "react";
import Html5QrcodePlugin from "@/components/Html5QrcodePlugin";
import ResultContainerPlugin from "@/components/ResultContainerPlugin";

const UploadPage = () => {
  const [decodedResults, setDecodedResults] = useState([]);
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log("App [result]", decodedResult);
    setDecodedResults((prev) => [...prev, decodedResult]);
  };
  console.log(decodedResults);
  return (
    <h1>
      <div className="App">
        <section className="App-section">
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
          <ResultContainerPlugin results={decodedResults} />
        </section>
      </div>
    </h1>
  );
};

export default UploadPage;
