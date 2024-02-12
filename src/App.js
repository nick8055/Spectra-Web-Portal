import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Career from './pages/careers/career';
import Internship from './pages/internships/internship';
import Hackathon from './pages/hackathons/hackathon';
import Placement from './pages/placements/placement';
import Dashboard from './pages/dashboard/dashboard';
import Navbar from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Sidebar/>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/careers' element={<Career/>}/>
          <Route path='/internships' element={<Internship/>}/>
          <Route path='/hackathons' element={<Hackathon/>}/>
          <Route path='/placements' element={<Placement/>}/>
          <Route path="*" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
