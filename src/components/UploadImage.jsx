import {useRef} from "react";
import S3 from "react-aws-s3";

window.Buffer = window.Buffer || require("buffer").Buffer;

const UploadImage = (props) => {
    const fileInput = useRef();

    const handleSubmit = () => {
        // e.preventDefault();
        const file = fileInput.current.files[0];
        const newFileName = "-file";
        const config = {
            bucketName: "martinsportfoliobucket",
            dirName: "portfolio",
            region: "eu-west-3",
            accessKeyId: "AKIA6OGGYVVIDFY2MF57",
            secretAccessKey: "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"
        };
        const ReactS3Client = new S3(config);


        ReactS3Client.uploadFile(file, newFileName).then((data) => {
            console.log(data);
            if (data.status === 204) {
                console.log("uploaded");
            } else {
                console.log("failed");
            }
        })

    };

    props.childRef.current = {
        handleSubmit: handleSubmit
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" ref={fileInput}/>
                <br/>
                <button type="submit"> Upload</button>
            </form>
        </>
    );
};

export default UploadImage;

