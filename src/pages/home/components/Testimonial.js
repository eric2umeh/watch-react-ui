import React from 'react'
import styled from 'styled-components';

function Testimonial() {
    return (
        <Container>
            <section className="testimonial section container">
                <div className="testimonial__container grid">
                    <div className="swiper testimonial-swiper">
                        <div className="swiper-wrapper">
                            <div className="testimonial__card swiper-slide">
                                <div className="testimonial__quote">
                                    <i className='bx bxs-quote-alt-left' ></i>
                                </div>
                                <p className="testimonial__description">
                                    They are the best watches that one acquires, also they are always with the latest 
                                    news and trends, with a very comfortable price and especially with the attention 
                                    you receive, they are always attentive to your questions.
                                </p>
                                <h3 className="testimonial__date">March 27. 2021</h3>
        
                                <div className="testimonial__perfil">
                                    <img src="assets/images/pictures/watch/testimonial1.jpg" alt="" className="testimonial__perfil-img" />
        
                                    <div className="testimonial__perfil-data">
                                        <span className="testimonial__perfil-name">Lee Doe</span>
                                        <span className="testimonial__perfil-detail">Director of a company</span>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial__card swiper-slide">
                                <div className="testimonial__quote">
                                    <i className='bx bxs-quote-alt-left' ></i>
                                </div>
                                <p className="testimonial__description">
                                    They are the best watches that one acquires, also they are always with the latest 
                                    news and trends, with a very comfortable price and especially with the attention 
                                    you receive, they are always attentive to your questions.
                                </p>
                                <h3 className="testimonial__date">March 27. 2021</h3>
        
                                <div className="testimonial__perfil">
                                    <img src="assets/images/pictures/watch/testimonial2.jpg" alt="" className="testimonial__perfil-img" />
        
                                    <div className="testimonial__perfil-data">
                                        <span className="testimonial__perfil-name">Samantha Mey</span>
                                        <span className="testimonial__perfil-detail">Director of a company</span>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial__card swiper-slide">
                                <div className="testimonial__quote">
                                    <i className='bx bxs-quote-alt-left' ></i>
                                </div>
                                <p className="testimonial__description">
                                    They are the best watches that one acquires, also they are always with the latest 
                                    news and trends, with a very comfortable price and especially with the attention 
                                    you receive, they are always attentive to your questions.
                                </p>
                                <h3 className="testimonial__date">March 27. 2021</h3>
        
                                <div className="testimonial__perfil">
                                    <img src="assets/images/pictures/watch/testimonial3.jpg" alt="" className="testimonial__perfil-img" />
        
                                    <div className="testimonial__perfil-data">
                                        <span className="testimonial__perfil-name">Raul Zaman</span>
                                        <span className="testimonial__perfil-detail">Director of a company</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiper-button-next">
                            <i className='bx bx-right-arrow-alt' ></i>
                        </div>
                        <div className="swiper-button-prev">
                            <i className='bx bx-left-arrow-alt' ></i>
                        </div>
                    </div>

                    <div className="testimonial__images">
                        <div className="testimonial__square"></div>
                        <img src="assets/images/pictures/watch/testimonial.png" alt="" className="testimonial__img" />
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Testimonial


const Container = styled.div`
  .testimonial__container {
    row-gap: 4rem;

    @media screen and (min-width: 1024px) {
      column-gap: 13rem;
    }
    @media screen and (min-width: 992px) {
      column-gap: 8rem;
      padding-bottom: 4rem;
    }
    @media screen and (min-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
  }

  .testimonial__quote {
    display: inline-flex;
    background-color: var(--container-color);
    padding: .5rem .75rem;
    font-size: 1.5rem;
    color: var(--first-color);
    box-shadow: 0 4px 12px hsla(0, 0%, 20%, .1);
    margin-bottom: var(--mb-2);
  }

  .testimonial__description {
    margin-bottom: var(--mb-1);
  }

  .testimonial__date {
    font-size: var(--normal-font-size);
    margin-bottom: var(--mb-2);
  }

  .testimonial__perfil {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 7rem;
  }

  .testimonial__perfil-img {
    width: 60px;
    height: 60px;
    border-radius: 3rem;
  }

  .testimonial__perfil-data {
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
  }

  .testimonial__perfil-name {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    color: var(--title-color);
  }

  .testimonial__perfil-detail {
    font-size: var(--small-font-size);
  }

  .testimonial__images {
    position: relative;
  }

  .testimonial__img, 
  .testimonial__square {
    width: 250px;

    @media screen and (max-width: 320px) {
      width: 180px;
    }
  }

  .testimonial__square {
    height: 250px;
    background-color: var(--first-color);
    margin-left: auto;

    @media screen and (min-width: 992px) {
      height: 450px;
    }
    @media screen and (max-width: 320px) {
      height: 180px;
    }
  }

  .testimonial__img {
    position: absolute;
    right: 2rem;
    top: 3rem;

    @media screen and (min-width: 1024px) {
      right: 5rem;
      top: 5rem;
    }

    @media screen and (min-width: 992px) {
      width: 450px;
    }
  }

  .testimonial-swiper {
    margin-left: initial;
    margin-right: initial;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    content: '';
  }

`;