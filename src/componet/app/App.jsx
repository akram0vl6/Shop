import React, { Component } from 'react';
import Header from '../header/Header';
import Cart from '../cart/cart';
import Catagories from '../Catagories/Catagories';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItems: [],
      orders: [],
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deliteOrder = this.deliteOrder.bind(this);
  }

  addToOrder(item) {
    const isInArray = this.state.orders.some(el => el.name === item.name);
  
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
  
  deliteOrder(itemToRemove) {
    this.setState({
      orders: this.state.orders.filter(item => item !== itemToRemove)
    });
  }

  render() {
    return (
      <div>
        <Header orders={this.state.orders} deliteOrder={this.deliteOrder}/>
        <Catagories chooseCategory={this.chooseCategory}/>
        <Cart onAdd={this.addToOrder} />
      </div>
    );
  }
}

export default App;
