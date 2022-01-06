import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './cart.css';
import PopUp from '../../comps/cartComps/PopUp';
function Cart(props) {
    const navigate = useNavigate();
    const product = JSON.parse(localStorage.getItem('order'));
    !localStorage.getItem("coupon")&&localStorage.setItem('coupon',"promo");
    const [discount, setDsicount] = useState(localStorage.getItem('discount'));
    const [submitted,setSubmitted] = useState(false);

    return (
        <>
        {product&&
        <section className="cart-container">
          <table className="table-products">
            <thead className="table-head">
              <tr className="table-header">
                <th></th>
                <th></th>
                <th>Product</th>
                <th>purchasePrice</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {product.map((product) => (
                <tr className="table-row">
                  <td></td>
                  <td>
                    <img
                      src={product.src}
                      alt="product item"
                      className="image-table"
                    />
                  </td>
                  <td className="title-products">{product.name}</td>
                  <td>JOD {product.purchasePrice}</td>
                  <td>JOD {product.purchasePrice}</td>
                  <td
                    onClick={() => {
                    localStorage.removeItem("order");
                    navigate('/shop');}}
                    className="table-Delete"
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-footer">
            <input
              type="text"
              className="table-input"
              placeholder="Coupon Code"
              id = "coup"
            />
            <button
              className="table-btn"
              onClick={function(){
                  if (document.getElementById("coup").value == localStorage.getItem('coupon')){
                      setDsicount(0.2)
                  }else{
                      alert("No such coupon code found")
                  }
              }}
            >
              Apply coupon
            </button>
          </div>

          <div className="cart-total">
            <div className="cart-totals">
              <h3 className="table-title">Cart Totals</h3>
              <table className="table-total">
                <tr>
                  <td className="table-td">Subtotal</td>
                  <td className="table-subtotal">
                    JOD {product[0].purchasePrice}
                  </td>
                </tr>
                {discount ? (
                  <tr>
                    <td className="table-td">Discount</td>
                    <td className="discount">
                      JOD -{Math.round(discount* product[0].purchasePrice * 100) / 100}
                    </td>
                  </tr>
                ) : (
                  ""
                )}
                <tr>
                  <td className="table-td">Total</td>
                  <td className="table-subtotal">
                    JOD {Math.round(product[0].purchasePrice*( 1- discount) * 100) / 100 }
                  </td>
                </tr>
              </table>
              <div className="btn-checkout">
                    <button 
                    className='table-btn'
                    onClick={()=>{
                        setSubmitted(true)
                    }}>
                    
                        Place Order
                    </button>
              </div>
            </div>
          </div>
        </section>
        }

        {submitted&&
        <PopUp setSubmitted={setSubmitted} />
        }
      </>
    )
}

export default Cart
