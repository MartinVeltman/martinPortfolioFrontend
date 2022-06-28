import {useEffect, useState} from "react";
import '../App.css';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const API_URL = 'http://localhost:8080/api/v1/project/addProject';

function AddProject() {
    const [title, setTitle] = useState("");
    const [buildYear, setbuildYear] = useState("");
    const [imagepath, setImagepath] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [description, setDescription] = useState("");

    function checkInputs() {
        return !(title === "" || buildYear === "" || githubLink === "" || description === "" || imagepath === "");
    }

    function clearFields() {
        setTitle("");
        setbuildYear("");
        setGithubLink("");
        setDescription("");
        setImagepath("");
    }


    const project = {
        title: title,
        buildYear: buildYear,
        githubLink: githubLink,
        description: description,
        imagepath: imagepath
    };

    useEffect(() => {


    }, []);

    const addProject = () => {
        if (checkInputs()) {
            if (document.cookie.length > 3) {
                axios.post(`${API_URL}`, project).then(function () {
                    toast.success("Project succesfully added")
                    clearFields();
                }).catch(function () {
                    toast.error("Something went wrong. oops!")
                });
            } else {
                toast.error("Are you a admin?")
            }
        } else {
            toast.error("Fill in all the fields correctly")
        }

    }

    return (
        <div className="app">
            <div className="formContainer">
                <h1>Add your projects here!</h1>

                <div className="group">
                    <input placeholder="Fill in a title"
                           onChange={(e) => setTitle(e.target.value)}/>
                    <span className="bar"/>
                    <label>Title</label>
                </div>

                <div className="group">
                    <input type="number" placeholder="Fill in the year you've build the project"
                           onChange={(e) => setbuildYear(e.target.value)}/>
                    <span className="bar"/>
                    <label>Buildyear</label>
                </div>

                <div className="group">
                    <input placeholder="Give the imagepath"
                           onChange={(e) => setImagepath(e.target.value)}/>
                    <span className="bar"/>
                    <label>Imagepath</label>
                </div>

                <div className="group">
                    <input placeholder="Give the path to github"
                           onChange={(e) => setGithubLink(e.target.value)}/>
                    <span className="bar"/>
                    <label>Github link</label>
                </div>

                <div className="group">
                    <input placeholder="Fill in a description"
                           onChange={(e) => setDescription(e.target.value)}/>
                    <span className="bar"/>
                    <label>Description</label>
                </div>

                <button type="button" onClick={addProject}>Add project</button>
            </div>
            <ToastContainer theme="dark"/>
        </div>
    );
}

export default AddProject;
