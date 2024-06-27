import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { OrderData } from './types';

export default function Order({ data }: Readonly<OrderData>) {
  function formatDate(date: string) {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  return (
    <TableContainer component={Paper} sx={{ width: '100%' }} className="p-2">
      <Typography variant="h6" color="primary" gutterBottom>
        Recent Orders
      </Typography>
      <Table className="whitespace-nowrap" sx={{ width: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Ship To</TableCell>
            <TableCell align="left">Payment Method</TableCell>
            <TableCell align="left">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ '& .MuiTableCell-root': { padding: '6px 16px' } }}>
          {data.map((orderData) => (
            <TableRow key={orderData.id}>
              <TableCell align="left">{`${formatDate(orderData.date)}`}</TableCell>
              <TableCell align="left">{orderData.name}</TableCell>
              <TableCell align="left">{orderData.shipTo}</TableCell>
              <TableCell align="left">{orderData.paymentMethod}</TableCell>
              <TableCell align="left">{orderData.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link href="#" underline="always" color="primary">
        <Typography className="mt-6" sx={{ textDecoration: 'underline' }} color="primary">
          See more orders
        </Typography>
      </Link>
    </TableContainer>
  );
}
