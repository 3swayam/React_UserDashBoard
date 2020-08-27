import React, { useState, useEffect } from 'react';
import ModalComponent from './modalComponent';
import UserComponent from './UserComponent';
import axios from 'axios';
import { Header, Title, Input, Container, UserCards, Footer, Page } from './styleComponents';

function App() {

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
    <React.Fragment>
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

    </React.Fragment>
  )
}

export default App;
