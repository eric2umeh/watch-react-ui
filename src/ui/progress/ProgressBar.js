import React from 'react'
import styled from 'styled-components';

function ProgressBar({name, progress, bg, number}) {
    return (
        <ProgressBarStyled>
            <div className="skill">
                <div className="progress-con">
                    <p>{name}  <span>{progress}</span></p>
                    <div className="progress-bar" style={{background: 'var(--color-blue-8)'}}>
                        <div className="progress" style={{background: bg, width: progress}}></div>
                    </div>
                </div>
            </div>
        </ProgressBarStyled>
    )
}



const ProgressBarStyled = styled.div`
    .skill{
        display: flex;
        align-items: center;
        .image{
            width: 60px;
            img{
                width: 100%;
            }
        }
    }

    .progress-con{
        flex: 1;
        /* padding-left: 1.5rem; */
        p{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--color-blue-9);
        }


        .progress-bar{
            /* width: 100%; */
            height: .4rem;
            /* background-color: white; */
            border-radius: var(--bradius-6);
            .progress{
                height: 100%;
                border-radius: var(--bradius-6);
            }
        }
    }
`;

export default ProgressBar;
