import { AppBar, Box, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { openExtenarUrl } from '../utils/utils';

const links = ['Home', 'Repos', 'About Me'];

export default function Header({
  setSideBarOpen = (open: boolean) => {},
  smoothScroll = (id: string) => {},
}) {
  return (
    <AppBar elevation={0} position="sticky">
      <Toolbar
        sx={{
          borderBottom: '1px solid black',
          background: 'white',
          color: 'black',
        }}
        variant="dense"
      >
        <div>
          <img height={'20px'} src="./assets/icons/coffe-cup.png" alt="" />
          <img width="80" src="./assets/icons/vivanco_bananas.svg" alt="" />
        </div>
        <Box
          className="hide-mobile"
          sx={{
            paddingTop: '2%',
            paddingBottom: '2%',
            display: { xs: 'flex', flexGrow: 1, justifyContent: 'end' },
          }}
        >
          {links.map((link) => (
            <MenuItem
              onClick={() => {
                smoothScroll(link);
              }}
              key={link}
              sx={{
                transition: '0.3s ease-in-out',
                ':hover': {
                  bgcolor: '#bbeec8;',
                  boxShadow: '4px 4px 0 0 #333',
                  transform: 'translate(0px, -1px)',
                },
              }}
            >
              <Typography textAlign="center">{link}</Typography>
            </MenuItem>
          ))}
          <MenuItem
            onClick={() =>
              openExtenarUrl('https://www.instagram.com/vivanco_david/')
            }
            sx={{
              marginLeft: '10px',
              paddingLeft: '5px',
              paddingRight: '5px',
              transition: '0.3s ease-in-out',
              ':hover': {
                bgcolor: '#bbeec8;',
                boxShadow: '4px 4px 0 0 #333',
                transform: 'translate(0px, -1px)',
              },
            }}
          >
            <InstagramIcon></InstagramIcon>
          </MenuItem>
          <MenuItem
            onClick={() => {
              openExtenarUrl('https://www.linkedin.com/in/vivancoda/');
            }}
            sx={{
              paddingLeft: '5px',
              paddingRight: '5px',
              transition: '0.3s ease-in-out',
              ':hover': {
                bgcolor: '#bbeec8;',
                boxShadow: '4px 4px 0 0 #333',
                transform: 'translate(0px, -1px)',
              },
            }}
          >
            <LinkedInIcon></LinkedInIcon>
          </MenuItem>
          <MenuItem
            onClick={() => {
              openExtenarUrl('https://github.com/davidvivanco');
            }}
            sx={{
              paddingLeft: '5px',
              paddingRight: '5px',
              transition: '0.3s ease-in-out',
              ':hover': {
                bgcolor: '#bbeec8;',
                boxShadow: '4px 4px 0 0 #333',
                transform: 'translate(0px, -1px)',
              },
            }}
          >
            <GitHubIcon></GitHubIcon>
          </MenuItem>
        </Box>
        <Box
          className="hide-desktop"
          sx={{
            paddingTop: '2%',
            paddingBottom: '2%',
            display: { xs: 'flex', flexGrow: 1, justifyContent: 'end' },
          }}
        >
          <MenuIcon
            sx={{ fontSize: '30px' }}
            onClick={() => {
              setSideBarOpen(true);
            }}
          ></MenuIcon>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
