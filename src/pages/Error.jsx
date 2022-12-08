import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext';

const Error = () => {
    const { logOut } = useContext(AuthContext);

    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch((err) => console.log(err));
    };

    return (
     <div>error</div>
    );
};

export default Error;
