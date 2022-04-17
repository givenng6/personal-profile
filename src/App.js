import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path = '/' element={<Home/>}></Route>
            <Route path ="/profile" element ={<Profile/>}></Route>
            <Route path ="/education" element ={<Education/>}></Route>
            <Route path = "/skills" element ={<Skills/>}></Route>
            <Route path = "/projects" element = {<Projects/>}></Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
