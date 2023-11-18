import React, { useState } from 'react'

const QueryFilter = () => {
    const [level, setLevel] = useState("");
    const [message, setMessage] = useState("");
    const [resourceId, setResourceId] = useState("");
    const [timestamp, setTimeStamp] = useState("");
    const [traceId, setTraceId] = useState("");
    const [spanId, setSpanId] = useState("");
    const [commit, setCommit] = useState("");
    const [metadata_parentResourceId, setMetadata_parentResourceId] = useState("");
   
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="level" className="form-label" value={level} onChange={setLevel}>Level</label>
                    <input type="string" className="form-control" id="level" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label" value={message} onChange={setMessage}>message</label>
                    <input type="string" className="form-control" id="message" />
                </div>
                <div className="mb-3">
                    <label htmlFor="resourceId" className="form-label" value={resourceId} onChange={setResourceId}>resourceId</label>
                    <input type="string" className="form-control" id="resourceId" />
                </div> <div className="mb-3">
                    <label htmlFor="timestamp" className="form-label" value={timestamp} onChange={setTimeStamp}>timestamp</label>
                    <input type="string" className="form-control" id="timestamp" />
                </div> <div className="mb-3">
                    <label htmlFor="traceId" className="form-label" value={traceId} onChange={setTraceId}>traceId</label>
                    <input type="string" className="form-control" id="traceId" />
                </div> <div className="mb-3">
                    <label htmlFor="spanId" className="form-label" value={spanId} onChange={setSpanId}>spanId</label>
                    <input type="string" className="form-control" id="spanId" />
                </div>
                <div className="mb-3">
                    <label htmlFor="commit" className="form-label" value={commit} onChange={setCommit}>commit</label>
                    <input type="string" className="form-control" id="commit" />
                </div><div className="mb-3">
                    <label htmlFor="metadata_parentResourceId" className="form-label" value={metadata_parentResourceId} onChange={setMetadata_parentResourceId}>metadata.parentResourceId</label>
                    <input type="string" className="form-control" id="metadata_parentResourceId" />
                </div>

                <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
            </form>
        </div>
    )
}

export default QueryFilter