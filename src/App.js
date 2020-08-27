import React, { useState, useEffect } from 'react';
import ModalComponent from './modalComponent';
import UserComponent from './cardListComponent';
import axios from 'axios';
import styled from 'styled-components';

function App() {

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
  top: "0px"
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
  background:  #EAEDF2;
  display: flex;
  flex-direction: row;
  z-index: 1;
  justify-content: space-around;
  align-items:center;
  flex-wrap: wrap;
  bottom: "0px";
  display: flex;
  align-items: center;
  text-align: center;
`;

  const Page = styled.p`margin-right: 40px;
background-color: #e3b1c5;
 width: 40px;
  height: 40px;
  border-radius:50%;`;


  const [searchText, setSearchText] = useState('');
  const [disPlayModal, setDisPlayModal] = useState(null);
  const [pages, setPages] = useState([1, 2, 3, 4]);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // GET LIST OF USERS WHEN CURRENT PAGE IS CHANGED
  useEffect(() => {
    if (!disPlayModal) {
      axios
        .get(`https://reqres.in/api/users?page=${currentPage}&per_page=4`)
        .then(res => {
          setUsers(res.data.data);
          setFilteredUsers(res.data.data)
        });
    }
  }, [currentPage]);

  // FILTER LIST OF USERS WHEN SEARCH TEXT IS CHANGED
  useEffect(() => {
    let items = users.filter((user) => {
      if (searchText == null) {
        return user
      }
      else if (user.first_name.toLowerCase().includes(searchText.toLowerCase()) || user.last_name.toLowerCase().includes(searchText.toLowerCase())) {
        { return user }
      }
    });
    setFilteredUsers(items)
  }, [searchText]);

  // TOGGLE MODAL
  function showModal(userId) {
    if (!disPlayModal) {
      var index = filteredUsers.findIndex(x => x.id == userId);
      if (index != -1) {
        setDisPlayModal(filteredUsers[index]);
      }
    }
  }

  function hideModal() {
    setDisPlayModal(null);
  }

  return (
    <div>
      {/* BEGINNING OF HEADER SECTION */}
      <Header>
        <Title>Kommunicate Assignment</Title>
        <div>
          <Title>Search User by First or Last Name</Title>
          <Input value={searchText} onChange={(e) => setSearchText(e.target.value)}></Input>
        </div>
      </Header>

      {/* BEGINNING OF USERS LIST */}
      <Container>
        {disPlayModal &&
          <ModalComponent user={disPlayModal} hideModal={hideModal}></ModalComponent>}

        {filteredUsers.length == 0 && <UserCards style={{ height: "100px" }}>Sorry !! No User Found</UserCards>}

        <UserComponent listOfUsers={filteredUsers} showModal={showModal}></UserComponent>

      </Container>

      {/* BEGINNING OF FOOTER-PAGINATION SECTION */}
      <Footer>
        {pages.map((number) => (
          <Page key={number} onClick={() => setCurrentPage(number)}>{number}</Page>
        ))}
      </Footer>

    </div>
  )
}

export default App;
