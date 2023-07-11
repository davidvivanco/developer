import { Box, Modal, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import '../styles/Home.scss';
import Slider from './Slider';
import { InlineWidget } from 'react-calendly';
import { useEffect, useState } from 'react';
import { openExtenarUrl } from '../utils/utils';
import { filter, fromEvent, map } from 'rxjs';

export default function Home() {
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
      <Box id="Home">
        <Slider></Slider>
        <div className="main">
          <div className="name">
            <Typography
              textTransform={'uppercase'}
              fontWeight="bold"
              fontSize={'36px'}
            >
              David Vivanco
            </Typography>
            <Typography fontSize={20} lineHeight={1.3} maxWidth={'60%'}>
              Hi! My name is David Vivanco. I'm a Software Developer based in
              Madrid. I'm interested in freelance opportunities.
            </Typography>

            <Box display={'flex'}>
              <div
                className="button"
                onClick={() => {
                  openExtenarUrl(
                    'https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example'
                  );
                }}
              >
                Contacto
                <EmailIcon />
              </div>
              <div
                onClick={handleOpen}
                className="button"
                style={{ marginLeft: '10px', maxWidth: '300px' }}
              >
                ¿Necesitas una reunión?
                <CalendarMonthIcon />
              </div>
            </Box>
          </div>
          <img style={{ height: '80%' }} src="./assets/images/me.jpeg" alt="" />
        </div>
      </Box>

      <Modal
        disableAutoFocus={true}
        open={open}
        sx={{
          border: 'none',
          display: 'flex',
          justifyContent: 'center',
        }}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            width: '90%',
          }}
        >
          <InlineWidget
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
