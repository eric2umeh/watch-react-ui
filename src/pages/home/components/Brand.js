import React from 'react'
import styled from 'styled-components'
import Home from "../../../assets/images/pictures/watch/home.png";

function Brand() {
    return (
        <Container>
            <section className="home" id="home">
                <div className="home__container container grid">
                    <div className="home__img-bg">
                      <img src={Home} alt="" className="home__img" />
                    </div>
    
                    <div className="home__social">
                        <a href="https://www.facebook.com/" className="home__social-link">
                            Facebook
                        </a>
                        <a href="https://twitter.com/" className="home__social-link">
                            Twitter
                        </a>
                        <a href="https://www.instagram.com/" className="home__social-link">
                            Instagram
                        </a>
                    </div>
    
                    <div className="home__data">
                        <h1 className="home__title">NEW WATCH <br /> COLLECTIONS B720</h1>
                        <p className="home__description">
                            Latest arrival of the new imported watches of the B720 series, 
                            with a modern and resistant design.
                        </p>
                        <span className="home__price">$1245</span>

                        <div className="home__btns">
                            <a href="/" className="button button--gray button--small">
                                Discover
                            </a>

                            <button className="button home__button">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Brand

const Container = styled.div`
  .home__container {
    position: relative;
    row-gap: 2.5rem;

    @media screen and (min-width: 767px) {
      padding-top: 6rem;
      grid-template-columns: 1fr max-content;
      align-items: center;
    }
    
    .home__img-bg {
      background-color: var(--first-color);
      width: 258px;
      height: 430px;
      padding-bottom: 2rem;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      justify-self: flex-end;
      transform: translateX(1.5rem);
      
      @media screen and (max-width: 320px) {
        width: 220px;
      }
      @media screen and (min-width: 576px) {
        width: 340px;
      }
      @media screen and (min-width: 767px) {
        order: 1;
        transform: translate(1.5rem, -6rem);
      }
      @media screen and (min-width: 992px) { 
        width: 480px;
        height: 680px;
      }

      .home__img {
        width: 240px;
        
        @media screen and (min-width: 992px) {
          width: 420px;
        }
      }
    }
    
    .home__social {
      position: absolute;
      top: 35%;
      left: -5rem;
      transform: rotate(-90deg);
      display: flex;
      column-gap: 1rem;
      
      @media screen and (min-width: 767px) {
        top: 47%;
        column-gap: 2rem;
      }
      @media screen and (min-width: 992px) {
        left: -6rem;
      }
    }
    
    .home__social-link {
      font-size: var(--smaller-font-size);
      color: var(--text-color-light);
      transition: .3s;
    }
    
    .home__social-link:hover {
      color: var(--title-color);
    }
  }

  .home__title {
    font-size: var(--biggest-font-size);
    font-weight: var(--font-bold);
    margin-bottom: var(--mb-1);

    @media screen and (max-width: 320px) {
      font-size: var(--h1-font-size);
    }
  }

  .home__data {
    @media screen and (min-width: 767px) {
      padding: 0 0 3rem 6rem;
    }
    @media screen and (min-width: 992px) {
      padding: 0 0 8rem 6rem;
    }
    
    .home__description {
      margin-bottom: var(--mb-1-5);
    }
    
    .home__price {
      display: inline-block;
      font-size: var(--h2-font-size);
      font-weight: var(--font-medium);
      color: var(--first-color);
      margin-bottom: var(--mb-3);
    }
    
    .home__btns {
      display: flex;
      align-items: center;
    }
    
    .home__button {
      box-shadow: 0 12px 24px hsla(0, 0%, 10%, .2);
      
      @media screen and (max-width: 320px) {
        font-size: var(--smaller-font-size);
      }
    }
  }
`;