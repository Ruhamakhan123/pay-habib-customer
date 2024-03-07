import React from "react";

function binaryToString(binary: string) {
  let str = "";
  const binaryArray = binary.split(" ");

  for (let i = 0; i < binaryArray.length; i++) {
    const charCode = parseInt(binaryArray[i], 2);
    const char = String.fromCharCode(charCode);
    str += char;
  }

  return str;
}

function filterResults(results) {
  let filteredResults = [];
  for (var i = 0; i < results.length; ++i) {
    if (i === 0) {
      filteredResults.push(results[i]);
      continue;
    }

    if (results[i].decodedText !== results[i - 1].decodedText) {
      filteredResults.push(results[i]);
    }
  }
  return filteredResults;
}

const ResultContainerTable = ({ data }) => {
  const results = filterResults(data);
  console.log(results);
  //   const final = binaryToString(results);
  return (
    <table className={"Qrcode-result-table"}>
      <thead>
        <tr>
          <td>#</td>
          <td>Decoded Text</td>
          <td>Format</td>
        </tr>
      </thead>
      <tbody>
        {results.map((result, i) => {
          console.log(result);
          return (
            <tr key={i}>
              <td>{i}</td>
              {result.decodedText && (
                <td>{binaryToString(result.decodedText)}</td>
              )}
              {/* <td>{final}</td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const ResultContainerPlugin = (props) => {
  const results = filterResults(props.results);
  return (
    <div className="Result-container">
      <div className="Result-header">Scanned results ({results.length})</div>
      <div className="Result-section">
        <ResultContainerTable data={results} />
      </div>
    </div>
  );
};

export default ResultContainerPlugin;
