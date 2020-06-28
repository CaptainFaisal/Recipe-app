import React from "react";

const Card = ({ label, imageUrl, ingredients }) => {
  return (
    <div className="col" style={{ minWidth: "inherit", margin: "20px 0" }}>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={imageUrl} alt={label} />
        <div
          className="card-body"
          style={{ height: "200px", overflow: "auto" }}
          id="card"
        >
          <h5 className="card-title">{label}</h5>
          <p className="card-text">
            <ol>
              {ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
