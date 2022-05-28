import styled from '@emotion/styled';

export const ProfileBox = styled.div`

margin: 35px auto;
width: 350px;
border: 1px solid #696969;
 box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
 background-color: #ffe9f4;
`

export const Description = styled.div`

padding: 20px 45px 0 45px;;
text-align: center;
`

export const Image = styled.img`
width: 100px;
border-radius: 50%;
`
export const Name = styled.p`
font-size: 20px;
font-weight: bold;
`

export const Info = styled.p`
font-size: 15px;
color: 	#696969;
`

export const StatsList = styled.ul`
  display: flex;
 margin: 0;
padding: 0;
`

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
list-style: none;
text-align: center;
padding: 10px;
flex-basis: calc(100% / 3);
 border-top: 1px solid #696969;

&:not(:last-child){
border-right: 1px solid #696969;
}
`

export const Label = styled.span`
font-size: 15px;
color: 	#696969;
`
export const Quantity = styled.span`
font-size: 20px;
font-weight: 500;
`