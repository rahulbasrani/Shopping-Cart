import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-md-4">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div className="wht">Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-md-4 mt-4 wht">{item.name}</div>
            <div className="col-md-4 mt-4">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-md-4 wht mt-4 text-right">
              {item.qty} x ₹{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-md-6 wht">Items Price</div>
              <div className="col-md-5 wht text-right">₹{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-md-6 wht">Tax Price</div>
              <div className="col-md-5 text-right wht">₹{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-md-6 wht">Shipping Price</div>
              <div className="col-md-5 text-right wht">
                ₹{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 wht">
                <strong>Total Price</strong>
              </div>
              <div className="col-md-5 text-right wht">
                <strong>₹{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row wht">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}