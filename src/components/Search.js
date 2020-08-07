import React from "react";

function Search({ handleInput, search }) {
    return (
        <section className="search__box__wrap">
            <input
                type="text"
                placeholder="Search for a movie..."
                className="search__box"
                onChange={handleInput}
                onKeyPress={search}
            />
        </section>
    );
}

export default Search;
