import styled from "styled-components";
import { Link } from 'react-router-dom';

export const TableLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&:hover {
    font-size: larger;
    color: #linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))
  }
`;

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
  width:100%;
  margin-left: auto;
    margin-right: auto;
`;

export const Tabletbody = styled.tbody`
  
  margin-left: auto;
  margin-right: auto;
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
border-radius: 35px;
box-shadow: rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(0 187 212 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem;

font-size: 1rem;
line-height: 1.625;
font-family: Roboto, Helvetica, Arial, sans-serif;
font-weight: 700;
letter-spacing: 0.0075rem;
text-transform: none;
vertical-align: unset;
text-decoration: none;
color: rgb(255, 255, 255);
`;

export const TableButton = styled.button`
  display: block;
  width: 10rem;
  padding: 12px 12px;
  margin:10px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const TableFieldset = styled.ul`
padding: 0;
margin: 3px 0 8px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;

list-style-type: none;
`;

export const TableInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  border-left: 0;
  justify-content: center;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgb(255, 255, 255);;
    font-size: 20px;
    font-weight: 600;
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }
  :-ms-input-placeholder {
     color: rgb(255, 255, 255);;
  }
  transition: border-bottom-color 0.25s ease-in;
  background: linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));
  color: rgb(255, 255, 255);;
  font-size: 20px;
  font-weight: 600;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
  &:hover {
    
    transform: translate(0, -2px);
  }
`;


export const TableCounter = styled.small`
  font-size: 12px;
  text-align: center;
  text-transform: capitalize;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 300;
  font-family: Roboto, Helvetica, Arial, sans-serif;
`;