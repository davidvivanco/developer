import { Box, Chip, Divider, Typography } from '@mui/material';
import AngularIcon from './icons/Angular';
import RxJsIcon from './icons/RxJs';
import { openExtenarUrl } from '../utils/utils';
import GitHubIcon from '@mui/icons-material/GitHub';
import TecnologiesChips from './TecnologiesChips';
import { useState } from 'react';

export default function LateralBar({
  config,
  setConfig,
  active,
  setActive,
  setSideBarOpen = null,
}) {
  return (
    <Box>
      <Typography marginBottom={'5%'} fontWeight={'bold'} fontSize={'16px'}>
        Filter by technology
      </Typography>
      <Box
        flexWrap={'wrap'}
        display={'flex'}
        justifyContent={'start'}
        marginTop={'10px'}
      >
        <TecnologiesChips
          active={active}
          setActive={setActive}
          setSideBarOpen={setSideBarOpen as any}
          config={config}
          setConfig={setConfig}
          ele={null as any}
          filters={true}
        ></TecnologiesChips>
      </Box>
      <Box id="About Me" marginTop={'10%'}>
        <Typography marginBottom={'5%'} fontWeight={'bold'} fontSize={'16px'}>
          Linkedin
        </Typography>
      </Box>
      <Box display={'flex'}>
        <Box>
          <Typography fontSize={'14px'} sx={{ opacity: 0.8 }}>
            If you need to know more about my professional career, check it out
            my Linkedin{' '}
          </Typography>
          <div
            className="linkedin-button"
            onClick={() => {
              openExtenarUrl('https://www.linkedin.com/in/vivancoda/');
            }}
          >
            Check it out
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              width="20"
              height="20"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </div>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
          onClick={() => {
            openExtenarUrl('https://www.linkedin.com/in/vivancoda/');
          }}
        >
          <img
            className="cp"
            height={200}
            style={{ marginTop: -10 }}
            src="./assets/images/linkedin-screenshot.png"
            alt=""
          />
        </Box>
      </Box>

      <Box marginTop={'5%'}>
        <Typography
          sx={{ opacity: 0.8 }}
          marginBottom={'5%'}
          fontWeight={'bold'}
          fontSize={'16px'}
        >
          You can also find me at
        </Typography>
        <Box
          display={'flex'}
          justifyContent={'start'}
          alignItems={'center'}
          onClick={() => {
            openExtenarUrl(
              'https://www.malt.es/profile/davidvivancomiquis?overview'
            );
          }}
          sx={{ cursor: 'pointer' }}
        >
          <img height={23} src="./assets/icons/malt.svg" alt="" />
          <Typography marginLeft={1.5} fontSize={12}>
            www.malt.es/profile/davidvivancomiquis
          </Typography>
        </Box>
        <Divider sx={{ marginTop: 1, marginBottom: 1 }}></Divider>
        <Box
          display={'flex'}
          justifyContent={'start'}
          alignItems={'center'}
          onClick={() => {
            openExtenarUrl('https://github.com/davidvivanco');
          }}
          sx={{ cursor: 'pointer' }}
        >
          <GitHubIcon></GitHubIcon>
          <Typography marginLeft={1.3} fontSize={12}>
            github.com/davidvivanco
          </Typography>
        </Box>
        <Divider sx={{ marginTop: 1, marginBottom: 1 }}></Divider>
        <Box
          display={'flex'}
          justifyContent={'start'}
          alignItems={'center'}
          onClick={() => {
            openExtenarUrl(
              'https://www.workana.com/freelancer/13935cce6fb8d27b3cfadef17e88533a'
            );
          }}
          sx={{ cursor: 'pointer' }}
        >
          <img height={23} src="./assets/icons/workana.svg" alt="" />{' '}
          <Typography marginLeft={1.5} fontSize={12}>
            www.workana.com/freelancer
          </Typography>
        </Box>
        <Divider sx={{ marginTop: 1, marginBottom: 1 }}></Divider>
        <Box
          onClick={() => {
            openExtenarUrl(
              'https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example'
            );
          }}
          display={'flex'}
          justifyContent={'start'}
          alignItems={'center'}
          sx={{ cursor: 'pointer' }}
        >
          <img height={20} src="./assets/icons/gmail.png" alt="" />{' '}
          <Typography marginLeft={1.8} fontSize={12}>
            vivancodaviddeveloper@gmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
