import React from "react";
import { Link } from "react-router-dom"

export default function WineryCard({ winery }) {
  const rating = Math.floor(winery.rating)
  return (
    <li className="winery">
      <Link to={`/${winery.id}`}>
        <div className="display-pic">
          <img src={winery.image_url ? winery.image_url : "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"} alt={winery.name} />
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
      </Link>
    </li>
  );
}
