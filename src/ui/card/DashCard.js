import styled from 'styled-components';

function FeaturedInfo({title, number, percent, src}) {
    return (
        <Container>
            <div className="featured">
                <span className="featured-icon">
                    <img src={src} alt="" />
                </span>
                <div className="featured-container">
                    <span className="featured-title">{title}</span>
                    <span className="featured-number">{number}</span>
                    <span className="increment">{percent}</span>
                </div>
            </div>
        </Container>
    )
}

export default FeaturedInfo;


const Container = styled.div`
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr 1fr; */
    /* gap: 10px; */

    @media only screen and (max-width: 855px) {
        grid-template-columns: 1fr 1fr;
        max-width: 100%;
        gap: 10px; 
    }

    .featured {
        display: flex;
        /* justify-content: end; */
        align-items: center;
        padding: 10px 27px;
        border-radius: var(--bradius-4);
        background-color: var(--color-light);
    }

    .featured-icon {
        margin: 0 10px 0 -10px;
    }

    .featured-container {
        display: flex;
        flex-direction: column;
    }

    .featured-title {
        font-size: var(--fsize-4);
        color: var(--color-blue-4);
        line-height: var(--lheight-6);
        
    }

    .featured-number {
        font-size: var(--fsize-5);
        color: var(--color-blue-4);
        line-height: var(--lheight-6);
    }

    .increment {
        font-size: var(--fsize-2);
        color: var(--color-blue-3);
        line-height: var(--lheight-2);
    }
`;