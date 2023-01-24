import React from 'react'
import styled from 'styled-components'

export default function TabList({name, surname, branch, amount}) {
    return (
        <Contain>
            <Circle/>
                <List>
                    <h2 className='first_name'>{name}</h2>
                    <h2 className='last_name'>{surname}</h2>
                    <h2 className='branch'>{branch}</h2>
                    <h2 className='amount'>{amount}</h2>
                </List>
        </Contain>
    )
}


const Contain = styled.div`
    height: 40px;
    display:flex;
    flex-direction:row;
    margin-top:26px;
`
const Circle = styled.div`
    height:40px;
    width:40px;
    border-radius:50%;
    background-color:var(--color-blue-2);
`
const List = styled.div`
    padding-left: 70px;
    padding-top:5px;
    display:flex;
    flex-direction:row;
    width:100%;
.first_name{
    width: 25%;
    font-family: var(--calibri-font);
    font-weight: var(--fweight-4);
    font-size: var( --fsize-4);
    line-height: var(--lheight-4);
    color: var(--color-blue-3);
}
.last_name{
    width:25%;
    font-family: var(--calibri-font);
    font-weight: var(--fweight-4);
    font-size: var( --fsize-4);
    line-height: var(--lheight-4);
    color: var(--color-blue-3);
    padding-left:7px
}
.branch{
    width:25%;
    font-family: var(--calibri-font);
    font-weight: var(--fweight-4);
    font-size: var( --fsize-4);
    line-height: var(--lheight-4);
    color: var(--color-blue-3);
    padding-left:10px
}
.amount{
    width:25%;
    font-family: var(--calibri-font);
    font-weight: var(--fweight-4);
    font-size: var( --fsize-4);
    line-height: var(--lheight-4);
    color: var(--color-blue-3);
    padding-left:9px
}
`