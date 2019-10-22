import React, { Component } from "react"

import { ProductConsumer } from "../context"

import { Link } from "react-router-dom"

export default class Model extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modelOpen, closeModel } = value
          const { img, title, price } = value.modelProduct
          if (!modelOpen) {
            return null
          } else {
            return (
                <div id="model" className="container">
                  <div className="row">
                    <div id="modelDisplay" className="mx-auto col-sm-6 col-md-6 col-lg-6 text-center text-capitalize p-5">
                        <h5>item added to the cart</h5>
                        <img id="modelimage" src={img} className="img-fluid" alt="product" />
                        <h5>{title}</h5>
                        <h5 className="text-muted">price : $ {price}
                        </h5>
                        <Link to='/'>
                        <button id="modelButton" onClick={() => closeModel()}>
                        Continue Shopping
                        </button>
                        </Link>
                        <Link to='/cart'>
                        <button onClick={() => closeModel()}>
                        Go to Cart
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
            )
          }
        }}
      </ProductConsumer>
    )
  }
}
