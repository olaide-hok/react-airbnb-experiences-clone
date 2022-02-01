import React from 'react';
// {img, rating, reviewCount, location, title, price, openSpots}
export default function Card(exp) {
    let badgeText;
    if (exp.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (exp.location === "Online") {
        badgeText = "ONLINE"
    }

  return (
      <div className="card">
          {badgeText && <div className="card--badge"> {badgeText} </div>}
          <img src={`../images/${exp.coverImg}`} alt="airbnb exp" className="card--image" />
          <div className="card--stats">
              <img src="../images/star.png" alt="review star" className="card--star" />
              <span>{exp.stats.rating}</span>
              <span className='gray'>({exp.stats.reviewCount}) .</span>
              <span className='gray'>{exp.location}</span>
          </div>
          <p className='card--title'>{exp.title}</p>
          <p className='card--price'> <span className='bold'>From ${exp.price}</span> /person </p>
      </div>
  );
}

