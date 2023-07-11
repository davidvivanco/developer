import { SvgIcon } from '@mui/material';

export default function AngularIcon({ width = 20, color = '#dd0031' }) {
  return (
    <SvgIcon sx={{ width, paddingLeft: 1, paddingRight: 0 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill={color} d="M213.57 256h84.85l-42.43-89.36L213.57 256z" />
        <path
          fill={color}
          d="M256 32L32 112l46.12 272L256 480l177.75-96L480 112zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280z"
        />
      </svg>
    </SvgIcon>
  );
}
