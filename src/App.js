import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {},
    });
    const apiUrl = "http://www.omdbapi.com/?apikey=2b2d3ab3";

    const search = (e) => {
        if (e.key === "Enter") {
            axios(`${apiUrl}&s=${state.s}`).then(({ data }) => {
                let results = data.Search;

                setState((prevState) => {
                    return { ...prevState, results: results };
                });
            });
        }
    };

    const handleInput = (e) => {
        let value = e.target.value;
        setState((prevState) => {
            return { ...prevState, s: value };
        });
    };

    const openPopup = (id) => {
        axios(`${apiUrl}&i=${id}`).then(({ data }) => {
            let result = data;
            setState((prevState) => {
                return { ...prevState, selected: result };
            });
        });
    };

    const closePopup = () => {
        setState((prevState) => {
            return { ...prevState, selected: {} };
        });
    };

    return (
        <div className="App">
            <header>
                <h1>Movie Database</h1>
            </header>
            <main>
                <Search handleInput={handleInput} search={search} />
                <Results results={state.results} openPopup={openPopup} />
                {typeof state.selected.Title != "undefined" ? (
                    <Popup selected={state.selected} closePopup={closePopup} />
                ) : (
                    false
                )}
            </main>
        </div>
    );
}

export default App;
