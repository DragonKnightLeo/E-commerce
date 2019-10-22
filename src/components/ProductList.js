import React, { Component } from "react"
import Product from "./Product"
import Title from "./Title"
import { ProductConsumer } from '../context'
import { Link } from "react-router-dom"

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Link to="/">
            <img id="imgBanner" src="../../img/203.jpg" alt="store" />
          </Link>
        </div>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      return <Product key={product.id} product=
                      {product} />
                    })
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
          <div className="container-1">
            <img style={{width: '100vw', height: '200px'}} src="../../img/Greenbg.jpg" alt="store" />
            <div class="top-left">Garden Center</div>
            <div class="top-right">Advice</div>
            <div class="bottom-left">Installation & Design</div>
              <Link to="/">
                <img id="logobottom" src="../../img/plant.jpg" alt="store" className="navbar-brand" />
              </Link>
          </div>
      </React.Fragment>
    )
  }
}
