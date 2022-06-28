import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
import {useEffect, useState} from "react";
import ProjectCard from "../components/ProjectCard";

const API_URL = 'http://localhost:8080/api/v1/project';

function Projects() {
    const [projects, setProjects] = useState([]);


    useEffect(() => {
        fetch(`${API_URL}` + '/getProjects').then((res) => res.json())
            .then((json) => {
                setProjects(json);
                toast.dark("Click on a card to know more about it!");
            })


    }, []);


    return (
        <div className="app">
            <h1>Projects i've done</h1>


            {projects?.length > 0 ? (
                <div className="container">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Projects found</h2>
                </div>
            )}
            <ToastContainer theme="dark"/>
        </div>
    );
}

export default Projects;
