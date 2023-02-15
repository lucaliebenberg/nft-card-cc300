import React from "react";

// imports
import NFTImage from "../assets/nft-image.png";
import Avatar from "../assets/avatar-image.png";

const Card = (props) => {
  return (
    <>
      <div className="card__wrapper">
        <div className="card__top">
          <div className="card__top_wrapper">
            {/* props.image */}
            <img
              src={NFTImage}
              alt="NFT Card Image"
              className="card__top_image"
            />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="card__bottom">
          <p className="card__bottom_title">
            {/* props.title */}
            #3429
          </p>
          <p className="card__bottom_description">
            {/* props.description */}
            Our Equilibrium collection promotes balance and calm.
          </p>

          <div className="card__bottom_price">
            <p className="card__bottom_price_title">
              {/* props.price */}
              0.041 ETH
            </p>
            <p className="card__bottom_price_time">3 days left</p>
          </div>
          <div className="card__bottom_line"></div>

          <div className="card__bottom_user">
            <div className="card__bottom_user_img">
              <img
                src={Avatar}
                alt="Avatar Image"
                className="card__bottom_user_image"
              />
            </div>
            <p className="card__bottom_user_name">
              Creation of{" "}
              <span className="card__bottom_user_name_white">Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
