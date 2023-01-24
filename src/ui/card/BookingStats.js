import styled from 'styled-components';

function BookingStats({title, status, src}) {
    return (
        <Container>
                <div className="featured-container">
                    <span className="featured-title">{title}</span>
                    <span className="featured-number">{status}</span>
                </div>
                <span className="featured-icon">
                    <img src={src} alt="" />
                </span>
        </Container>
    )
}

export default BookingStats;


const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-radius: var(--bradius-4);
    background-color: var(--color-light);

    .featured-container {
        display: flex;
        flex-direction: column;
    }

    .featured-title {
        color: var(--color-blue-4);
        line-height: var(--lheight-9);
        font-size: var(--fsize-5);
    }

    .featured-number {
        color: var(--color-blue-4);
        line-height: var(--lheight-6);
        font-size: var(--fsize-3);
    }

    .featured-icon {
        img {
            width: 40px;
            height: 40px;
        }
    }
`;