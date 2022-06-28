import {useEffect, useRef, useState} from "react";
import S3 from "react-aws-s3";
import {toast, ToastContainer} from "react-toastify";
import axios from "axios";
import '../App.css';

window.Buffer = window.Buffer || require("buffer").Buffer;
const API_URL = 'http://localhost:8080/api/v1/aws/creds';

const UploadImage = (props) => {
    const fileInput = useRef();
    const [accesskey, setAccesskey] = useState("");
    const [secretkey, setSecretkey] = useState("");

    useEffect(() => {
        getAwsCreds();
    }, []);

    const getAwsCreds = () => {
        axios.get(`${API_URL}`).then(function (response) {
            setAccesskey(response.data.accesskey);
            setSecretkey(response.data.secretkey);
        })
    }

    const handleSubmit = (fileName) => {
        const file = fileInput.current.files[0];
        const config = {
            bucketName: "martinsportfoliobucket",
            region: "eu-west-3",
            accessKeyId: accesskey,
            secretAccessKey: secretkey
        };
        const ReactS3Client = new S3(config);

        ReactS3Client.uploadFile(file, fileName).then((data) => {
            if (data.status === 204) {
                toast.success("Image succesfully uploaded to AWS")
            } else {
                toast.error("Image upload failed")
            }
        })

    };

    props.childRef.current = {
        handleSubmit: handleSubmit
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className="fileInput" accept="image/jpg" type="file" ref={fileInput}/>
            </form>
            <ToastContainer theme="dark"/>
        </>
    );
};

export default UploadImage;

