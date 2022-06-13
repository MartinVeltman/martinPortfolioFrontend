import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Books from "./pages/Books";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AddBook from "./pages/AddBook";
import AddCourses from "./pages/AddCourses";
import AddProject from "./pages/AddProject";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/books' element={<Books/>}/>
                    <Route path='/admin' element={<Admin/>}/>
                    <Route path='/admin/books' element={<AddBook/>}/>
                    <Route path='/admin/courses' element={<AddCourses/>}/>
                    <Route path='/admin/projects' element={<AddProject/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App;
