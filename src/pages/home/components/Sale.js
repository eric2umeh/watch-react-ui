import React from 'react'
import styled from 'styled-components';
import Featured1 from "../../../assets/images/pictures/watch/featured1.png";
import Featured3 from "../../../assets/images/pictures/watch/featured3.png";

function Sale() {
    return (
        <Container>
            <section className="featured section container" id="featured">
                <h2 className="section__title">
                    Featured
                </h2>

                <div className="featured__container grid">
                    <article className="featured__card">
                        <span className="featured__tag">Sale</span>

                        <img src={Featured1} alt="" className="featured__img" />

                        <div className="featured__data">
                            <h3 className="featured__title">Jazzmaster</h3>
                            <span className="featured__price">$1050</span>
                        </div>

                        <button className="button featured__button">ADD TO CART</button>
                    </article>

                    <article className="featured__card">
                        <span className="featured__tag">Sale</span>

                        <img src={Featured3} alt="" className="featured__img" />

                        <div className="featured__data">
                            <h3 className="featured__title">Ingersoll</h3>
                            <span className="featured__price">$250</span>
                        </div>

                        <button className="button featured__button">ADD TO CART</button>
                    </article>

                    <article className="featured__card">
                        <span className="featured__tag">Sale</span>

                        <img src={Featured3} alt="" className="featured__img" />

                        <div className="featured__data">
                            <h3 className="featured__title">Rose gold</h3>
                            <span className="featured__price">$890</span>
                        </div>

                        <button className="button featured__button">ADD TO CART</button>
                    </article>
                </div>
            </section>
        </Container>
    )
}

export default Sale


const Container = styled.div`
  .featured__container {
    row-gap: 2.5rem;

    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      align-items: flex-start;
      gap: 1.5rem;
    }
    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(3, 312px);
      padding-top: 2rem;
    }
  }

  .featured__card {
    position: relative;
    text-align: center;
    padding-top: 2rem;
    border: 1px solid ${(props) => props.theme.borderColor};
    overflow-y: hidden;
    transition: .3s;
  }

  .featured__tag {
    background-color: ${(props) => props.theme.firstColor};
    padding: .5rem 1rem;
    color: #fff;
    text-transform: uppercase;
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
    position: absolute;
    transform: rotate(-90deg);
    left: -1rem;
    top: 3rem;
  }

  .featured__img {
    height: 214px;
    margin-bottom: var(--mb-1);
  }

  .featured__title, 
  .featured__price {
    font-size: var(--h3-font-size);
    font-weight: var(--font-bold);

    @media screen and (min-width: 767px) {
      font-size: var(--normal-font-size);
    }
  }

  .featured__title {
    text-transform: uppercase;
    margin-bottom: var(--mb-0-75);
  }

  .featured__price {
    display: block;
    color: ${(props) => props.theme.firstColor};
    transition: .3s;
  }

  .featured__button {
    font-size: var(--small-font-size);
    transform: translateY(1rem);
    opacity: 0;
  }

  .featured__card:hover {
    box-shadow: 0 12px 32px hsla(0, 0%, 20%, .1);
    padding: 2rem 0 3rem 0;
  }

  .featured__card:hover .featured__button {
    transform: translateY(0);
    opacity: 1;
  }

  .featured__card:hover .featured__price {
    margin-bottom: var(--mb-1-5);
  }

`;