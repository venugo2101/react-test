import {Component} from 'react';

const Item = (movieDetails) => {

    return (
          <div className="image-item">
            <img width="200px" src={movieDetails.poster_240x372}/>
            <div>{movieDetails.title} ({movieDetails.release-year})</div>
          </div>
    )
}

export default Item;
