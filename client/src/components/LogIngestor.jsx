import React,{useState} from "react";
import { Link } from "react-router-dom";
const LogIngestor = () => {
    const [jsonData,setJsonData]=useState("");
    console.log(jsonData)
    const setData=(event)=>{
        if(event.target.value)
        setJsonData(event.target.value);
    }
    const validate=()=>{
        const parsedData=JSON.parse(jsonData);
        if(typeof parsedData ==="object")
        {
            alert("Data is Valid and Sent Successfully");
            setJsonData("");
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
        <textarea name="jsonData" value={jsonData} onChange={setData}></textarea>
        <button onClick={validate}>Validate And Send Data</button>
      </div>
    </div>
  );
};

export default LogIngestor;
