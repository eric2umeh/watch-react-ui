import { Link } from "react-router-dom";
import styled from "styled-components";
import {breakpoints as bp} from '../../globalStyles/GlobalStyles';
import TLogo from "../../assets/images/illustrations/tfare_1.svg";

function Logo(props) {
  return (
    <StyleLink {...props} to="/dashboard">
      <LogoImg>
        <img className="logo" src={TLogo} alt={"Tfare"}/>
      </LogoImg>
      <NameDiv>
        <span>Admin</span>
        <span>Tfare</span>
      </NameDiv>
    </StyleLink>
  );
}

export default Logo;


const StyleLink = styled(Link)` 
  min-height: 48px;
  display: flex;
  align-items: center;
  padding: 0 20px 0 25px;

  &:hover {
    text-decoration: none;
  }

  span {
    font-weight: var(--fweight-4);
    font-size: var(--color-fsize-3) ;
    color: var(--color-blue-4);
    opacity: ${p => Number(!p.compact)};
    transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
  }

  @media(max-width: ${bp.desktop}) {
    span {
      opacity: 1;
    }
  }
`;

const LogoImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;

  .logo {
    height: 20px;
  }
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 10px 0;
`;