import '../App.css';
import {useEffect, useState} from "react";
import searchIcon from '../search.svg';
import BookCard from "../components/BookCard";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const API_URL = 'http://localhost:8080/api/v1/book';

function Books() {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch(`${API_URL}` + '/getBooks').then((res) => res.json())
            .then((json) => {
                setBooks(json);
                toast.dark("Click on a card to know more about it!");
            })

    }, []);

    const searchBooks = async (title) => {
        const {data} = await axios.get(`${API_URL}/getBooksByTitle?title=${title}`);
        setBooks(data);
    };

    return (
        <div className="app">
            <h1>Books i've read</h1>

            <div className="search">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for books"
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchBooks(searchTerm)}
                />
            </div>

            {books?.length > 0 ? (
                <div className="container">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No books found</h2>
                </div>
            )}
            <ToastContainer theme="dark"/>
        </div>
    );
}

export default Books;
