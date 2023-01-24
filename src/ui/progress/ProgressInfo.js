import React from 'react'
import styled from 'styled-components';
import { ProgressBar } from '..';

function ProgressInfo({ title, amount, percent, compare }) {
    return (
        <SkillsStyled>
            <p className="heading">{title}</p>
            <div className="earning">
                <span className="money">{amount}</span>
                <div className="icon-percent">
                    <i className="bx bxs-up-arrow"></i>
                    <span>{percent}</span>
                </div>
            </div>
            <div className="desc-bottom">{compare}</div>
            <div className="skill-con">
                <ProgressBar name={'Jan'} progress={'80%'} number={'8'} bg={'#F56692'} />
                <ProgressBar name={'Feb'} progress={'40%'} number={'8'} bg={'#6BBE92'} />
                <ProgressBar name={'Mar'} progress={'34%'} number={'8'} bg={'#545496'} />
            </div >
        </SkillsStyled>
    )
}

const SkillsStyled = styled.div`
    padding: 10px 20px 20px ;
    border-radius: var(--bradius-7);
    background-color: var(--color-light);

    -webkit-box-shadow: var(--webkitboxshadow-primary);
    box-shadow: var(--boxshadow-primary);

    .heading{
        font-size: var(--fsize-4);
        color: var(--color-blue-4);
        margin-bottom: 5px;
    }

    .earning {
        display: flex;
        align-items: center;
    }
        
    .money {
        font-size: var(--fsize-8);
        font-family: var(--ralewaysans-font);
        font-weight: var(--fweight-5);
        line-height: 42px;
        color: var(--color-black);
    }
    
    .icon-percent {
        margin: 10px 15px 0;
        color: var(--color-green-2);
    }

    .desc-bottom {
        font-size: var(--fsize-3);
        color: var(--color-blue-9);
        margin-bottom: 10px;
    }

    .skill-con{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: .8rem;
    }
`;

export default ProgressInfo;
