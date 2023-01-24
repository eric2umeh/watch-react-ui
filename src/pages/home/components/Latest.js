import React from 'react'
import styled from 'styled-components';
import New1 from "../../../assets/images/pictures/watch/new1.png";
import New2 from "../../../assets/images/pictures/watch/new2.png";
import New3 from "../../../assets/images/pictures/watch/new3.png";
import New4 from "../../../assets/images/pictures/watch/new4.png";

function Latest() {
    return (
        <Container>
            <section className="new section container" id="new">
                <h2 className="section__title">
                    New Arrivals
                </h2>
                
                <div className="new__container">
                    <article className="new__card swiper-slide">
                        <span className="new__tag">New</span>

                        <img src={New1} alt="" className="new__img"/>

                        <div className="new__data">
                            <h3 className="new__title">Longines rose</h3>
                            <span className="new__price">$980</span>
                        </div>

                        <button className="button new__button">ADD TO CART</button>
                    </article>

                    <article className="new__card swiper-slide">
                        <span className="new__tag">New</span>

                        <img src={New2} alt="" className="new__img"/>

                        <div className="new__data">
                            <h3 className="new__title">Jazzmaster</h3>
                            <span className="new__price">$1150</span>
                        </div>

                        <button className="button new__button">ADD TO CART</button>
                    </article>

                    <article className="new__card swiper-slide">
                        <span className="new__tag">New</span>

                        <img src={New3} alt="" className="new__img" />

                        <div className="new__data">
                            <h3 className="new__title">Dreyfuss gold</h3>
                            <span className="new__price">$750</span>
                        </div>

                        <button className="button new__button">ADD TO CART</button>
                    </article>

                    <article className="new__card swiper-slide">
                        <span className="new__tag">New</span>

                        <img src={New4} alt="" className="new__img" />

                        <div className="new__data">
                            <h3 className="new__title">Portuguese rose</h3>
                            <span className="new__price">$1590</span>
                        </div>

                        <button className="button new__button">ADD TO CART</button>
                    </article>                       
                </div>
            </section>
        </Container>
    )
}

export default Latest


const Container = styled.div`
  padding-top: 5rem;

  @media screen and (max-width: 320px) {
    padding-top: 0rem;
  }
  
  .new__container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    gap: 2.5rem;
    
    @media screen and (min-width: 767px) {
      grid-template-columns: repeat(3, 200px);
      justify-content: center;
    }
    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(4, 200px);
    }
  }

  .new__card {
    position: relative;
    text-align: center;
    background-color: ${(props) => props.theme.containerColor};
    padding-top: 2rem;
    border: 1px solid ${(props) => props.theme.borderColor};
    overflow-y: hidden;
    transition: .3s;
  }

  .new__tag {
    background-color: ${(props) => props.theme.firstColor};
    padding: .5rem 1rem;
    color: #fff;
    text-transform: uppercase;
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
    position: absolute;
    top: 1rem;
    right: 1rem;
    transition: .3s;
  }

  .new__img {
    height: 215px;
    margin-bottom: var(--mb-1);
  }

  .new__title, 
  .new__price {
    font-size: var(--h3-font-size);
    font-weight: var(--font-bold);

    @media screen and (min-width: 767px) {
      font-size: var(--normal-font-size);
    }
  }

  .new__title {
    text-transform: uppercase;
    margin-bottom: var(--mb-0-75);
  }

  .new__price {
    display: block;
    color: ${(props) => props.theme.firstColor};
    transition: .3s;
  }

  .new__button {
    font-size: var(--small-font-size);
    transform: translateY(1rem);
    opacity: 0;
  }

  .new__card:hover {
    background-color: ${(props) => props.theme.firstColor};
    box-shadow: 0 12px 32px hsla(0, 0%, 20%, .1);
    padding: 2rem 0 3rem 0;
  }

  .new__card:hover .new__tag {
    background-color: ${(props) => props.theme.buttonColor};
  }

  .new__card:hover .new__button {
    transform: translateY(0);
    opacity: 1;
  }

  .new__card:hover .new__title {
    color: hsl(0, 0%, 15%);
  }

  .new__card:hover .new__price {
    color: hsl(0, 0%, 15%);
    margin-bottom: var(--mb-1-5);
  }
`;