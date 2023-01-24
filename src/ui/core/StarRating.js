import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import styled from 'styled-components';

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <Container>
            {[ ...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input 
                            type="radio" 
                            name="rating"
                            value={ratingValue} 
                            onClick={() => (setRating(ratingValue))}
                        />
                        <FaStar 
                            className="star"
                            size={20} 
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(ratingValue)} 
                            onMouseLeave={() => setHover(null)} 
                        />
                    </label>
                );
            })}
        </Container>
    )
}

export default StarRating


const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    input[type="radio"] {
        display: none;
    }

    .star {
        cursor: pointer;
        transition: color 200ms;
    }
`;