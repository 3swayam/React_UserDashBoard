import React from 'react';
import { Title, ModalCard, Image, Button } from './styleComponents';

function ModalComponent({ user, hideModal }) {
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
