import React, {useState} from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const BookCard = ({book: {id, title, imagePath, autor, description, review, releaseYear}}) => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

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
            {/*<Popup trigger={} position="right center">*/}
            {/*    <div>Popup content here !!</div>*/}
            {/*</Popup>*/}
        </div>


    );
}

export default BookCard;
