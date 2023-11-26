import { SetMenu } from './Style';
import styled from "styled-components";



export const Container = styled.nav`
display:flex;
justify-items: center;
align-items:center;
position: fixed;
top:2%;
left:20px;
background-color: white;
width:40px;
height:40px;
border-radius: 50%;

background-color:gray;


`;

export const SetMenu = styled.input`
position:absolute;
top:18px;
left:10px;
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
  width: 20px;
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

  export const MenuLabel = styled.label`
  `;