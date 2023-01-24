import React from 'react'
import styled from 'styled-components'

function CheckBox() {
    return (
        <Input type="checkbox" />            
    )
}

export default CheckBox


const Input = styled.input`
	width: 1.2rem;
    height: 1.2rem;
`;