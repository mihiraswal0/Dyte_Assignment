import React from "react";

const QueryTable = (props) => {
    const { response } = props;
    return (
        <div>
            <div>
                <h1>Search Results</h1>
            </div>
            {response.length?<table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Level</th>
                        <th scope="col">Message</th>
                        <th scope="col">ResourceId</th>
                        <th scope="col">TimeStamp</th>
                        <th scope="col">TraceId</th>
                        <th scope="col">SpanId</th>
                        <th scope="col">Commit</th>
                        <th scope="col">ParentResourceId</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        response.map((res) => {
                            return (
                                <tr>
                                    <td className="col">
                                        {res.level}
                                    </td>
                                    <td className="col">
                                        {res.message}
                                    </td>
                                    <td className="col">
                                        {res.resourceId}
                                    </td>
                                    <td className="col">
                                        {res.timestamp}
                                    </td>
                                    <td className="col">
                                        {res.traceId}
                                    </td>
                                    <td className="col">
                                        {res.spanId}
                                    </td>
                                    <td className="col">
                                        {res.commit}
                                    </td>
                                    <td className="col">
                                        {res.metadata.parentResourceId}
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>:<h3>No Data To Display...!</h3>
            
            }
            

        </div>
    );
};

export default QueryTable;
