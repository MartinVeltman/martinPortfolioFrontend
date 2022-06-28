import '../App.css';
import {useNavigate} from "react-router-dom";

function AdminAdd() {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    return (
        <div className="app">
            <h1>Adminpanel</h1>
            <h3>Wat wil je toevoegen?</h3>
            <button type="button" onClick={() => routeChange('/admin/books')}>Add Books</button>
            <button type="button" onClick={() => routeChange('/admin/courses')}>Add Course</button>
            <button type="button" onClick={() => routeChange('/admin/projects')}>Add Project</button>
        </div>

    );
}

export default AdminAdd;
