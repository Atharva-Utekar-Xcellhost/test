import React from 'react';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link'

import { Farms } from './data';


const card = () => {
  return <>
    <Typography gutterBottom variant="h4" sx={{ fontWeight: 600, paddingLeft:15, paddingTop: 2, marginBottom: 2 }} component="h2">
    Recently closed deals
    </Typography>
    <Container sx={{ py: 5, paddingBottom: 7, maxWidth:800 }}>
          {/* End hero unit */}
          <Grid container spacing={3}>

          {Farms.map((Farm) => (
            <Grid item key={card} xs={12} sm={6} md={4} lg={3} >
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 12 }}
                >
                  <CardMedia
                    component="img"   
                    src={Farm.img}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2" gutterBottom>
                    {Farm.Location} 
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: 24, fontWeight: 600 }} component="h2">
                    {Farm.Name} 
                    </Typography>
                    <Typography variant="body2" gutterBottom >
                    Min. investment: <CurrencyRupeeIcon sx={{ fontSize: 15 }}/>{Farm.MinInv}<br />
                    Size:  {Farm.Area}<br />
                    Net annual Return:  {Farm.Returns}<br />
                    Rating:  {Farm.Rating}<br />

                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Link href="/viewmore">
                  <Button size="small">View More</Button>
                  </Link>
                  </CardActions>
                </Card>
            </Grid>

            ))}
          

            {/* <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"   
                    src="/images/farm6.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2" gutterBottom>
                    Khed, Ratnagiri 
                    </Typography>
                    <Typography gutterBottom variant="h6 bold" component="h2">
                    Vijay Farms 
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    Min. investment: <CurrencyRupeeIcon sx={{ fontSize: 15 }}/>10 Lakhs <br />
                    Size:  3743.64 sq.m.<br />
                    Net annual Return:  7.9%<br />
                    Rating:  4.3<br />

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View More</Button>
                  </CardActions>
                </Card>
            </Grid>
            
            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"   
                    src="/images/farm1.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2" gutterBottom>
                    Khed, Ratnagiri 
                    </Typography>
                    <Typography gutterBottom variant="h6 bold" component="h2">
                    Vijay Farms 
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    Min. investment: <CurrencyRupeeIcon sx={{ fontSize: 15 }}/>10 Lakhs <br />
                    Size:  3743.64 sq.m.<br />
                    Net annual Return:  7.9%<br />
                    Rating:  4.3<br />

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View More</Button>
                  </CardActions>
                </Card>
            </Grid>
            
            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"   
                    src="/images/farm5.webp"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2" gutterBottom>
                    Khed, Ratnagiri 
                    </Typography>
                    <Typography gutterBottom variant="h6 bold" component="h2">
                    Vijay Farms 
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    Min. investment: <CurrencyRupeeIcon sx={{ fontSize: 15 }}/>10 Lakhs <br />
                    Size:  3743.64 sq.m.<br />
                    Net annual Return:  7.9%<br />
                    Rating:  4.3<br />

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View More</Button>
                  </CardActions>
                </Card>
            </Grid>

            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"   
                    src="/images/farm2.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2" gutterBottom>
                    Khed, Ratnagiri 
                    </Typography>
                    <Typography gutterBottom variant="h6 bold" component="h2">
                    Vijay Farms 
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    Min. investment: <CurrencyRupeeIcon sx={{ fontSize: 15 }}/>10 Lakhs <br />
                    Size:  3743.64 sq.m.<br />
                    Net annual Return:  7.9%<br />
                    Rating:  4.3<br />

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View More</Button>
                  </CardActions>
                </Card>
            </Grid> */}

          </Grid>
    </Container>
  </>;
};

export default card;
