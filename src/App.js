import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom'
import JobBoard from './JobBoard'
import Login from './Login'
import JobDetail from './JobDetail'
import {useEffect, useState} from "react"

function App() {
  let navigate = useNavigate()
  const [loggin, setLoggin] = useState(false)

  useEffect(
    ()=>{
      if(loggin)
      {
        navigate("/jobs")
      }
    },[loggin]
  )
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login loggin={loggin} setLoggin={setLoggin}/>} />
        <Route path='/jobs' element={<JobBoard/>}/>
        <Route path='/jobs:id' element={<JobDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
