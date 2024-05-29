import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';


const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.fromPage || 1;

    // useEffect(() => {
    //     if (!location.state?.fromPage) {
    //         navigate(location.pathname, { replace: true, state: { fromPage } });
    //     }
    // }, [location, navigate, fromPage]);

    const handleBack = () => {
        navigate('/');
    };


    return (
        <div>
            <h1>User Detail</h1>
            <p>ID: {id}</p>
            <p>Name: User {id}</p>
            <p>Email: user{id}@example.com</p>
            <p>Mobile: 123-456-789{id}</p>
            <button onClick={handleBack}>Back</button>
        </div>
    );
};

export default UserDetails;
