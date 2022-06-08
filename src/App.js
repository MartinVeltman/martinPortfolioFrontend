import './App.css';
import {useEffect, useState} from "react";
import searchIcon from './search.svg';
import BookCard from "./BookCard";

const API_URL = 'http://localhost:8080/api/v1/book';

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}`+ '/getBooks').then((res) => res.json())
            .then((json) => {
                setBooks(json);
            })

    }, []);

    const searchBooks = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setBooks(data.Search);
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
                    {books.map((books) => (
                        <BookCard book={books}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No books found</h2>
                </div>
            )}
        </div>
    );
}

export default App;
