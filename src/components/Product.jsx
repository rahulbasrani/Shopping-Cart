import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="mt-4 ml-3">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="wht">₹{product.price}</div>
      <div className="btnC">
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}