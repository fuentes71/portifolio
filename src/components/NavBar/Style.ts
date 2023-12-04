import styled from "styled-components";



export const Container = styled.nav`
display:flex;
justify-items: center;

align-items:center;
flex-direction: column;
position: fixed;
top:2%;
left:20px;
gap:20px;
width:3rem;
height:3rem;
border-radius: 25px;
background-color:gray;
transition: all 1s;
overflow:hidden;


&.nav-active{
  width:25rem;
}
@media (max-width: 600px) {
  &.nav-active{
  width:22rem;
}}
`;

export const SetMenu = styled.input`
display:block;
position:fixed;
 left: 0;
 top:10px;
margin:10px;
  cursor: pointer;
  transition: 
    .5s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
 &::before,
 &::after,&{
    display: block;
  background-color: #fff;
  position: absolute;
  height: 6px;
  width: 25px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 10px;
}
&::before{
    content:'';
    margin-top: -8px;
}
&::after{
    content:'';
    margin-top: 8px;
}
&:checked{
    height:0;

}
&:checked::before{
    margin-top: 0;
    transform:  rotate(225deg) ;
}
&:checked::after{
    margin-top: 0;
    transform:  rotate(-225deg) ;
}
  `;

export const List = styled.ul`
display:none;
flex-direction: row;
background-color:inherit;
gap:50px;
height:100%;
justify-content:center;
align-items:center;
list-style: none;
&.nav-active{
  display:flex;
}
@media (max-width: 600px) {
  &.nav-active{
    gap:30px;
}}
`;

export const Item = styled.li`
background-color:transparent;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
cursor:pointer;
transition: all .5s;
&:hover{
  color: #fff;
}
`;