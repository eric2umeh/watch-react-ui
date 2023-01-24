import React from 'react'
import styled from 'styled-components'

function CartNav() {
    return (
        <Container>
            <div className="cart" id="cart">
                <i className='bx bx-x cart__close' id="cart-close"></i>

                <h2 className="cart__title-center">My Cart</h2>

                <div className="cart__container">
                    <article className="cart__card">
                        <div className="cart__box">
                            <img src={"assets/images/pictures/watch/featured1.png"} alt="" className="cart__img" />
                        </div>

                        <div className="cart__details">
                            <h3 className="cart__title">Jazzmaster</h3>
                            <span className="cart__price">$1050</span>

                            <div className="cart__amount">
                                <div className="cart__amount-content">
                                    <span className="cart__amount-box">
                                        <i className='bx bx-minus' ></i>
                                    </span>

                                    <span className="cart__amount-number">1</span>

                                    <span className="cart__amount-box">
                                        <i className='bx bx-plus' ></i>
                                    </span>
                                </div>

                                <i className='bx bx-trash-alt cart__amount-trash' ></i>
                            </div>
                        </div>
                    </article>
                    
                    <article className="cart__card">
                        <div className="cart__box">
                            <img src={"../../assets/images/pictures/watch/featured3.png"} alt="" className="cart__img" />
                        </div>

                        <div className="cart__details">
                            <h3 className="cart__title">Rose Gold</h3>
                            <span className="cart__price">$850</span>

                            <div className="cart__amount">
                                <div className="cart__amount-content">
                                    <span className="cart__amount-box">
                                        <i className='bx bx-minus' ></i>
                                    </span>

                                    <span className="cart__amount-number">1</span>

                                    <span className="cart__amount-box">
                                        <i className='bx bx-plus' ></i>
                                    </span>
                                </div>

                                <i className='bx bx-trash-alt cart__amount-trash' ></i>
                            </div>
                        </div>
                    </article>

                    <article className="cart__card">
                        <div className="cart__box">
                            <img src="assets/images/pictures/watch/new1.png" alt="" className="cart__img" />
                        </div>

                        <div className="cart__details">
                            <h3 className="cart__title">Longines Rose</h3>
                            <span className="cart__price">$980</span>

                            <div className="cart__amount">
                                <div className="cart__amount-content">
                                    <span className="cart__amount-box">
                                        <i className='bx bx-minus' ></i>
                                    </span>

                                    <span className="cart__amount-number">1</span>

                                    <span className="cart__amount-box">
                                        <i className='bx bx-plus' ></i>
                                    </span>
                                </div>

                                <i className='bx bx-trash-alt cart__amount-trash' ></i>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="cart__prices">
                    <span className="cart__prices-item">3 items</span>
                    <span className="cart__prices-total">$2880</span>
                </div>
            </div>
        </Container>
    )
}

export default CartNav


const Container = styled.div`
    .cart {
  position: fixed;
  background-color: var(--body-color);
  z-index: var(--z-fixed);
  width: 100%;
  height: 100%;
  top: 0;
  right: -100%;
  padding: 3.5rem 2rem;
  transition: .4s;

  @media screen and (min-width: 767px) {
  .cart {
    width: 420px;
    box-shadow: -2px 0 4px hsla(0, 0%, 15%, .1);
  }
  }
}

.cart__title-center {
  font-size: var(--h2-font-size);
  text-align: center;
  margin-bottom: var(--mb-3);
}

.cart__close {
  font-size: 2rem;
  color: var(--title-color);
  position: absolute;
  top: 1.25rem;
  right: .9rem;
  cursor: pointer;
}

.cart__container {
  display: grid;
  row-gap: 1.5rem;
}

.cart__card {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

.cart__box {
  background-color: var(--container-color);
  padding: .75rem 1.25rem;
  border: 1px solid var(--border-color);
}

.cart__img {
  width: 50px;
}

.cart__title {
  font-size: var(--normal-font-size);
  margin-bottom: .5rem;
}

.cart__price {
  display: block;
  font-size: var(--small-font-size);
  color: var(--first-color);
  margin-bottom: var(--mb-1-5);
}

.cart__amount,
.cart__amount-content{
  display: flex;
  align-items: center;
}

.cart__amount{
  column-gap: 3rem;
}

.cart__amount-content{
  column-gap: 1rem;
}

.cart__amount-box {
  display: inline-flex;
  padding: .25rem;
  background-color: var(--container-color);
  border: 1px solid var(--border-color);
  cursor: pointer;
}

.cart__amount-trash {
  font-size: 1.15rem;
  color: var(--first-color);
  cursor: pointer;
}

.cart__prices {
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
}

.cart__prices-item, 
.cart__prices-total {
  color: var(--title-color);
}

.cart__prices-item {
  font-size: var(--small-font-size);
}

.cart__prices-total {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
}

/* Show cart */
.show-cart {
  right: 0;
}
`;