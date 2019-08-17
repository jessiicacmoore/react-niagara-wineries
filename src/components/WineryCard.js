import React from "react";
import { Link } from "react-router-dom"
import placeholderImg from "../img/placeholder.png"

export default function WineryCard({ winery }) {
  const rating = Math.floor(winery.rating)
  return (
    <li className="winery">
      <Link to={`/${winery.id}`}>
        <div className="display-pic">
          <img src={winery.image_url ? winery.image_url : placeholderImg} alt={winery.name} />
        </div>
        <div className="preview-content">
          <h2 className="winery-name">{winery.name}</h2>
          <p className="location">Located in {winery.location.city}</p>
          <p className="rating">
            {
              [...Array(5).keys()].map(starCount => <i className={`fas fa-star${rating >= (starCount + 1) ? ' fill' : ''}`} ></i>)
            }
          </p>
        </div>
      </Link>
    </li>
  );
}
