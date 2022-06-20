import {useEffect, useState} from "react";
import '../App.css';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const API_URL = 'http://localhost:8080/api/v1/book/addBook';

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [releaseyear, setReleaseyear] = useState("");
    const [imagepath, setImagepath] = useState("");
    const [description, setDescription] = useState("");
    const [courseLink, setReview] = useState("");

    const book = {
        title: title,
        author: author,
        releaseyear: releaseyear,
        imagepath: imagepath,
        description: description,
        courseLink: courseLink
    };

    useEffect(() => {


    }, []);

    const addBook = () => {
        if (document.cookie.length > 3) {
            axios.post(`${API_URL}`, book).then(function () {
                toast.success("Book succesfully added")
            }).catch(function () {
                toast.error("Something went wrong. oops!")
            });
        } else {
            toast.error("Are you a admin?")
        }
    }

    return (
        <div className="app">
            <h1>Add read books here!</h1>
            <div className="addContainer">

                <div className="group">
                    <input placeholder="Fill in a title"
                           onChange={(e) => setTitle(e.target.value)}/>
                    <span className="bar"/>
                    <label>Title</label>
                </div>

                <div className="group">
                    <input placeholder="Fill in a author"
                           onChange={(e) => setAuthor(e.target.value)}/>
                    <span className="bar"/>
                    <label>Author</label>
                </div>

                <div className="group">
                    <input type="number" placeholder="Fill in the releaseyear"
                           onChange={(e) => setReleaseyear(e.target.value)}/>
                    <span className="bar"/>
                    <label>Releaseyear</label>
                </div>

                <div className="group">
                    <input placeholder="Give the imagepath"
                           onChange={(e) => setImagepath(e.target.value)}/>
                    <span className="bar"/>
                    <label>Imagepath</label>
                </div>

                <div className="group">
                    <input placeholder="Fill in a description"
                           onChange={(e) => setDescription(e.target.value)}/>
                    <span className="bar"/>
                    <label>Description</label>
                </div>

                <div className="group">
                    <input placeholder="Fill in a courseLink"
                           onChange={(e) => setReview(e.target.value)}/>
                    <span className="bar"/>
                    <label>Review</label>
                </div>

                <button type="button" onClick={addBook}>Add book</button>
            </div>
            <ToastContainer theme="dark"/>
        </div>


    );
}

export default AddBook;
