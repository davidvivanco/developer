import { useState } from 'react';
import './App.scss';
import './styles/utils/utils.scss';
import { Box, Container, Divider, Drawer } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Home from './components/Home';
import Repos from './components/Repos';
import LateralBar from './components/Sidebar';
import Slider from './components/Slider';
import HomeMobile from './components/HomeMobile';
import ReposMobile from './components/ReposMobile';
import CloseIcon from '@mui/icons-material/Close';
import Footer from './components/Footer';
import { reposConfig } from './config/repos';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
});

export default function App() {
  const conf = reposConfig;
  const [config, setConfig] = useState(conf);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [active, setActive] = useState('all');
  const smoothScroll = (id: string) => {
    let element = document.getElementById(id);
    element && element.scrollIntoView();
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <>
          <Box className="hide-mobile hide-tablet">
            <Header smoothScroll={smoothScroll}></Header>
            <Home></Home>
            <Divider sx={{ marginTop: '-2%', marginBottom: '5%' }}></Divider>
            <Box display={'flex'}>
              <Box width={'70%'}>
                <Repos
                  active={active}
                  setActive={setActive}
                  config={config}
                  setConfig={setConfig}
                ></Repos>
              </Box>
              <Box width={'30%'}>
                <LateralBar
                  active={active}
                  setActive={setActive}
                  config={config}
                  setConfig={setConfig}
                ></LateralBar>
              </Box>
            </Box>
          </Box>
          <Box className="hide-desktop">
            <Header setSideBarOpen={setSideBarOpen as any}></Header>
            <Box sx={{ marginTop: 5 }}>
              <Slider></Slider>
            </Box>
            <HomeMobile></HomeMobile>
            <Box sx={{ padding: '20px' }}>
              <Divider sx={{ marginTop: '9%', marginBottom: '5%' }}></Divider>
            </Box>
            <Box sx={{ padding: '24px' }}>
              <ReposMobile
                active={active}
                setActive={setActive}
                config={config}
                setConfig={setConfig}
              ></ReposMobile>
            </Box>
          </Box>
        </>
        <Drawer open={sideBarOpen}>
          <Box sx={{ padding: '24px' }}>
            <Box display={'flex'} justifyContent={'end'}>
              <CloseIcon
                onClick={() => {
                  setSideBarOpen(false);
                }}
                sx={{ fontSize: '30px' }}
              ></CloseIcon>
            </Box>
            <LateralBar
              active={active}
              setActive={setActive}
              setSideBarOpen={setSideBarOpen as any}
              config={config}
              setConfig={setConfig}
            ></LateralBar>
          </Box>
        </Drawer>
      </Container>
      <Footer></Footer>
    </ThemeProvider>
  );
}
