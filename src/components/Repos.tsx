import { Box, Chip, Typography } from '@mui/material';

import AngularIcon from '../components/icons/Angular';
import IonicIcon from '../components/icons/Ionic';
import RxJsIcon from '../components/icons/RxJs';
import { openExtenarUrl } from '../utils/utils';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { reposConfig } from '../config/repos';
import TecnologiesChips from './TecnologiesChips';
import { useState } from 'react';

export default function Repos({ config, setConfig, active, setActive }) {
  return (
    <Box id="Repos">
      <Typography marginBottom={'5%'} fontWeight={'bold'} fontSize={'20px'}>
        Repositories
      </Typography>

      {config.map((ele, i) => (
        <Box
          key={i}
          marginTop={'5%'}
          sx={{ cursor: 'pointer' }}
          display={'flex'}
          onClick={() => {
            openExtenarUrl(ele.url);
          }}
        >
          <Box width={'70%'} className="flex fd-col">
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
              className="desc"
              width={'95%'}
              marginTop={'2%'}
              fontSize={'14px'}
              sx={{ opacity: 0.8 }}
              textAlign="start"
            >
              {ele.desc}
            </Typography>
            <TecnologiesChips
              active={active}
              setActive={setActive}
              setConfig={setConfig}
              config={config}
              ele={ele}
            ></TecnologiesChips>
          </Box>
          <Box width={'40%'}>
            <div
              style={{
                boxSizing: 'border-box',
                borderRadius: '2px',
                background: 'white',
                marginTop: '-15px',
                marginRight: '-5px',
              }}
            >
              <img
                className="repo-img"
                style={ele.imageStyle}
                width={ele.imgWidth}
                src={'./assets/images/' + ele.img + '.png'}
                alt=""
              />
            </div>
          </Box>
        </Box>
      ))}

      <Typography
        display={'flex'}
        justifyContent={'start'}
        textAlign={'start'}
        sx={{ cursor: 'pointer' }}
        marginTop={'5%'}
      >
        SEE MORE
        <ArrowDownwardIcon sx={{ marginLeft: '5px' }}></ArrowDownwardIcon>
      </Typography>
    </Box>
  );
}
