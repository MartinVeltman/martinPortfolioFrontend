import React, {useState} from "react";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import axios from "axios";
import {toast} from "react-toastify";
import styled from "styled-components";

const API_URL = 'http://localhost:8080/api/v1/book/delete';

const DeleteButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  width: 120px;
  height: 30px;
`;

const BookCard = ({book: {id, title, imageUrl, author, description, review, releaseYear}}) => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    function deleteBook() {
        axios.delete(`${API_URL}/${id}`,).then(function () {
            toast.success("Book succesfully deleted")
        }).catch(function () {
            toast.error("Something went wrong. oops!")
        });
    }

    return (
        <div className="card" key={id} onClick={() => setOpen(o => !o)}>

            <div>
                <p>{releaseYear}</p>
            </div>

            <div>
                <img src={'https://martinsportfoliobucket.s3.eu-west-3.amazonaws.com/' + imageUrl} alt={title}/>
            </div>

            <div>
                <span>{author}</span>
                <h3>{title}</h3>
            </div>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                    <a className="close" onClick={closeModal}>
                        &times;
                    </a>
                    <h3>Description</h3>
                    {description?.length > 0 ? (
                        <p>{description}</p>
                    ) : (
                        <p><em>No description found</em></p>
                    )}
                    <h3>Review</h3>
                    {review?.length > 0 ? (
                        <p>{review}</p>
                    ) : (
                        <p><em>No review found</em></p>
                    )}
                    {document.cookie.length > 3 ? (<DeleteButton onClick={deleteBook}>Remove</DeleteButton>) : (<p/>)}
                </div>
            </Popup>
        </div>

    );
}

export default BookCard;
