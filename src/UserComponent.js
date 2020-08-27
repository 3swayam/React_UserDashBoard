import React from 'react';
import Cards from './cardComponent';
function UserComponent({ listOfUsers, showModal }) {
    return (
        <div>
            {
                listOfUsers.map(({ id, first_name, last_name, email, avatar }) => (
                    <Cards key={id} first_name={first_name} last_name={last_name} email={email} avatar={avatar} userId={id}
                        showModal={showModal}></Cards>
                ))
            }
        </div>
    )
}

export default UserComponent = React.memo(UserComponent);
