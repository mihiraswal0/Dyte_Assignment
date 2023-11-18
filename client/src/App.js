import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LogIngestor from './components/LogIngestor';
import QueryInterface from './components/QueryInterface';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LogIngestor/>}/>
    <Route path='/query' element={<QueryInterface/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
