import React, { useState } from 'react'
import QueryTable from './QueryTable';
const QueryFilter = () => {
    const [level, setLevel] = useState("");
    const [message, setMessage] = useState("");
    const [resourceId, setResourceId] = useState("");
    const [timestamp, setTimeStamp] = useState("");
    const [traceId, setTraceId] = useState("");
    const [spanId, setSpanId] = useState("");
    const [commit, setCommit] = useState("");
    const [metadata_parentResourceId, setMetadata_parentResourceId] = useState("");
    const [page, setPage] = useState(1);
    const [responseData, setResponseData] = useState([]);
    const resetForm = () => {
        setLevel("");
        setMessage("");
        setResourceId("");
        setTimeStamp("");
        setTraceId("");
        setSpanId("");
        setCommit("");
        setMetadata_parentResourceId("");
    }
    const submit = async (e) => {
        e.preventDefault();

        let data = {};
        if (level)
            data.level = level;
        if (message)
            data.message = message;
        if (resourceId)
            data.resourceId = resourceId;
        if (timestamp)
            data.timestamp = timestamp;
        if (traceId)
            data.traceId = traceId;
        if (spanId)
            data.spanId = spanId;
        if (commit)
            data.commit = commit;
        if (metadata_parentResourceId)
            data.metadata = { "parentResourceId": metadata_parentResourceId };

        data = JSON.stringify(data)
        console.log(data);
        const res = await fetch('http://localhost:5000/api/query', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
        const response = await res.json();
        setResponseData(await response);

        resetForm();
    }
    const incPage = () => {
        setPage(page + 1);
    }
    const decPage = () => {
        setPage(page - 1);
    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="level" className="form-label" >Level</label>
                    <input type="string" className="form-control" id="level" value={level} onChange={(event) => setLevel(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label" >message</label>
                    <input type="string" className="form-control" id="message" value={message} onChange={(event) => setMessage(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="resourceId" className="form-label" >resourceId</label>
                    <input type="string" className="form-control" id="resourceId" value={resourceId} onChange={(event) => setResourceId(event.target.value)} />
                </div> <div className="mb-3">
                    <label htmlFor="timestamp" className="form-label" >timestamp</label>
                    <input type="string" className="form-control" id="timestamp" value={timestamp} onChange={(event) => setTimeStamp(event.target.value)} />
                </div> <div className="mb-3">
                    <label htmlFor="traceId" className="form-label" >traceId</label>
                    <input type="string" className="form-control" id="traceId" value={traceId} onChange={(event) => setTraceId(event.target.value)} />
                </div> <div className="mb-3">
                    <label htmlFor="spanId" className="form-label" >spanId</label>
                    <input type="string" className="form-control" id="spanId" value={spanId} onChange={(event) => setSpanId(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="commit" className="form-label" >commit</label>
                    <input type="string" className="form-control" id="commit" value={commit} onChange={(event) => setCommit(event.target.value)} />
                </div><div className="mb-3">
                    <label htmlFor="metadata_parentResourceId" className="form-label" >metadata.parentResourceId</label>
                    <input type="string" className="form-control" id="metadata_parentResourceId" value={metadata_parentResourceId} onChange={(event) => setMetadata_parentResourceId(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
            </form>
            <div>
                <QueryTable response={responseData} />
               
            </div>
        </div>
    )
}

export default QueryFilter