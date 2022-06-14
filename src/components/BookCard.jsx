import React, {useState} from "react";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

const BookCard = ({book: {id, title, imagePath, autor, description, review, releaseYear}}) => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <div>
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
            <div>
                <button type="button" className="button" onClick={() => setOpen(o => !o)}>
                    Controlled Popup
                </button>
                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <div className="modal">
                        <a className="close" onClick={closeModal}>
                            &times;
                        </a>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
                        omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
                        ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
                        doloribus. Odit, aut.
                    </div>
                </Popup>
            </div>
        </div>


    );
}

export default BookCard;
