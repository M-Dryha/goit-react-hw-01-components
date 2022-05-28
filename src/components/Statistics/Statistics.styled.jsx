import styled from '@emotion/styled';


export const Section = styled.section`
width: 350px;
margin: 40px auto;
text-align: center;
background-color: #ffe9f4;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`

export const StatisticsList = styled.ul`
display:flex;
padding:0;
margin:0;
`

export const StatisticsItem = styled.li`
display:flex;
 flex-direction: column;
 flex-basis: calc(100% / 5);
 padding: 10px 10px;
`
export const Title = styled.h2`
padding-top:30px;
padding-bottom: 30px;
margin: 0;
text-transform: uppercase;
font-size: 22px;
text-align: center;
`
export const Label = styled.span`
font-size: 15px;
`