import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
import {useEffect, useState} from "react";
import CourseCard from "../components/CourseCard";

const API_URL = 'https://martin-portfolio-backend.herokuapp.com/api/v1/course';

function Courses() {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch(`${API_URL}` + '/getCourses').then((res) => res.json())
            .then((json) => {
                setCourses(json);
                toast.dark("Click on a card to know more about it!");
            })

    }, []);

    return (
        <div className="app">
            <h1>Courses i've completed</h1>

            {courses?.length > 0 ? (
                <div className="container">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Courses found</h2>
                </div>
            )}
            <ToastContainer theme="dark"/>
        </div>
    );
}

export default Courses;
