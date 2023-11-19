# Dyte_Assignment
# Log Ingestor And Query Interface

##### Overview
This system is designed to efficiently ingest, store, and query vast volumes of log data. It comprises a Log Ingestor responsible for accepting log data over HTTP and a Query Interface that enables users to perform full-text searches and apply filters on various log attributes.

### Project Overview
**Log ingestor Frontend**
![Log Ingestor Demo](https://github.com/mihiraswal0/Dyte_Assignment/blob/main/tutorial/Screenshot%20(1152).png)

**Query Interface Filter**
![Query Interface](https://github.com/mihiraswal0/Dyte_Assignment/blob/main/tutorial/Screenshot%20(1153).png)

**Adding Log to Log Ingestor Page***
![Add log](https://github.com/mihiraswal0/Dyte_Assignment/blob/main/tutorial/Screenshot%20(1154).png)

**Search Results**
![Search Result](https://github.com/mihiraswal0/Dyte_Assignment/blob/main/tutorial/Screenshot%20(1155).png)

## Technologies Used
- **Database**: Mongo Db
- **Frontend**: React js
- **Backend**: Node js

- ## Features Implemented
1. **Log Ingestor**
   - Ingests logs in the provided JSON format via HTTP on port `3000`.
   - Ensures scalability to handle high log volumes.
   - Optimizes I/O operations and database write speeds.
2. **Query Interface**
   - Offers a user-friendly interface (Web UI/CLI) for full-text search.
   - Includes filters for:
       - level
       - message
       - resourceId
       - timestamp
       - traceId
       - spanId
       - commit
       - metadata.parentResourceId
   - Implements efficient search algorithms for quick results.
  
 ## How to Run the Project
 ### Installation

 1. Clone the repository
   ```bash
   git clone 
   ```
2. Navigate to client
   ```bash
   cd client
   ```
3. Install the node modules and run the frontend
   ```bash
   npm install
   npm start
   ```
4.  Navigate to server and install the node modules and run the frontend
   ```bash
  cd ../server
   npm install
   npm start
   ```
5. Start Log ingestor server
  http://localhost:3000

###Tutorial

##Log Ingestor


##Query Interface

##Future Improvements
- **Scalability**: Enhance inserting of large amount of logs using Apache Kafka.
- **Security**: Security can be improved by introducing authentication and authorization
- **Database**: Database can be scaled using Master Slave Archtitecture and indexing can be used for query optimsation.
  
