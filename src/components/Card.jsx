import React from "react";

// imports
import NFTImage from "../assets/nft-image.png";

const Card = () => {
  return (
    <>
      <div className="card__wrapper">
        <div className="card__top">
          <img
            src={NFTImage}
            alt="NFT Card Image"
            className="card__top_image"
          />
        </div>
        <div className="card__bottom">
          <p className="card__bottom_title">#3429</p>
          <p className="card__bottom_description">
            Our Equilibrium collection promotes balance and calm.
          </p>

          <div className="card__bottom_price">
            <p className="card__bottom_price_title">0.041 ETH</p>
            <p className="card__bottom_price_time">3 days left</p>
          </div>
          <div className="card__bottom_user">
            <div className="card__bottom_user_img"></div>
            <p className="card__bottom_user_name">Creation of Jules Wyvern</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
