import React from 'react'
import styled from 'styled-components';


export default function TripStatsCard({text, time, icon, color}) {
    return (
   
          <Container theme={'#ffffff'}>
            <Col>
                <Text>{text}</Text> 
                <Date>{time}</Date> 
            </Col>
            <Box color={color}>
              <Icon src={icon} />
            </Box>
        </Container>
      
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--color-light);
  border: 1px solid var(--color-light);
  border-radius: var(--bradius-4);
  margin-left: 22px;
  margin-top: 22px;
`

const Col = styled.div`
  padding-left:22px;
  padding-top:28px;
`

const Text = styled.h2`
  height:var(--lheight-7);
  font-family:var(--calibri-font);
  font-weight: var(--fweight-4);
  font-size: var(--fsize-6);
  color: var(--color-blue-4);
  width: 100px;
`

const Date = styled.h3`
  width: 64px;
  height: var(--lheight-4);
  font-family: var(--calibri-font);
  font-size: var(--fsize-4);
  font-weight: var(--fweight-4);
  color: var(--color-blue-3);
  padding-left: 2px;
  padding-top: 5px;
  padding-bottom: 27px;
`

const Box = styled.div`
  width:44px;
  height:44px;
  background: ${props => props.color || 'var(--color-blue-2)'};
  border-radius:var(--bradius-1);
  margin-top:28px;
  margin-left:50px;
  margin-right:12px;
`
const Icon = styled.img`
  padding-left:8px;
  padding-top:10px;
`