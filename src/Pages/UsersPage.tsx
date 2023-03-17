import * as React from 'react';

import { Avatar, IconButton, Menu, MenuItem, TextField } from '@mui/material';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import users from '../_mock/user';

const TestTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ display: 'flex', gap: 1, cursor: 'pointer' }} onClick={() => alert('hello')}>
              Name
              <ArrowUpwardIcon sx={{ color: 'lightgrey' }} />
            </TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Verified</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar alt={row.name} src={row.avatarUrl} />
                {row.name}
              </TableCell>
              <TableCell align="right">{row.company}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right">{row.isVerified}</TableCell>
              <TableCell align="right">{row.status}</TableCell>

              <TableCell align="left">
                <PopupState variant="popover">
                  {(popupState) => (
                    <>
                      <IconButton color="inherit" {...bindTrigger(popupState)}>
                        <MoreVertIcon />
                      </IconButton>

                      <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>
                          <EditIcon sx={{ p: 1 }} />
                          Edit
                        </MenuItem>
                        <MenuItem onClick={popupState.close} sx={{ color: 'red' }}>
                          <DeleteIcon sx={{ p: 1 }} />
                          Delete
                        </MenuItem>
                      </Menu>
                    </>
                  )}
                </PopupState>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TestTable;
