import {
  Avatar,
  Box,
  Button,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from '@mui/material';
import router from 'next/router';

import { EmployeeData } from './types';

export default function Employee({ data }: Readonly<EmployeeData>) {
  return (
    <Box>
      <Typography className="text-center">社員・協力会社</Typography>
      <Tabs value={0}>
        <Tab label="社員一覧" className="py-[9px]" onClick={() => router.push('/user')} />
        <Tab label="協力会社一覧" className="py-[9px]" onClick={() => router.push('/partner')} />
      </Tabs>
      <TableContainer component={Paper} sx={{ width: '100%' }} className="p-2">
        <Box className="text-right">
          <Button>社員を登録</Button>
        </Box>
        <Table className="w-full table-fixed">
          <TableHead>
            <TableRow>
              <TableCell className="w-1/4">社員名</TableCell>
              <TableCell className="w-1/4">メールアドレス</TableCell>
              <TableCell className="w-1/4">電話番号</TableCell>
              <TableCell className="w-1/4"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  データがありません
                </TableCell>
              </TableRow>
            ) : (
              data.map((employee) => (
                <TableRow>
                  <TableCell className="flex">
                    <Avatar sx={{ bgcolor: '#ff0000' }}>{employee.initial}</Avatar>
                    <Box ml={2}>{employee.name}</Box>
                  </TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                  <TableCell className="text-right">
                    <Button>編集</Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
