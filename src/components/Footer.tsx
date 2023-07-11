import { Box, Container, MenuItem, Typography } from '@mui/material';
import { openExtenarUrl } from '../utils/utils';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        padding: '16px',
        color: 'white',
        marginTop: '5%',
        background: 'black',
        width: '100%',
      }}
    >
      <Container
        sx={{
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography fontSize={12}>
          David Vivanco - Software Developer
        </Typography>
        <Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
          <MenuItem
            onClick={() =>
              openExtenarUrl('https://www.instagram.com/vivanco_david/')
            }
            sx={{
              marginLeft: '5px',
              paddingLeft: '2px',
              paddingRight: '2px',
              transition: '0.3s ease-in-out',
              ':hover': {
                bgcolor: '#bbeec8;',
                boxShadow: '4px 4px 0 0 #333',
                transform: 'translate(0px, -1px)',
              },
            }}
          >
            <InstagramIcon sx={{ width: 18 }}></InstagramIcon>
          </MenuItem>
          <MenuItem
            onClick={() => {
              openExtenarUrl('https://www.linkedin.com/in/vivancoda/');
            }}
            sx={{
              paddingLeft: '2px',
              paddingRight: '2px',
              transition: '0.3s ease-in-out',
              ':hover': {
                bgcolor: '#bbeec8;',
                boxShadow: '4px 4px 0 0 #333',
                transform: 'translate(0px, -1px)',
              },
            }}
          >
            <LinkedInIcon sx={{ width: 18 }}></LinkedInIcon>
          </MenuItem>
          <MenuItem
            onClick={() => {
              openExtenarUrl('https://github.com/davidvivanco');
            }}
            sx={{
              paddingLeft: '2px',
              paddingRight: '2px',
              transition: '0.3s ease-in-out',
              ':hover': {
                bgcolor: '#bbeec8;',
                boxShadow: '4px 4px 0 0 #333',
                transform: 'translate(0px, -1px)',
              },
            }}
          >
            <GitHubIcon sx={{ width: 18 }}></GitHubIcon>
          </MenuItem>
        </Box>
        {/* <Typography fontSize={12} sx={{ marginLeft: '2px' }}>
          {new Date().getFullYear()}
        </Typography> */}
      </Container>
    </Box>
  );
}
