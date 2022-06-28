import React, {useEffect, useRef, useState} from "react";
import '../App.css';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UploadImage from "../components/UploadImage";
import {v4 as uuidv4} from "uuid";

const API_URL = 'http://localhost:8080/api/v1/book/addBook';

function AddBook() {
    let uploadImageRef = useRef();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [review, setReview] = useState("");

    useEffect(() => {
        setImageUrl(uuidv4() + '.jpg');
    }, []);

    function clearFields() {
        setTitle("");
        setAuthor("");
        setReleaseYear("");
        setImageUrl("");
        setDescription("");
        setReview("");
    }

    function checkFields() {
        return !(title === "" || author === "" || releaseYear === "" || description === "" || review === "");

    }

    const book = {
        title: title,
        author: author,
        releaseYear: releaseYear,
        imageUrl: imageUrl,
        description: description,
        review: review
    };

    const addBook = () => {
        if (checkFields()) {
            if (document.cookie.length > 3) {
                axios.post(`${API_URL}`, book).then(function () {
                    toast.success("Book succesfully added");
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
                <h1>Add read books here!</h1>

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
                           onChange={(e) => setReleaseYear(e.target.value)}/>
                    <span className="bar"/>
                    <label>Releaseyear</label>
                </div>

                <UploadImage childRef={uploadImageRef}/>

                <div className="group">
                    <input placeholder="Fill in a description"
                           onChange={(e) => setDescription(e.target.value)}/>
                    <span className="bar"/>
                    <label>Description</label>
                </div>

                <div className="group">
                    <input placeholder="Fill in a review"
                           onChange={(e) => setReview(e.target.value)}/>
                    <span className="bar"/>
                    <label>Review</label>
                </div>

                <button type="submit" onClick={addBook}>Add book</button>
            </div>
            <ToastContainer theme="dark"/>

        </div>
    );
}

export default AddBook;
