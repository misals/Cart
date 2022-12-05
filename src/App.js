import React from "react";
import Cart from './Cart';
import Navbar from "./Navbar";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://www.oris.ch/data/29224_Highlighted_Calibre_110_b_980x790px_weiss-1-Linie_ds.jpg',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-125834/Apple-iPhone-14_FINAL_featured-image-packshot-review.jpg',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SX679_.jpg',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  handleIncreaseQuantity = (product) => {
    console.log('Please increase the quantity of product:', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
        products : products
    })
  }

  handleDecreaseQuantity = (product) => {
    console.log('Please increase the quantity of product:', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty > 0) {
        products[index].qty -= 1;
    }
    this.setState({
        products : products
    })
  }

  handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id)

    this.setState({
        products : items
    })
  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;

    })
    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.forEach((product) => {
      cartTotal += product.qty * product.price;

    })
    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style = {{fontSize:20, padding:25}} >Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}


export default App;
