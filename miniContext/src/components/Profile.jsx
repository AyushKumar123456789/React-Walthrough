import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) return <h2>Please Login</h2>;

    return <h2>User : {user.username}</h2>;
}

export default Profile;
