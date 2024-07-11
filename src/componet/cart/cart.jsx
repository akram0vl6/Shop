import React, { Component } from 'react';
import { GoPlusCircle } from "react-icons/go";
import './cart.css'; 

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { img: '/img/sample_mens_suit_1.jpeg', name: 'Пример Костюм мужской', price: '13330.00 руб', category: 'Costume' },
        { img: '/img/sample_woman_suit_1.jpeg', name: 'Пример Костюм женский', price: '13560.00 руб', category: 'Costume' },
        { img: '/img/sample_notebook_1.jpeg', name: 'Ноутбук', price: '129990.00 руб', category: 'Technique' },
        { img: '/img/smartphone_gold_0.jpeg', name: 'Смартфон', price: 'от 99990.00 руб', category: 'Technique' },
        { img: '/img/smart_watch_starlight_0.jpeg', name: 'Смарт-часы', price: '29990.00 руб', category: 'Technique' },
        { img: '/img/pen.jpeg', name: 'Ручка', price: '2790.00 руб', category: 'Other' },
        { img: '/img/sample_desk_1.jpeg', name: 'Стол руководителя', price: '184000.00 руб', category: 'Other' },
        { img: '/img/sample_chair_1.jpeg', name: 'Кресло руководителя', price: '22350.00 руб', category: 'Other' },
      ],
    };
  }

  handleAddItem = (item) => {
    this.props.onAdd(item);
  }

  render() {
    const { items } = this.state;

    return (
      <div className='cart-container'>
        {items.map((item, index) => (
          <div className='cart-1' key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <GoPlusCircle onClick={() => this.handleAddItem(item)} />
          </div>
        ))}
      </div>
    );
  }
}

export default Cart;
