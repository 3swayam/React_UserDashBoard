import React from 'react';
import styled from 'styled-components';

function ModalComponent({ user, hideModal }) {


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
    const Image = styled.img`height: 100px;
border-radius: 50%;
`;

    const Button = styled.button`background-color: white;
height: 30px;
width: 100px;
border-radius: 5px`;

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
            <div style={{ marginLeft: "20px" }}>
                <Image src={user.avatar}></Image>

                <Title>User Id: {user.id}</Title>
                <Title>Name: {user.first_name} {user.last_name}</Title>
                <Title>Email: {user.email}</Title>
                <Button onClick={() => hideModal()}>Close</Button>
            </div>
        </ModalCard>
    )
}

export default ModalComponent = React.memo(ModalComponent);
