import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <footer className="footer section">
            <div className="footer__container container grid">
                <div className="footer__content">
                    <h3 className="footer__title">Our information</h3>

                    <ul className="footer__list">
                        <li>1234 - Peru</li>
                        <li>La Libertad 43210</li>
                        <li>123-456-789</li>
                    </ul>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">About Us</h3>

                    <ul className="footer__links">
                        <li>
                            <a href="/" className="footer__link">Support Center</a>
                        </li>
                        <li>
                            <a href="/" className="footer__link">Customer Support</a>
                        </li>
                        <li>
                            <a href="/" className="footer__link">About Us</a>
                        </li>
                        <li>
                            <a href="/" className="footer__link">Copy Right</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Product</h3>

                    <ul className="footer__links">
                        <li>
                            <a href="/" className="footer__link">Road bikes</a>
                        </li>
                        <li>
                            <a href="/" className="footer__link">Mountain bikes</a>
                        </li>
                        <li>
                            <a href="/" className="footer__link">Electric</a>
                        </li>
                        <li>
                            <a href="/" className="footer__link">Accesories</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Social</h3>

                    <ul className="footer__social">
                        <a href="https://www.facebook.com/" className="footer__social-link">
                            <i className='bx bxl-facebook'></i>
                        </a>

                        <a href="https://twitter.com/" className="footer__social-link">
                            <i className='bx bxl-twitter' ></i>
                        </a>

                        <a href="https://www.instagram.com/" className="footer__social-link">
                            <i className='bx bxl-instagram' ></i>
                        </a>
                    </ul>
                </div>
            </div>

            <span className="footer__copy">&#169; Bedimcode. All rigths reserved</span>
        </footer>
        </Container>
    )
}

export default Footer


const Container = styled.div`
    padding-top: 5rem;

    @media screen and (max-width: 320px) {
        padding-top: 0rem;
    }
    
    .footer__container {
        row-gap: 2rem;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 3rem;

        @media screen and (min-width: 576px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (min-width: 767px) {
            grid-template-columns: repeat(4, max-content);
            justify-content: space-between;
        }
    }

    .footer__title {
        font-size: var(--h2-font-size);
        margin-bottom: var(--mb-1-5);

        @media screen and (min-width: 767px) {
            font-size: var(--h3-font-size);
        }
    }

    .footer__list, 
    .footer__links {
        display: flex;
        flex-direction: column;
        row-gap: .75rem;

    }

    .footer__link {
        color: ${(props) => props.theme.textColor};
    }

    .footer__link:hover {
        color: ${(props) => props.theme.titleColor};
    }

    .footer__social {
        display: flex;
        column-gap: 1rem;
    }

    .footer__social-link {
        font-size: 1.25rem;
        color: ${(props) => props.theme.textColor};
    }

    .footer__social-link:hover {
        color: ${(props) => props.theme.titleColor};
    }

    .footer__copy {
        display: block;
        margin: 3.5rem 0 1rem 0;
        text-align: center;
        font-size: var(--smaller-font-size);
        color: var(--text-color-light);
    }
`;