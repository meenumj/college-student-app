import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import StudentLogin from './Components/StudentLogin';
import AddStudent from './Components/AddStudent';
import AddMark from './Components/AddMark';
import ViewStudent from './Components/ViewStudent';
import ViewMarks from './Components/ViewMarks';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AdminLogin />}/>
      <Route path='/studentlogin' element={<StudentLogin />}/>
      <Route path='/addstudent' element={<AddStudent />} />
      <Route path='/addmark' element={<AddMark />} />
      <Route path='/viewstudent' element={<ViewStudent />} />
      <Route path='/viewmark' element={<ViewMarks />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
