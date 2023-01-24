import React from 'react'
import styled from 'styled-components'

function ScrollUp() {
    return (
        <Container>
            
        </Container>
    )
}

export default ScrollUp


const Container = styled.div`
    .scrollup {
  position: fixed;
  right: 1rem;
  bottom: -30%;
  background-color: var(--container-color);
  box-shadow: 0 4px 12px hsla(0, 0%, 20%, .1);
  display: inline-flex;
  padding: .25rem;
  z-index: var(--z-tooltip);
  opacity: .8;
  transition: .4s;

  @media screen and (min-width: 1024px) {
    right: 3rem;
  }
}

.scrollup:hover {
  opacity: 1;
}

.scrollup__icon {
  font-size: 1.5rem;
  color: var(--first-color);
}

/* Show Scroll Up*/
.show-scroll {
  bottom: 3rem;
}

/*=============== SCROLL BAR ===============*/
::-webkit-scrollbar {
  width: .6rem;
  background: hsl(0, 0%, 74%);
}

::-webkit-scrollbar-thumb {
  background: hsl(0, 0%, 17%);
}
`;