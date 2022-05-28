import styled from '@emotion/styled';

export const FriendList = styled.ul`

 width: 350px;
margin: 0 auto;
list-style: none;
padding: 0;
 text-align: center;
`

export const Item = styled.li`
display:flex;
align-items:center;
padding: 15px;
border-radius: 20px;
border: 1px solid #696969;
 box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
background-color: #ffe9f4;
margin-bottom: 10px;
`
export const Name = styled.p`
font-size: 15px;
font-weight: 600;
margin-right: auto;
`

export const Status = styled.span`
display: block;
width: 15px;
height: 15px;
margin-right: 30px;
border-radius: 50%;
border: 1px solid #696969;
background-color: ${props => props.typeName ? 'green' : 'red' };
    `

export const Image = styled.img`
    margin-right: 30px;
`