import React from "react";

export default function WineryCard({ winery }) {
  const rating = Math.floor(winery.rating)
  return (
    <li className="winery">
      <div className="display-pic">
        <img src={winery.image_url} alt={winery.name} />
      </div>
      <div className="preview-content">
        <h2 className="winery-name">{winery.name}</h2>
        <p className="location">Located in {winery.location.city}</p>
        <p className="rating">
          <i className={`fas fa-star ${rating >= 1 ? 'fill' : ''}`}></i>
          <i className={`fas fa-star ${rating >= 2 ? 'fill' : ''}`}></i>
          <i className={`fas fa-star ${rating >= 3 ? 'fill' : ''}`}></i>
          <i className={`fas fa-star ${rating >= 4 ? 'fill' : ''}`}></i>
          <i className={`fas fa-star ${rating >= 5 ? 'fill' : ''}`}></i>
        </p>
      </div>
    </li>
  );
}
