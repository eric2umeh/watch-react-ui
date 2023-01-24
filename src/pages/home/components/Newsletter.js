import React from 'react'
import styled from 'styled-components'

function Newsletter() {
    return (
        <Container>
            <section className="newsletter section container">
                <div className="newsletter__bg grid">
                    <div>
                        <h2 className="newsletter__title">Subscribe Our <br/> Newsletter</h2>
                        <p className="newsletter__description">
                            Don't miss out on your discounts. Subscribe to our email 
                            newsletter to get the best offers, discounts, coupons, 
                            gifts and much more.
                        </p>
                    </div>

                    <form action="" className="newsletter__subscribe">
                        <input type="email" placeholder="Enter your email" className="newsletter__input" />
                        <button className="button">
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </section>
        </Container>
    )
}

export default Newsletter


const Container = styled.div`
  padding-top: 5rem;

  .newsletter__bg {
    background-color: ${(props) => props.theme.firstColor};
    padding: 3rem 1.5rem;
    text-align: center;
    row-gap: 2.5rem;

    @media screen and (min-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
    @media screen and (min-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
    @media screen and (min-width: 767px) {
      text-align: initial;
      column-gap: 2rem;
      padding: 4.5rem;
    }
  }

  .newsletter__title {
    font-size: var(--h1-font-size);
    color: hsl(0, 0%, 15%);
    margin-bottom: var(--mb-1-5);
  }

  .newsletter__description {
    color: hsl(0, 0%, 35%);
  }

  .newsletter__subscribe {
    display: flex;
    flex-direction: column;
    row-gap: .75rem;

    @media screen and (min-width: 767px) {
      flex-direction: row;
    }
  }

  .newsletter__input {
    border: none;
    outline: none;
    background-color: hsl(0, 0%, 94%);
    padding: 1.25rem 1rem;
    color: hsl(0, 0%, 15%);

    @media screen and (min-width: 767px) {
      width: 100%;
    }
  }
`;
