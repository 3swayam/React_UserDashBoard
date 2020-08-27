import React from 'react';
import styled from 'styled-components';

function ModalComponent({ user, hideModal }) {


    const ModalCard = styled.section`
position: fixed;
z-index: 1;
width: 50%;
height: 50%;
overflow: auto;
background-color: #e3b1c5;
box-shadow: 5px 5px 10px #e2cbcb;
`;
    const Image = styled.image`
height: "100px", borderRadius: "50%" 
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
        <ModalCard>
            <Image src={user.avatar}>  </Image>
            <div style={{ marginLeft: "20px" }}>
                <Title>User Id: {user.id}</Title>
                <Title>Name: {user.first_name} {user.last_name}</Title>
                <Title>Email: {user.email}</Title>
                <button onClick={() => hideModal()}>close</button>
            </div>
        </ModalCard>
    )
}

export default ModalComponent;
