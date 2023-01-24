import React from 'react'
import styled from 'styled-components'

function Swiper() {
    return (
        <Container>
            
        </Container>
    )
}

export default Swiper


const Container =styled.div`
.swiper-button-next,
.swiper-button-prev {
  top: initial;
  bottom: 5%;
  width: initial;
  height: initial;
  background-color: var(--container-color);
  box-shadow: 0 4px 12px hsla(0, 0%, 20%, .1);
  padding: .25rem;
  font-size: 1.5rem;
  color: var(--first-color);
}

.swiper-button-next {
  right: initial;
  left: 4rem;
}

`;