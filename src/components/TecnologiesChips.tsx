import { Box, Chip } from '@mui/material';
import AngularIcon from './icons/Angular';
import IonicIcon from './icons/Ionic';
import RxJsIcon from './icons/RxJs';
import { reposConfig } from '../config/repos';
import { useState } from 'react';

export default function TecnologiesChips({
  config,
  setSideBarOpen = () => {},
  setConfig,
  ele,
  setActive,
  active,
  filters = false,
}) {
  const defaultConfig = reposConfig;

  const onChipClik = (filter: string) => {
    console.log(active, filter);
    if (!filters) return;
    setConfig(
      active === filter || filter === 'all'
        ? defaultConfig
        : defaultConfig.filter((ele) => ele?.tecnologies?.includes(filter))
    );
    if (typeof setSideBarOpen === 'function') setSideBarOpen();
    if (typeof setActive === 'function')
      setActive(active === filter ? 'all' : filter);
  };
  return (
    <Box
      display={'flex'}
      flexWrap={'wrap'}
      justifyContent={'start'}
      marginTop={'5px'}
    >
      {filters && (
        <div
          onClick={() => onChipClik('all')}
          className="flex jc-c ai-c"
          style={{
            border:
              active === 'all' ? '1px solid #bbefc8' : '1px solid #bebebe',
            borderRadius: '20px',
            marginRight: '3px',
            paddingLeft: '10px',
            background: filters && active === 'all' ? '#bbefc8' : '',
            height: '32px',
            paddingRight: '10px',
            cursor: 'pointer',
            marginTop: '3px',
            marginBottom: '3px',
          }}
        >
          <span style={{ fontSize: '13px' }}> Todas</span>
        </div>
      )}
      {(filters || ele.tecnologies.includes('angular')) && (
        <Chip
          clickable={false}
          onClick={() => onChipClik('angular')}
          className="cp"
          label="Angular"
          icon={<AngularIcon />}
          sx={{
            cursor: 'pointer',
            border: filters && active === 'angular' ? '1px solid #bbefc8' : '',
            background: filters && active === 'angular' ? '#bbefc8' : '',
            marginRight: 0.5,
            marginLeft: 0,
            marginTop: '3px',
            marginBottom: '3px',
          }}
          variant="outlined"
        />
      )}
      {(filters || ele.tecnologies.includes('ionic')) && (
        <Chip
          clickable={false}
          onClick={() => onChipClik('ionic')}
          className="cp"
          label="Ionic"
          icon={<IonicIcon />}
          sx={{
            cursor: 'pointer',
            border: filters && active === 'ionic' ? '1px solid #bbefc8' : '',
            background: filters && active === 'ionic' ? '#bbefc8' : '',
            marginRight: 0.5,
            marginTop: '3px',
            marginBottom: '3px',
          }}
          variant="outlined"
        />
      )}

      {(filters || ele.tecnologies.includes('rxjs')) && (
        <Chip
          clickable={false}
          onClick={() => onChipClik('rxjs')}
          className="cp"
          icon={<RxJsIcon />}
          label="RxJS"
          sx={{
            cursor: 'pointer',
            border: filters && active === 'rxjs' ? '1px solid #bbefc8' : '',
            background: filters && active === 'rxjs' ? '#bbefc8' : '',
            marginTop: '3px',
            marginBottom: '3px',
            marginRight: 0.5,
          }}
          variant="outlined"
        />
      )}
      {(filters || ele.tecnologies.includes('phaser')) && (
        <div
          className="flex jc-c ai-c"
          style={{
            border:
              filters && active === 'phaser'
                ? '1px solid #bbefc8'
                : '1px solid #bebebe',
            background: filters && active === 'phaser' ? '#bbefc8' : '',
            borderRadius: '20px',
            height: '32px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginTop: '3px',
            marginBottom: '3px',
            cursor: 'pointer',
          }}
          onClick={() => onChipClik('phaser')}
        >
          <img
            style={{ marginRight: '4px' }}
            src="./assets/icons/phaser.svg"
            height={20}
            alt=""
          />
          <span style={{ fontSize: '13px' }}> Phaser</span>
        </div>
      )}

      {(filters || ele.tecnologies.includes('material')) && (
        <div
          onClick={() => onChipClik('material')}
          className="flex jc-c ai-c"
          style={{
            border:
              filters && active === 'material'
                ? '1px solid #bbefc8'
                : '1px solid #bebebe',
            borderRadius: '20px',
            marginLeft: '3px',
            paddingLeft: '10px',
            background: filters && active === 'material' ? '#bbefc8' : '',
            height: '32px',
            paddingRight: '10px',
            cursor: 'pointer',
            marginTop: '3px',
            marginBottom: '3px',
          }}
        >
          <img
            style={{ marginRight: '4px' }}
            src="./assets/icons/angular-material.svg"
            height={20}
            alt=""
          />
          <span style={{ fontSize: '13px' }}> Angular Material</span>
        </div>
      )}
    </Box>
  );
}
