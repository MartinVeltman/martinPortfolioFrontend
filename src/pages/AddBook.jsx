import {useEffect, useState} from "react";
import '../App.css';
import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/book/createBook';

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [releaseyear, setReleaseyear] = useState("");
    const [imagepath, setImagepath] = useState("");
    const [description, setDescription] = useState("");
    const [review, setReview] = useState("");

    const book = {
        title: title,
        author: author,
        releaseyear: releaseyear,
        imagepath: imagepath,
        description: description,
        review: review
    };

    useEffect(() => {


    }, []);

    const addBook = () => {
        if (localStorage.getItem('JWT') != null && localStorage.getItem('JWT').length > 0) {
            axios.post(`${API_URL}`, book).then(response => console.log(response));
        } else {
            console.log("pech")
        }
    }

    return (
        <div className="app">
            <h1>Add read books here!</h1>
            <div className="addContainer">

                <div className="group">
                    <input placeholder="Fill in a title"
                           onChange={(e) => setTitle(e.target.value)}/>
                    <span className="bar"></span>
                    <label>Title</label>
                </div>

                <div className="group">
                    <input placeholder="Fill in a author"
                           onChange={(e) => setAuthor(e.target.value)}/>
                    <span className="bar"></span>
                    <label>Author</label>
                </div>

                <div className="group">
                    <input type="number" placeholder="Fill in the releaseyear"
                           onChange={(e) => setReleaseyear(e.target.value)}/>
                    <span className="bar"></span>
                    <label>Releaseyear</label>
                </div>

                <div className="group">
                    <input placeholder="Give the imagepath"
                           onChange={(e) => setImagepath(e.target.value)}/>
                    <span className="bar"></span>
                    <label>Imagepath</label>
                </div>

                <div className="group">
                    <input placeholder="Fill in a description"
                           onChange={(e) => setDescription(e.target.value)}/>
                    <span className="bar"></span>
                    <label>Description</label>
                </div>

                <div className="group">
                    <input placeholder="Fill in a review"
                           onChange={(e) => setReview(e.target.value)}/>
                    <span className="bar"></span>
                    <label>Review</label>
                </div>

                <button type="button" onClick={addBook}>Add book</button>
            </div>
        </div>


    );
}

export default AddBook;
