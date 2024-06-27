import { Grid } from '@mui/material';

import Chart from './chart';
import Deposit from './deposit';
import Order from './order';
import { ChartData, DepositData, OrderData } from './types';

export default function Dashboard({
  chart,
  deposit,
  order,
}: Readonly<{ chart: ChartData; deposit: DepositData; order: OrderData }>) {
  return (
    <Grid container spacing={3}>
      <Grid item md={8} lg={9}>
        <Chart data={chart.data} />
      </Grid>
      <Grid item md={4} lg={3}>
        <Deposit data={deposit.data} />
      </Grid>
      <Grid item xs={12}>
        <Order data={order.data} />
      </Grid>
    </Grid>
  );
}
