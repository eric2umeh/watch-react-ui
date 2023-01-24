import React from 'react'
import styled from 'styled-components'
import TabList from './TabList'

export default function TabContent2() {
    return (
        <Container>
            <Contain>
                <Circle/>
                    <List>
                        <h2 className='first_name'>First Name</h2>
                        <h2 className='last_name'>Last Name</h2>
                        <h2 className='branch'>Branch</h2>
                        <h2 className='amount'>Amount</h2>
                    </List>
            </Contain>
            <TabList name='John' surname='Rice' branch='Nyanya,Abuja' amount='$909.00' />
            <TabList name='John' surname='Rice' branch='Nyanya,Abuja' amount='$909.00' />
            <TabList name='John' surname='Rice' branch='Nyanya,Abuja' amount='$909.00' />
            <TabList name='John' surname='Rice' branch='Nyanya,Abuja' amount='$909.00' />
            <TabList name='John' surname='Rice' branch='Nyanya,Abuja' amount='$909.00' />
        </Container>
    )
}


const Container = styled.div`
  background-color:var(--color-light);
  `

  const Contain = styled.div`
  height: 40px;
  display:flex;
  flex-direction:row;
`
const Circle = styled.div`
  height:40px;
  width:40px;
  border-radius:50%;
  background-color:var(--color-blue-2);
`
const List = styled.div`
  padding-left: 70px;
  padding-top:10px;
  display:flex;
  flex-direction:row;
.first_name{
  font-family: var(--calibri-font);
  font-weight: var(--fweight-6);
  font-size: var( --fsize-4);
  line-height: var(--lheight-4);
  color: var(--color-blue-4);
}
.last_name{
  font-family: var(--calibri-font);
  font-weight: var(--fweight-6);
  font-size: var( --fsize-4);
  line-height: var(--lheight-4);
  color: var(--color-blue-4);
  padding-left:88px
}
.branch{
  font-family: var(--calibri-font);
  font-weight: var(--fweight-6);
  font-size: var( --fsize-4);
  line-height: var(--lheight-4);
  color: var(--color-blue-4);
  padding-left:88px
}
.amount{
  font-family: var(--calibri-font);
  font-weight: var(--fweight-6);
  font-size: var( --fsize-4);
  line-height: var(--lheight-4);
  color: var(--color-blue-4);
  padding-left:108px
}
`