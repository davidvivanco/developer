import { Box, Chip, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AngularIcon from './icons/Angular';
import RxJsIcon from './icons/RxJs';
import { reposConfig } from '../config/repos';
import { openExtenarUrl } from '../utils/utils';
import TecnologiesChips from './TecnologiesChips';
import { useState } from 'react';

export default function ReposMobile({ config, setConfig, active, setActive }) {
  return (
    <>
      <Typography marginBottom={'5%'} fontWeight={'bold'} fontSize={'18px'}>
        Repositories
      </Typography>

      {config.map((ele, i) => (
        <Box
          key={i}
          marginTop={5}
          onClick={() => {
            openExtenarUrl(ele.url);
          }}
        >
          <Box display={'flex'} justifyContent={'center'}>
            <img
              className="repo-img"
              width={ele.imgWidthMobile}
              src={'./assets/images/' + ele.img + '.png'}
              alt=""
            />
          </Box>
          <Box marginTop={ele.titleMarginTop}>
            <Typography
              textTransform={'uppercase'}
              className="title"
              fontSize={'16px'}
              textAlign="start"
              fontWeight={'bold'}
            >
              {ele.title}
            </Typography>
            <Typography
              marginTop={'2%'}
              fontSize={'14px'}
              sx={{ opacity: 0.8 }}
              textAlign="start"
            >
              {ele.desc}
            </Typography>
            <TecnologiesChips
              setActive={setActive as any}
              active={active}
              setConfig={setConfig}
              config={config}
              ele={ele}
            ></TecnologiesChips>
          </Box>
        </Box>
      ))}

      <Typography
        display={'flex'}
        justifyContent={'start'}
        textAlign={'start'}
        fontSize={14}
        sx={{ cursor: 'pointer' }}
        marginTop={6}
      >
        SEE MORE
        <ArrowDownwardIcon sx={{ marginLeft: '5px' }}></ArrowDownwardIcon>
      </Typography>
    </>
  );
}
