import { Box, Button, Typography } from '@mui/material';

import UsersTable from './UserTable';

const UsersPage = () => {
  return (
    <Box sx={{ width: 1000, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">Users</Typography>
        <Button variant="contained">+ Add new user</Button>
      </Box>
      <Box>
        <UsersTable />
      </Box>
    </Box>
  );
};

export default UsersPage;
