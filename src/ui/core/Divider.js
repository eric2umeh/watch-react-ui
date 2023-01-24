import styled from 'styled-components';
import {breakpoints as bp} from '../../globalStyles/GlobalStyles';

function Divider() {
    return(
        <Container>
            <StyledDiv1></StyledDiv1>
            <StyledDiv2></StyledDiv2>
        </Container>
    )
}

export default Divider;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin: 0 20px;
`;

const StyledDiv1 = styled.div`
    margin: 10px 0;
    width: 15%;
    height: 7px;
    background-color: var(--color-blue-1);

    @media only screen and (max-width: ${bp.desktop}) {
        /* width: 30%; */
    }
`;

const StyledDiv2 = styled.div`
    margin: 10px 0;
    width: 15%;
    height: 7px;
    background-color: var(--color-blue-1);

    @media only screen and (max-width: ${bp.desktop}) {
        /* width: 30%; */
    }
`;