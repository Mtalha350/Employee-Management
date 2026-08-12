import { Card, CardContent, Typography } from '@mui/material';

interface StatCardProps {
  label: string;
  value: string | number;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <Card
      elevation={0}
      className='rounded-[20px]! border! border-[#2b2f4b]! bg-[#15192f]!'
    >
      <CardContent className='p-6!'>
        <Typography
          component='p'
          className='text-[14px]! font-medium! uppercase! tracking-[0.5px]! text-[#9296ad]!'
        >
          {label}
        </Typography>

        <Typography
          component='p'
          className='mt-3! text-[30px]! font-semibold! leading-none! text-[#f4f5fb]!'
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
