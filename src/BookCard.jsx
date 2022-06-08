import React from "react";

const BookCard = ({book: {id, title, imagePath, autor, description, review, releaseYear}}) => {
    return (
        <div className="book" key={id}>
            <div>
                <p>{releaseYear}</p>
            </div>

            <div>
                <img src={imagePath} alt={title}/>
            </div>

            <div>
                <span>{autor}</span>
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default BookCard;
