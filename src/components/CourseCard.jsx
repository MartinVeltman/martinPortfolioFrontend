import React, {useState} from "react";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

const CourseCard = ({course: {id, title, instructor, description, courseLink, finishYear, imagePath}}) => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <div className="card" key={id} onClick={() => setOpen(o => !o)}>

            <div>
                <p>{finishYear}</p>
            </div>

            <div>
                <img src={imagePath} alt={title}/>
            </div>

            <div>
                <span>{instructor}</span>
                <h3>{title}</h3>
            </div>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                    <a className="close" onClick={closeModal}>
                        &times;
                    </a>
                    <h3>Description</h3>
                    {description.length > 0 ? (
                        <p>{description}</p>
                    ) : (
                        <p><em>No description found</em></p>
                    )}
                    <h3>Review</h3>
                    {courseLink.length > 3 ? (
                        <p>{courseLink}</p>
                    ) : (
                        <p><em>No link found</em></p>
                    )}
                </div>
            </Popup>
        </div>


    );
}

export default CourseCard;
