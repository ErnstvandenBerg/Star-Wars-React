import styled from "styled-components";


export const Background = styled.div`
  background-color: #1c2037;
  height: 100vh;
  color:white;
  
`;


export const Test = styled.div`
  color:yellow;
`;

export const TableBlock = styled.tbody`
  display:flex;
  border-spacing: 0px;
`;

export const Tableheader = styled.thead`
  display:flex;
  padding-top:15px;
  z-index:1;
  border-spacing: 0px;
`;


export const Tablerow = styled.tr`
 
`;

export const Tablecolumnhead = styled.td`
width:15vw;
height:3vh;
text-transform: capitalize;
font-size: 20px;
font-weight: 600;
font-family: Roboto, Helvetica, Arial, sans-serif;
`;


export const Tablecolumn = styled.td`
width:15vw;
height:3.5vh;
font-family: Roboto, Helvetica, Arial, sans-serif;
border-bottom: 0.0625rem solid rgba(240, 242, 245, 0.4);

`;

export const TableBody = styled.table`
 background-color: #212941;
 padding:30px;
 border-radius:25px;
 margin-left:auto;
 margin-right:auto;
 justify-content:center;
 align-item:center;
 z-index:1;
 opacity: 1;
 flex-direction: column;
 position: relative;
 background-clip: border-box;
 border-radius: 0.75rem;
    box-shadow: rgb(0 0 0 / 14%) 0rem 0.125rem 0.125rem 0rem, rgb(0 0 0 / 20%) 0rem 0.1875rem 0.0625rem -0.125rem, rgb(0 0 0 / 12%) 0rem 0.0625rem 0.3125rem 0rem;
    overflow: visible;
`;


export const TableBodyBottom = styled.table`
padding-top: 24px;

`;
export const TableName = styled.div`
margin-left: 16px;
margin-right: 16px;
margin-top: -24px;
padding: 24px 16px;
background: linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));
border-radius: 0.5rem;
box-shadow: rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(0 187 212 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem;

font-size: 1rem;
line-height: 1.625;
font-family: Roboto, Helvetica, Arial, sans-serif;
font-weight: 700;
letter-spacing: 0.0075em;
text-transform: none;
vertical-align: unset;
text-decoration: none;
color: rgb(255, 255, 255);
`;
