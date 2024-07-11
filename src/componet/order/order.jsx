import React from 'react';
import './order.css';

const Order = ({ item, deliteOrder }) => {
  return (
    <div className='order-item'>
      <img src={item.img} alt={item.name} />
      <div className='item-details'>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
      <div className='item-actions'>
        <button onClick={() => deliteOrder(item)}>Удалить</button>
      </div>
    </div>
  );
}

export default Order;
