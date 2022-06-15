import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Books from "./pages/Books";
import Login from "./pages/Login";
import AdminAdd from "./pages/AdminAdd";
import AddBook from "./pages/AddBook";
import AddCourses from "./pages/AddCourses";
import AddProject from "./pages/AddProject";
import Navbar from "./components/Navbar";
import AdminPanel from "./pages/AdminPanel";
import {createTheme} from "@mui/material";
import {green, purple} from "@mui/material/colors";



function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/books' element={<Books/>}/>
                    <Route path='/admin' element={<AdminPanel/>}/>
                    <Route path='/adminAdd' element={<AdminAdd/>}/>
                    <Route path='/admin/books' element={<AddBook/>}/>
                    <Route path='/admin/courses' element={<AddCourses/>}/>
                    <Route path='/admin/projects' element={<AddProject/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App;
