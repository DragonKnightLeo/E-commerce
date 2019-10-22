import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
      const {id, company, img, info, price, title, inCart} = value.detailProduct
      return (
        <div id="details" className="container py-5">
          <div className="row">
            <div className="col-10 mx-auto text-center my-5">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <img id="detailsImage" src={img} className="img-fluid" alt="product"/>
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2>Model : {title}</h2>
              <h4 className="text=title text-muted mt-3 mb-2">
              Made By : <span>{company}</span>
              </h4>
              <h4>
                Price : <span>$</span>
                {price}
              </h4>
              <p className="font-weight-bold mt-3 mb-0">Product Info</p>
              <p className="text-muted lead">{info}</p>
              <div>
              <Link to='/'>
                <button>
                Back To Products
                </button>
              </Link>
              <button className="ml-2" cart
              disabled={inCart ? true : false}
              onClick={() => {
                value.addToCart(id)
                value.openModel(id)
              }}
              >
                {inCart ? "inCart" : "Add to Cart"}
              </button>
              </div>
            </div>
          </div>
        </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
