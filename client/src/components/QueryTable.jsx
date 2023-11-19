import React from "react";

const QueryTable = (props) => {
    const { response } = props;
    return (
        <div>
            <div>
                <h1>Search Results</h1>
            </div>
            <div>
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            Level
                        </div>
                        <div className="col">
                            Message
                        </div>
                        <div className="col">
                            ResourceId
                        </div>
                        <div className="col">
                            TimeStamp
                        </div>
                        <div className="col">
                            TraceId
                        </div>
                        <div className="col">
                            SpanId
                        </div>
                        <div className="col">
                            Commit
                        </div>
                        <div className="col">
                            ParentResourceId
                        </div>
                    </div>
                    {
                response.map((res) => {
                    return (
                        <div className="row align-items-start" key={res._id}>
                            <div className="col">
                                {res.level}
                            </div>
                            <div className="col">
                                {res.message}
                            </div>
                            <div className="col">
                                {res.resourceId}
                            </div>
                            <div className="col">
                                {res.timestamp}
                            </div>
                            <div className="col">
                                {res.traceId}
                            </div>
                            <div className="col">
                                {res.spanId}
                            </div>
                            <div className="col">
                                {res.commit}
                            </div>
                            <div className="col">
                                {res.metadata.parentResourceId}
                            </div>
                        </div>
                    )
                })
            }


                </div>
                
            </div>
           
        </div>
    );
};

export default QueryTable;
