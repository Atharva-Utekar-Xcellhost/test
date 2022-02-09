import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";

function createData(a, b, c, d, e , f, g) {
    return { a, b, c, d, e ,f ,g };
  }

const rows = [
  createData('Attractive Yield', <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CancelIcon sx={{ color: 'error.main' }}/>, <CancelIcon sx={{ color: 'error.main' }}/>, <CheckCircleIcon sx={{ color: 'success.main' }}/>),
  createData('Low Volatility', <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CancelIcon sx={{ color: 'error.main' }}/>, <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CancelIcon sx={{ color: 'error.main' }}/>),
  createData('Equity Build Up', <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CancelIcon sx={{ color: 'error.main' }}/>, <CancelIcon sx={{ color: 'error.main' }}/>, <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CancelIcon sx={{ color: 'error.main' }}/>),
  createData('Hard Asset', <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CancelIcon sx={{ color: 'error.main' }}/>, <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CancelIcon sx={{ color: 'error.main' }}/>),
  createData('Inflation Hedge', <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CancelIcon sx={{ color: 'error.main' }}/>, <CheckCircleIcon sx={{ color: 'success.main' }}/>, <CheckCircleIcon sx={{ color: 'success.main' }}/>,<CancelIcon sx={{ color: 'error.main' }}/>,<CancelIcon sx={{ color: 'error.main' }}/>),
  createData('Average Annual Return', '10-11%', '6-8%', '9%', '5%', '2-4%', '4-20%'),
];

export default function AcccessibleTable() {
  return (
    <div>
   
      <Typography gutterBottom variant="h4" sx={{ fontWeight: 600, paddingLeft:5, paddingTop: 2, marginBottom: 2 }} component="h2">
      Comparision with other asset classes
      </Typography>

      <Container>

      <TableContainer component={Paper} sx={{ height:450, maxWidth:800, justifyContent: 'center', marginTop:5, marginBottom: 5, boxShadow: 4, border:'none'}}>
      <Table aria-label="table" >
        <TableHead>
          <TableRow>
            <TableCell align="left">Asset Class</TableCell>
            <TableCell align="center">Our Farmland</TableCell>
            <TableCell align="center">Bonds and ETFs</TableCell>
            <TableCell align="center">Real Estate</TableCell>
            <TableCell align="center">Gold</TableCell>
            <TableCell align="center">Fixed Deposits</TableCell>
            <TableCell align="center">Crypto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow key={row.name} sx={{justifyContent: 'center'}}>
              <TableCell component="th" scope="row">{row.a}</TableCell>
              <TableCell align="center">{row.b}</TableCell>
              <TableCell align="center">{row.c}</TableCell>
              <TableCell align="center">{row.d}</TableCell>
              <TableCell align="center">{row.e}</TableCell>
              <TableCell align="center">{row.f}</TableCell>
              <TableCell align="center">{row.g}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>

</div>



  );
}