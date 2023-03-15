import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box>
      <Box>
        <Topbar />
        <Box p={2}>{children}</Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
