
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Paper, Typography, Button } from '@mui/material';

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item>
                <Paper style={{ padding: '20px', textAlign: 'center' }}>
                    <Typography variant="h4">User Detail</Typography>
                    <Typography variant="body1">ID: {id}</Typography>
                    <Typography variant="body1">Name: User {id}</Typography>
                    <Typography variant="body1">Email: user{id}@example.com</Typography>
                    <Typography variant="body1">Mobile: 123-456-789{id}</Typography>
                    <Button variant="contained"  style={{ backgroundColor: '#102C57', marginTop: '20px' }} onClick={handleBack}>
                        Back
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default UserDetails;
