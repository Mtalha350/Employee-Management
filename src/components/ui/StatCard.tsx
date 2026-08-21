import { Card, CardContent, Typography } from '@mui/material';

interface StatCardProps {
  label: string;
  value: string | number;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: '15px',
        border: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: 'background.paper',
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 2.5, lg: 3 } }}>
        <Typography
          component='p'
          sx={{
            fontSize: {
              xs: '11px',
              sm: '12px',
            },
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: 'text.secondary',
          }}
        >
          {label}
        </Typography>

        <Typography
          component='p'
          sx={{
            mt: 0.5,
            fontSize: {
              xs: '22px',
              sm: '25px',
            },
            fontWeight: 600,
            lineHeight: 1,
            color: 'text.primary',
          }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
