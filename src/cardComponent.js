import React from 'react';
import styled from 'styled-components';
function Cards({ first_name, last_name, email, avatar, userId, showModal }) {

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
    const Image = styled.img`height: 100px;
    border-radius: 50%;
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

    return (
        <UserCards onClick={() => showModal(userId)}>
            <Image src={avatar}></Image>
            <div style={{ marginLeft: "20px" }}>
                <Title>Name: {first_name} {last_name}</Title>
                <Title>Email: {email}</Title>
            </div>
        </UserCards>
    )
}

export default Cards = React.memo(Cards);


