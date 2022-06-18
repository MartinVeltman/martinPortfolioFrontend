import {useEffect} from "react";
import '../App.css';
import {useNavigate} from "react-router-dom";

function AdminAdd() {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }


    useEffect(() => {


    }, []);

    return (
        <div className="app">
            <h1>Adminpanel</h1>
            <h3>Wat wil je toevoegen?</h3>
            <button type="button" onClick={ event => routeChange('/admin/books')}>Add Books</button>
            <button type="button" onClick={ event => routeChange('/admin/courses')}>Add Course</button>
            <button type="button" onClick={ event => routeChange('/admin/projects')}>Add Project</button>
        </div>


    );
}

export default AdminAdd;
