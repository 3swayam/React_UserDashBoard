import styled from 'styled-components';
const Header = styled.section`
  position: fixed;
  width:  100%;
  height: 100px;
  left: 0px; 
  background:  #EAEDF2;
  display: flex;
  flex-direction: row;
  z-index: 1;
  justify-content: space-around;
  align-items:center;
  flex-wrap: wrap;
  top: 0px
`;

const Title = styled.p`
left: 10.41%;
top: 30px;
font-weight: 500;
font-size: 16px;
display: flex;
align-items: center;
color: #282B31;
`;

const Input = styled.input`
width: 100%;
height: 101%;
border-radius: 5px;
`;

const Container = styled.section`
  padding-top: 125px;
    padding-bottom: 95px;
    padding-left: 30px;
    position: relative;
    left: 0px;
    height: 40%;
    width: 100%;
`;

const UserCards = styled.section`
    padding: 5px;
    border-radius: 15px;
    background-color: #e3b1c5;
    width: 60%;
    box-shadow: 5px 5px 10px #e2cbcb;
    align-items: center;
    display: flex;
    font-weight: 500;
    color: #101010;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

const Footer = styled.section`
  position: fixed;
  width:  100%;
  height: 100px;
  left: 0px; 
  bottom:0px;
  background:  #EAEDF2;
  display: flex;
  flex-direction: row;
  z-index: 1;
  justify-content: space-around;
  align-items:center;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Page = styled.p`margin-right: 40px;
background-color: #e3b1c5;
 width: 40px;
  height: 40px;
  border-radius:50%;`;

const Image = styled.img`height: 100px;
    border-radius: 50%;
`;
const Button = styled.button`background-color: white;
height: 30px;
width: 100px;
border-radius: 5px`;
const ModalCard = styled.section`
    top: 200px;
    left: 200px;
    position: fixed;
    z-index: 1;
    width: 35%;
    height: 50%;
    overflow: auto;
    background-color: #d25b8b;
    box-shadow: 5px 5px 10px #584d4d;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export {
    Header, Title, Input, Container, UserCards, Footer, Page, Image, Button, ModalCard
}