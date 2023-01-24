import styled from 'styled-components';
import { ButtonAdd } from '..';
import { device } from '../../functions/responsive';
import {breakpoints as bp} from '../../globalStyles/GlobalStyles';

function Page({title, filterImg, onClickFilter, imgIcon, size, titleButton, onClickAdd, children, ...rest}) {
    return (
        <div {...rest}>
            <Header>
                <span className='page-title' >{title}</span>
                <div className='filter-add'>
                    {filterImg ? (<img className='img-filter' src={filterImg} alt="Filter" onClick={onClickFilter} />) : ""}
                    {titleButton ? 
                    (<ButtonAdd
                        imgIcon={imgIcon}
                        title={titleButton}
                        size={size}
                        onClick={onClickAdd}
                    />) : ""}
                </div>
            </Header>
            <Content>
                {children}
            </Content>
        </div>
    )
}

export default Page;


const Header = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    /* min-height: 58px; */
    color: var(--color-blue-4);
    padding: 0 25px;

    @media ${device.desktop} {
        margin: -40px 0px 0px;
        font-size: var(--fsize-6);
    }
    @media ${device.tablet} {
        margin: -40px 0px 0px;
    }

    .page-title {
        font-size: var(--fsize-8);

        @media only screen and (max-width: ${bp.desktop}) {
            font-size: var(--fsize-5);
        }
    }

    .filter-add {
        display: flex;
        align-content: center;
        justify-content: space-evenly;
        align-self: center;
        align-items: center;
        grid-gap: 15px;

        .img-filter {
            height: 19%;
            width: 19%;

            @media only screen and (max-width: ${bp.desktop}) {
                height: 20%;
                width: 20%;
            }
            @media only screen and (max-width: ${bp.tablet}) {
                height: 25%;
                width: 25%;
            }
        }
    }

`;

const Content = styled.div`
    padding: 0 14px;
`;