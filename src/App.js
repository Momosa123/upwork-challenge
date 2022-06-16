import './App.css';
import {Routes, Route} from 'react-router-dom'
import JobBoard from './JobBoard'
import Login from './Login'
import JobDetail from './JobDetail'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route path='/jobs ' element={<JobBoard/>}/>
        <Route path='/jobs:id' element={<JobDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
