import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import '../App.css';
import {toast, ToastContainer} from "react-toastify";

const Contact = () => {
    const form = useRef();

    const checkName = () => {
        let nameValue = document.getElementById("nameInput").value;
        if (nameValue !== undefined && nameValue.length > 1) {
            return true;
        } else {
            toast.error("Fill in a valid name");
            return false;
        }
    }

    const checkEmail = () => {
        let emailValue = document.getElementById("emailInput").value;
        if (emailValue !== undefined && emailValue.length > 3) {
            return true;
        } else {
            toast.error("Fill in a valid email");
            return false;
        }
    }

    const checkMessage = () => {
        let messageValue = document.getElementById("messageInput").value;
        if (messageValue !== undefined && messageValue.length > 5) {
            return true;
        } else {
            toast.error("Fill in a valid message");
            return false;
        }
    }


    const sendEmail = (e) => {
        e.preventDefault();

        if (checkName() && checkEmail() && checkMessage()) {
            emailjs
                .sendForm(
                    "service_yinydnz",
                    "template_97fsa5b",
                    form.current,
                    "IIChv7E2925_u12D_"
                )
                .then(
                    (result) => {
                        toast.success("Email sent to Martin")
                    },
                    (error) => {
                        toast.error("Something went wrong try again or email: martinveltman@live.nl");
                    }
                );
        }
    };

    return (
        <div className="app">
            <div className="formContainer">
                <h1>Send me a message</h1>
                <form ref={form} onSubmit={sendEmail}>

                    <div className="group">
                        <input id="nameInput" type="text" name="user_name"/>
                        <span className="bar"/>
                        <label>Name</label>
                    </div>

                    <div className="group">
                        <input id="emailInput" type="email" name="user_email"/>
                        <span className="bar"/>
                        <label>Email</label>
                    </div>

                    <textarea placeholder="Type your message here..." id="messageInput" name="message"/>

                    <button className="submit-input" type="submit" value="Send">Send</button>
                </form>
            </div>
            <ToastContainer theme="dark"/>
        </div>
    );
};

export default Contact;



