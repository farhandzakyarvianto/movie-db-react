import React from "react";

function Popup({ selected, closePopup }) {
    return (
        <section className="popup">
            <div className="content">
                <h2>
                    {selected.Title} <span>({selected.Year})</span>
                </h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    {selected.Poster !== "N/A" ? (
                        <img src={selected.Poster} alt={selected.Title} />
                    ) : (
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/480px-Solid_black.svg.png"
                            alt={selected.Title}
                        />
                    )}
                    <p>{selected.Plot}</p>
                </div>
                <button className="close" onClick={closePopup}>
                    Close
                </button>
            </div>
        </section>
    );
}

export default Popup;
