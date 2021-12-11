import React from 'react';

const User = (props) => {
    const {id, title, url, thumbnailUrl} = props.photoUsers;
    return (
        <div>
            <h3>{id}</h3>
        </div>
    );
};

export default User;