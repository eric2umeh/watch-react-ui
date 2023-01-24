import React from 'react'
import styled from 'styled-components';
import Story from "../../../assets/images/pictures/watch/story.png";

function AboutUs() {
    return (
        <Container>
            <section className="story section container">
                <div className="story__container grid">
                    <div className="story__data">
                        <h2 className="section__title story__section-title">
                            Our Story
                        </h2>
    
                        <h1 className="story__title">
                            Inspirational Watch of <br /> this year
                        </h1>
    
                        <p className="story__description">
                            The latest and modern watches of this year, is available in various 
                            presentations in this store, discover them now.
                        </p>
    
                        <a href="/" className="button button--small">Discover</a>
                    </div>

                    <div className="story__images">
                        <img src={Story} alt="" className="story__img" />
                        <div className="story__square"></div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default AboutUs


const Container = styled.div`
  .story__container {
    row-gap: 7.5rem;

    @media screen and (min-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      padding-top: 4rem;
    }
    @media screen and (min-width: 992px) {
      column-gap: 8rem;
    }
    @media screen and (min-width: 1024px) {
      column-gap: 10rem;
      padding-top: 8rem;
    }
  }

  .story__title {
    font-size: var(--h1-font-size);
    margin-bottom: var(--mb-1);
  }

  .story__section-title {
    @media screen and (min-width: 767px) {
      text-align: initial;
    }
  }

  .story__section-title::before {
    @media screen and (min-width: 767px) {
      margin: initial;
    }
  }

  .story__description {
    margin-bottom: var(--mb-2-5);
  }

  .story__images {
    position: relative;

    @media screen and (min-width: 767px) {
      order: -1;
    }
  }

  .story__img, 
  .story__square {
    width: 250px;
    
    @media screen and (max-width: 320px) {
      width: 180px;
    }
    @media screen and (min-width: 992px) {
      width: 450px;
    }
  }

  .story__square {
    height: 250px;
    background-color: var(--first-color);

    @media screen and (max-width: 320px) {
      height: 180px;
    }
    @media screen and (min-width: 992px) {
      height: 450px;
    }
  }

  .story__img {
    position: absolute;
    left: 3rem;
    top: -3rem;

    @media screen and (min-width: 1024px) {
      left: 5rem;
      top: -5rem;
    }
  }
  `;