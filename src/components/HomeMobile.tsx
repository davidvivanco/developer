import { Box, Divider, Modal, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.scss';
import '../styles/utils/utils.scss';
import { useEffect, useState } from 'react';
import { filter, fromEvent, map } from 'rxjs';
import { InlineWidget } from 'react-calendly';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function HomeMobile() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fromEvent<KeyboardEvent>(document, 'keyup')
      .pipe(
        map((e) => e.key),
        filter((key: string) => key === 'Escape')
      )
      .subscribe(() => {
        setOpen(false);
      });
  }, []);
  return (
    <>
      <Box
        display={'flex'}
        marginTop={3}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <img style={{ width: '80%' }} src="./assets/images/me.jpeg" alt="" />
        <Typography
          marginTop={2}
          textTransform={'uppercase'}
          fontWeight="bold"
          fontSize={'30px'}
        >
          David Vivanco
        </Typography>
        <Typography
          fontSize={20}
          marginTop={'10px'}
          lineHeight={1.3}
          textAlign={'center'}
        >
          I'm a Software Developer based in Madrid. I'm interested in freelance
          opportunities.
        </Typography>
        <Box
          display={'flex'}
          flexDirection={'column'}
          marginTop={'10px'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <div className="button">
            Contacto
            <EmailIcon />
          </div>
          <div
            onClick={handleOpen}
            className="flex jc-c ai-c"
            style={{ marginTop: '15px'  }}
          >
            ¿Necesitas una reunión?
            <CalendarMonthIcon sx={{ marginLeft: '5px' }} />
          </div>
        </Box>
      </Box>
      <Modal
        disableAutoFocus={true}
        open={open}
        sx={{
          border: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            width: '90%',
            height: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <InlineWidget
            styles={{ height: '100%', width: '90%' }}
            prefill={{
              firstName: '',
            }}
            url="https://calendly.com/davidvivanco"
          />
        </Box>
      </Modal>
    </>
  );
}
