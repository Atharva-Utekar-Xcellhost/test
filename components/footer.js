import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


export default function StickyFooter() {
  return (
  <div>
  
    <Container spacing={2} component="footer">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <CardContent>
            <CardActions>
            <Link href="/whatwedo">
            <Button size="medium">What we do ?</Button>
            </Link> 
            <Link href="/ourexperts">
            <Button size="medium">Our Experts</Button>
            </Link>    
            <Link href="/faq">
            <Button size="medium">FAQ</Button>
            </Link> 
            </CardActions>
        </CardContent>


      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>

        <Grid item xs={12} sm={6} md={4} lg={4}>
        <Typography variant="h4" sx={{ fontWeight: '500' }}>कृषिinvest</Typography>
        <br />
        </Grid>



        <Grid  item xs={12} sm={6} md={4} lg={4}>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          
                <Typography variant="h5" component="div">
                    Contact
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    +91 8652521225 <br />
                    St. Francis Institute Of Technology, Borivali <br />
                    Mumbai, Maharashtra, India
                </Typography>

        </Grid>



      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} align="center" >
        <Container sx={{marginBottom:"10"}}>
            <Typography variant="body1" color="text.secondary">
            {'Copyright © Atharva Utekar 2022'}
            {'.'}
            </Typography>
        </Container>
      </Grid>
      <div style={{ height: 25 }} />

    </Container>
          
  </div>

  );
}