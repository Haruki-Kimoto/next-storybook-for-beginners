import { Box, Link, Paper, Stack, Typography } from '@mui/material';

import { DepositData } from './types';

export default function Deposit({ data }: Readonly<DepositData>) {
  function formatDate(date: string) {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  return (
    <Paper className="flex h-48 p-2">
      <Stack>
        <Box>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Recent Deposits
          </Typography>
          <Typography variant="h6">
            ${data.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Typography>
          <Typography color="grey">{`on ${formatDate(data.date)}`}</Typography>
        </Box>
        <Link href="#" underline="always" color="primary" className="mt-auto">
          <Typography sx={{ textDecoration: 'underline' }} color="primary">
            View balance
          </Typography>
        </Link>
      </Stack>
    </Paper>
  );
}
