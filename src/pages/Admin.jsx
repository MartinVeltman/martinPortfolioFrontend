import {useEffect} from "react";
import '../App.css';

function Admin() {


    useEffect(() => {


    }, []);

    return (
        <div className="app">
            <h1>Adminpanel</h1>
            <h3>Wat wil je toevoegen?</h3>
            <button type="button">Boek</button>
            <button type="button">Course</button>
            <button type="button">Project</button>
        </div>


    );
}

export default Admin;
