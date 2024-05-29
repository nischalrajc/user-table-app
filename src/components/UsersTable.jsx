import React, { useState, useEffect } from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const UsersTable = () => {

    const users = Array.from({ length: 800 }, (_, id) => ({
        id: id + 1,
        name: `User ${id + 1}`,
        email: `user${id + 1}@example.com`,
        mobile: `123-456-${String(id + 1).padStart(4, '0')}`,
    }));

    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    useEffect(() => {
        const page = localStorage.getItem("currentPage");
        const pageNo = Number(page);

        if (page && !isNaN(pageNo)) {
            setCurrentPage(pageNo);
            localStorage.removeItem("currentPage");
        } else {
            setCurrentPage(1);
        }
    }, []);


    const handleClick = (user) => {
        localStorage.setItem("currentPage", currentPage)
        navigate(`/user/${user.id}`);
    };

    const indexOfFirstUser = (currentPage - 1) * rowsPerPage;
    const indexOfLastUser = indexOfFirstUser + rowsPerPage - 1;
    const displayedUsers = users.slice(indexOfFirstUser, indexOfLastUser + 1);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };


    return (
        
            <div>
                <Grid container spacing={2} justifyContent="center" alignItems="center" mt={1} >
                    <Grid item xs={6}>
                        <Paper>
                            <TableContainer>
                                <Table style={{ backgroundColor: '#F6F5F2' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Mobile</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {displayedUsers.map((user) => (
                                            <TableRow key={user.id} hover onClick={() => handleClick(user)} style={{ cursor: 'pointer' }}>
                                                <TableCell>{user.name}</TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell>{user.mobile}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container spacing={2} justifyContent="center" alignItems="center" mt={1}>
                    <Grid item>
                        <Stack spacing={2} alignItems="center">
                            <Pagination
                                count={Math.ceil(users.length / rowsPerPage)}
                                color="primary"
                                page={currentPage}
                                onChange={handleChangePage}
                            />
                        </Stack>
                    </Grid>
                </Grid>

            </div>
    );
};

export default UsersTable;
