import React from "react";

const ShopCard = ({
  handleClick,
  item,
  price,
  name,
  img,
  category,
  seller,
}) => {
  return (
    <>
      <div className="flex-col">
        <div className="img-container">
          <img src={img} alt="" className="img" />
        </div>
        <div className="header-area">
          <h4>{name}</h4>
          <p className="price">Price: {price}</p>
        </div>

        <div className="footer-area">
          <p>{category}</p>
          <p>{seller}</p>
        </div>
        <div>
          <button
            className="product-body-footer"
            onClick={() => handleClick(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopCard;