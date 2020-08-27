import React from 'react';
import { Title, UserCards, Image } from './styleComponents';
function Cards({ first_name, last_name, email, avatar, userId, showModal }) {
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


