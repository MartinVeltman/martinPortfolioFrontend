import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
import {useEffect, useState} from "react";
import CourseCard from "../components/CourseCard";

const API_URL = 'http://localhost:8080/api/v1/course';

function Courses() {
    const [searchTerm, setSearchTerm] = useState("");
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch(`${API_URL}` + '/getCourses').then((res) => res.json())
            .then((json) => {
                setCourses(json);
                toast.dark("Click on a card to know more about it!");
            })


    }, []);

    // const searchCourses = async (title) => {
    //     const {data} = await axios.get(`${API_URL}/getBooksByTitle?title=${title}`);
    //
    //     setBooks(data);
    // };

    return (
        <div className="app">
            <h1>Courses i've completed</h1>

            {/*<div className="search">*/}
            {/*    <input*/}
            {/*        value={searchTerm}*/}
            {/*        onChange={(e) => setSearchTerm(e.target.value)}*/}
            {/*        placeholder="Search for books"*/}
            {/*    />*/}
            {/*    <img*/}
            {/*        src={searchIcon}*/}
            {/*        alt="search"*/}
            {/*        onClick={() => searchBooks(searchTerm)}*/}
            {/*    />*/}
            {/*</div>*/}

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
