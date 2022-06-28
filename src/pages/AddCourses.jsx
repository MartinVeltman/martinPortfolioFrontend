import React, {useEffect, useRef, useState} from "react";
import '../App.css';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UploadImage from "../components/UploadImage";
import {v4 as uuidv4} from "uuid";

const API_URL = 'http://localhost:8080/api/v1/course/addCourse';

function AddCourse() {
    let uploadImageRef = useRef();

    const [title, setTitle] = useState("");
    const [instructor, setInstructor] = useState("");
    const [yearOfAchievement, setYearOfAchievement] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [courseLink, setCourseLink] = useState("");
    const [description, setDescription] = useState("");

    const course = {
        title: title,
        instructor: instructor,
        yearOfAchievement: yearOfAchievement,
        imageUrl: imageUrl,
        courseLink: courseLink,
        description: description,
    };

    useEffect(() => {
        setImageUrl(uuidv4() +'.jpg');
    }, []);

    function checkInputs() {
        return !(title === "" || instructor === "" || yearOfAchievement === "" || courseLink === "" || description === "");
    }

    function clearFields() {
        setTitle("");
        setInstructor("");
        setYearOfAchievement("");
        setImageUrl("");
        setCourseLink("");
        setDescription("");
    }

    const addCourse = () => {
        if (checkInputs()) {
            if (document.cookie.length > 3) {
                axios.post(`${API_URL}`, course).then(function () {
                    toast.success("Course succesfully added")
                    uploadImageRef.current.handleSubmit(imageUrl);
                    clearFields();
                }).catch(function () {
                    toast.error("Something went wrong. oops!");
                });
            } else {
                toast.error("Are you a admin?");
            }
        } else {
            toast.error("Please fill in all fields");
        }
    }

    return (
        <div className="app">
            <div className="formContainer">
                <h1>Add your Courses here!</h1>

                <div className="group">
                    <input placeholder="Fill in a title"
                           onChange={(e) => setTitle(e.target.value)}/>
                    <span className="bar"/>
                    <label>Title</label>
                </div>

                <div className="group">
                    <input placeholder="Who was the instructor?"
                           onChange={(e) => setInstructor(e.target.value)}/>
                    <span className="bar"/>
                    <label>Instructor</label>
                </div>

                <div className="group">
                    <input type="number" placeholder="Fill in the year you've finished the Course"
                           onChange={(e) => setYearOfAchievement(e.target.value)}/>
                    <span className="bar"/>
                    <label>Complete year</label>
                </div>

                <div className="group">
                    <input placeholder="Give the path to the course"
                           onChange={(e) => setCourseLink(e.target.value)}/>
                    <span className="bar"/>
                    <label>Course link</label>
                </div>

                <UploadImage childRef={uploadImageRef}/>

                <div className="group">
                    <input placeholder="Fill in a description"
                           onChange={(e) => setDescription(e.target.value)}/>
                    <span className="bar"/>
                    <label>Description</label>
                </div>

                <button type="button" onClick={addCourse}>Add Course</button>
            </div>
            <ToastContainer theme="dark"/>
        </div>
    );
}

export default AddCourse;
