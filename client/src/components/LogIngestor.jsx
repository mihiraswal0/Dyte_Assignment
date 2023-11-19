import React, { useState } from "react";
import { Link } from "react-router-dom";
const LogIngestor = () => {
  const [jsonData, setJsonData] = useState("");
  console.log(jsonData)
  const setData = (event) => {
    if (event.target.value)
      setJsonData(event.target.value);
  }
  const validate = async () => {
    if(!jsonData.length)
    {
      return alert("Please Enter Data");
    }
    const parsedData = JSON.parse(jsonData);
    if (typeof parsedData === "object") {
      const res = await fetch('http://localhost:5000/api', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(parsedData)
      });
      console.log(res);
      if (res.status === 200) {
        alert("Data is Valid and sent successfully");
        setJsonData("");
      }
      else
        alert("Error:" + res.error);
    }
    else
      alert("Data is Invalid");
  }
  return (
    <div>
      <div>
        <h1>Log Ingestor Page</h1>
      </div>
      <div>
        <Link to='/query'>
          <button>Switch to Query Investor Page</button>
        </Link>
      </div>
      <div>
        <h3>Enter Log Data In Json Format </h3>
        <textarea name="jsonData" value={jsonData} onChange={setData} style={{"height": "400px", "width":"400px"}}></textarea>
        <div>
        <button onClick={validate}>Validate And Send Data</button>
          </div>
      </div>
    </div>
  );
};

export default LogIngestor;
