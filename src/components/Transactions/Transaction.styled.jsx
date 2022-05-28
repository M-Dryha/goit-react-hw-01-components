import styled from '@emotion/styled';

export const Table = styled.table`
margin: 40px auto;
  table-layout: fixed;
  width: 600px;
   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`

export const String = styled.tr`
 text-align: center;
  border: 1px solid #e3a5b0;
  &:nth-of-type(even){
      background-color: #ffdbe6;
  }
   &:nth-of-type(odd){
       background-color: #ffe9f4;
   }
`

export const Head = styled.thead`
margin-bottom:10px;
`

export const HeadCell = styled.th`
padding: 20px;
 background-color: #ffb8c6;
 color: #F0F0F0;
`
export const Cell = styled.th`
padding: 10px;
 color: #707070;
 font-weight: 400;
 font-size: 12px;
`