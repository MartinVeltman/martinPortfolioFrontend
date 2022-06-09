import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Books from "./pages/Books";
import Login from "./pages/Login";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/books' element={<Books />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;
