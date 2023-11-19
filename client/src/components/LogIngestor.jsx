import React, { useState } from "react";
import { Link } from "react-router-dom";
const LogIngestor = () => {
  const [jsonData, setJsonData] = useState("");
  const [dataSent,sentData]=useState(0);
<<<<<<< HEAD
  console.log(jsonData);
=======
>>>>>>> ea83d8a1f6af4fd7c9b43e4c1be67931006a3708
  const setData = (event) => {
    if (event.target.value)
      setJsonData(event.target.value);
  }
  const reset=()=>{
    setJsonData("");
    sentData(0);
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
      if (res.status === 200) {
        sentData(1);
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
        <textarea name="jsonData" value={jsonData} onChange={setData} style={{"height": "400px", "width":"400px"}}/>
        <div>
        <button onClick={validate}>Validate And Send Data</button>
        <button onClick={reset}>Reset</button>
        <div>
{dataSent?<h5>Data Send Successfully</h5>:<h5></h5>}
        </div>
        
          </div>
      </div>
    </div>
  );
};

export default LogIngestor;
