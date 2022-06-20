import React, {useState} from "react";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

const ProjectCard = ({project: {id, title, description, projectLink, buildYear}}) => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <div className="card" key={id} onClick={() => setOpen(o => !o)}>

            <div>
                <p>{buildYear}</p>
            </div>

            <div>
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
                    {projectLink?.length > 3 ? (
                        <p>{projectLink}</p>
                    ) : (
                        <p><em>No link found</em></p>
                    )}
                </div>
            </Popup>
        </div>


    );
}

export default ProjectCard;
