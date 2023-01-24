import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ToggleTheme from "../../ui/core/ToggleTheme";
import Featured1 from "../../assets/images/pictures/watch/featured1.png";
import Featured3 from "../../assets/images/pictures/watch/featured3.png";
import New1 from "../../assets/images/pictures/watch/new1.png";

function Nav({ iconBtn, theme, setTheme }) {

    const location = useLocation();

    // mobile menu
    const [click, setClick] = useState(false);
    const [click1, setClick1] = useState(false);
    const handleClick = () => setClick(!click);
    const handleClick1 = () => setClick1(!click1);
    const closeMobileMenu = () => setClick(false)
    const closeMobileMenu1 = () => setClick1(false)

    // Scroll Header
    const headerRef = useRef(null)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll", null)
        };
    }, []);


    return (

        <Container>
            <header className= "header" id="header" ref={headerRef}>
                <nav className="nav container">
                    <a href="/" className="nav__logo">
                        <i className='bx bxs-watch nav__logo-icon'></i> Swiss
                    </a>

                    <div className="nav__menu" id="nav-menu">
                        <ul className={click ? "nav__list actives" : "nav__webview"}>

                            <li className={ location.pathname === "/" ? "nav__item active-link" : "nav__item"}>
                                <a href="/" className="nav__link" onClick={closeMobileMenu}>Home</a>
                            </li>
                            <li className={ location.pathname === "/product" ? "nav__item active-link" : "nav__item"}>
                                <a href="/product" className= "nav__link" onClick={closeMobileMenu}>Products</a>
                            </li>
                            <li className={ location.pathname === "/history" ? "nav__item active-link" : "nav__item"}>
                                <a href="/history" className="nav__link" onClick={closeMobileMenu}>History</a>
                            </li>
                            <li className={ location.pathname === "/login" ? "nav__item active-link" : "nav__item"}>
                                <a href="/login" className="nav__link" onClick={closeMobileMenu}>Login</a>
                            </li>
                        </ul>

                        <div className="nav__close" onClick={closeMobileMenu} id="nav-close">
                            {click && <i className='bx bx-x' ></i>}
                        </div>
                    </div>

                    <div className="nav__btns">
                        {/* <!-- Theme change button --> */}
                        <ToggleTheme theme={theme} setTheme={setTheme} />

                        <div className="nav__shop" onClick={handleClick1} id="cart-shop">
                        {click1 ? <i className='bx bx-x cart__close' id="cart-close"></i> : <i className='bx bx-shopping-bag' ></i>}
                        </div>

                        <div className="nav__toggle" onClick={handleClick} id="nav-toggle">
                            {click ? "" : <i className='bx bx-grid-alt'></i>}
                        </div>
                    </div>
                </nav>
            </header>


            {/* <!--==================== CART ====================--> */}
            <div className={click1 ? "cart action " : "cart "} id="cart">
                <i className='bx bx-x cart__close' onClick={closeMobileMenu1} id="cart-close"></i>

                <h2 className="cart__title-center">My Cart</h2>

                <div className="cart__container">
                {/* <div className={click ? "cart__container" : ""}> */}
                    <article className="cart__card">
                        <div className="cart__box">
                            <img src={Featured1} alt="" className="cart__img" />
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
                            <img src={Featured3} alt="" className="cart__img" />
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
                            <img src={New1} alt="" className="cart__img" />
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
    );
}

export default Nav;


const Container = styled.div`
    .header {
        width: 100%;
        background: transparent;
        position: fixed;
        top: 0;
        left: 0;
        z-index: var(--z-fixed);

        &.shrink {
            height: 50px;
            background-color: ${(props) => props.theme.bodyColor};
            box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.75);
            z-index: 99;

            @media only screen and (max-width: 767px) {
                height: 50px;
            }
        } 

        .nav {
            height: var(--header-height);
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media screen and (min-width: 767px) {
                height: calc(var(--header-height) + .5rem);
                justify-content: initial;
                column-gap: 3rem;
            }

            .nav__logo, 
            .nav__toggle, 
            .nav__shop, 
            .nav__close {
                color: ${(props) => props.theme.titleColor}
            }  

            .nav__toggle, 
            .nav__close {
                @media screen and (min-width: 767px) {
                    display: none;
                }
            }

            .nav__logo {
                text-transform: uppercase;
                font-weight: var(--font-bold);
                letter-spacing: 1px;
                display: inline-flex;
                align-items: center;
                column-gap: .25rem;
            }

            .nav__logo-icon {
                font-size: 1.25rem;
            }
            
            .nav__list {
                @media screen and (min-width: 767px) {
                    display: flex;
                    flex-direction: row;
                    column-gap: 3.5rem;
                }
            }
            
            .nav__list.actives {
                @media screen and (max-width: 767px) {
                    display: flex;
                    flex-direction: column;
                    position: fixed;
                    background-color: ${(props) => props.theme.bodyColor};
                    top: 0;
                    /* right: -40%; */
                    height: 70%;
                    width: 100%;
                    padding: 6rem 2rem 3.5rem;
                    row-gap: 3rem;
                }
            }
            
            .nav__webview {
                display: flex;
                column-gap: 2.5rem;

                @media screen and (max-width: 767px) {
                    display: none;
                }
            }   
                
            .active-link a {
                color: var(--first-color);
            }
            
            .nav__link {
                color: ${(props) => props.theme.titleColor};
                font-weight: var(--font-medium);
                font-size: var(--h3-font-size);

                @media screen and (max-width: 767px) {
                    text-transform: initial;
                    font-size: var(--h2-font-size);
                }
            }

            .nav__link:hover {
                color: var(--first-color);
            }
            
            .nav__close {
                font-size: 2rem;
                position: absolute;
                top: .9rem;
                right: 1.25rem;
                cursor: pointer;
            }
            

            .nav__btns {
                display: flex;
                align-items: center;
                column-gap: 1rem;

                @media screen and (min-width: 767px) {
                    margin-left: auto;
                }

                .nav__toggle, 
                .nav__shop {
                    font-size: 1.25rem;
                    cursor: pointer;
                }

            }
        }
    }

  /* <!--==================== CART ====================--> */

    .cart {
        position: fixed;
        background-color: ${(props) => props.theme.bodyColor};
        z-index: var(--z-fixed);
        padding: 3.5rem 2rem;
        display: none;
        
        @media screen and (min-width: 767px) {
            width: 320px;
            box-shadow: -2px 0 4px hsla(0, 0%, 15%, .1);
            border-radius: 0px 0 0 10px;
        }
    }
    
    .cart.action {
        right: 0;
        display: inline;
    }
    
    .cart__close {
        font-size: 2rem;
        color: ${(props) => props.theme.titleColor};
        position: absolute;
        top: 1.25rem;
        right: .9rem;
        cursor: pointer;
    }

    .cart__title-center {
        font-size: var(--h2-font-size);
        text-align: center;
        margin-bottom: var(--mb-3);
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
        background-color: ${(props) => props.theme.containerColor};
        padding: .75rem 1.25rem;
        border: 1px solid ${(props) => props.theme.borderColor};
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
        color: ${(props) => props.theme.firstColor};
        margin-bottom: var(--mb-1-5);
    }

    .cart__amount,
    .cart__amount-content{
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.titleColor};
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
        background-color: ${(props) => props.theme.containerColor};
        border: 1px solid ${(props) => props.theme.borderColor};
        cursor: pointer;
    }

    .cart__amount-trash {
        font-size: 1.15rem;
        color: ${(props) => props.theme.firstColor};
        cursor: pointer;
    }

    .cart__prices {
        margin-top: 6rem;
        display: flex;
        justify-content: space-between;
    }

    .cart__prices-item, 
    .cart__prices-total {
        color: ${(props) => props.theme.titleColor};
    }

    .cart__prices-item {
        font-size: var(--small-font-size);
    }

    .cart__prices-total {
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
    }
`;