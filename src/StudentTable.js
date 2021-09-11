import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

function StudentTable({rows, deleteRow}) {
    // console.dir(deleteRow)
    return (
        <Paper style={{width:'50%', margin:"auto", marginTop:30 ,maxWidth: 700}}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                    <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.firstName}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>
                            <Button
                                onClick={() => deleteRow(row.id)}
                                color="secondary"
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default StudentTable
