import React from 'react';
import "./Basket.css"

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Produkty</h2>
      <div>
        {cartItems.length === 0 && <div>Košík je prázdný</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
                <button onClick={() => onRemove(item)} className="remove">-</button>{" "}
                <button onClick={() => onAdd(item)} className="add">+</button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x {item.price.toFixed(2)} Kč
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Cena produktů</div>
              <div className="col-1 text-right">{itemsPrice.toFixed(2)} Kč</div>
            </div>
            <div className="row">
              <div className="col-2">DPH</div>
              <div className="col-1 text-right">{taxPrice.toFixed(2)} Kč</div>
            </div>
            <div className="row">
              <div className="col-2">Doprava</div>
              <div className="col-1 text-right">
                {shippingPrice.toFixed(2)}
               Kč</div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Celková cena</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice.toFixed(2)} Kč</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("Implement Checkout!")} className='button-buy-now'>
                Koupit nyní
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
