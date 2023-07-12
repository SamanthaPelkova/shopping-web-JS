import React from 'react'
import "./Product.css"

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="products-in-shop">
      <img className="small" src={product.image} alt={product.name}/>
      <h3>{product.name}</h3>
      <p>{product.tag}</p>
      <div className="product-price">{product.price} Kč</div>
      <div>
        <button onClick={() => onAdd(product)} className='button-to-cart'>Přidat do košíku</button>
      </div>
    </div>
  );
}
