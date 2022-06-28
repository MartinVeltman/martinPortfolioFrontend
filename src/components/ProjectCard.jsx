import React, {useState} from "react";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import styled from "styled-components";
import axios from "axios";
import {toast} from "react-toastify";

const API_URL = 'https://martin-portfolio-backend.herokuapp.com/api/v1/project/delete';

const DeleteButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  width: 120px;
  height: 30px;
`;

const ProjectCard = ({project: {id, title, description, imageUrl, githubLink, buildYear}}) => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    function deleteProject() {
        axios.delete(`${API_URL}/${id}`,).then(function () {
            toast.success("Project succesfully deleted")
        }).catch(function () {
            toast.error("Something went wrong. oops!")
        });
    }

    return (
        <div className="card" key={id} onClick={() => setOpen(o => !o)}>

            <div>
                <p>{buildYear}</p>
            </div>

            <div>
                <img src={'https://martinsportfoliobucket.s3.eu-west-3.amazonaws.com/' + imageUrl} alt={title}/>
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
                    <h3>Link to github</h3>
                    {githubLink?.length > 3 ? (
                        <p>{githubLink}</p>
                    ) : (
                        <p><em>No link found</em></p>
                    )}
                    {document.cookie.length > 3 ? (<DeleteButton onClick={deleteProject}>Remove</DeleteButton>) : (
                        <p/>)}
                </div>
            </Popup>
        </div>


    );
}

export default ProjectCard;
