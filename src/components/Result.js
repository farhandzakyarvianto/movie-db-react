import React from "react";

function Result({ result, openPopup }) {
    return (
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            {result.Poster !== "N/A" ? (
                <img src={result.Poster} alt={result.Title} />
            ) : (
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/480px-Solid_black.svg.png"
                    alt={result.Title}
                />
            )}
            <h3>{result.Title}</h3>
        </div>
    );
}

export default Result;
