
import * as React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Carousel from '../components/alsoCarousel';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const viewmore = () => {
  return (
  <div>

    <Container sx={{ py: 5, paddingBottom: 7 }}>
      <Grid
        container
        spacing={5}
        paddingLeft="10px"
        marginLeft="10px"
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >


        <Grid
          xs={12}
          sm={6}
          md={4}
          lg={6}
          sx={{
            padding: 2,
            bgcolor: "#F5F7ED",
            boxShadow: 10
          }}

        >
        <br/>
        <br/>
        <Typography variant="h4">OUR SAMPLE FARMLAND</Typography>
        <br />
        
        <Typography variant="h6">Samarth Krupa Farms</Typography>
        <hr />
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>  
              <RadioButtonCheckedIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Primary income source " secondary="Rice, Wheat, Bajrey " />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar>  
              <RadioButtonCheckedIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Secondary income source " secondary="Pisciculture, Poultry  " />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar>  
              <RadioButtonCheckedIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Farm Size" secondary="4.75 Acres  " />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar>  
              <RadioButtonCheckedIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Annual CAGR" secondary="9.96 % " />
          </ListItem>

          <Divider variant="inset" component="li" />          
          
          <ListItem>
            <ListItemAvatar>
              <Avatar>  
              <RadioButtonCheckedIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Lockin Period" secondary="4 years  " />
          </ListItem>

          <Divider variant="inset" component="li" />          
          
          <ListItem>
            <ListItemAvatar>
              <Avatar>  
              <RadioButtonCheckedIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Minimum Investment" secondary="15 Lakhs " />
          </ListItem>

          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>  
              <RadioButtonCheckedIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Exit Load" secondary=" 2 Lakhs " />
          </ListItem>


        </List>


        <Container >
      <Divider>
        <Chip label="About the farm" />
      </Divider>
      <br />
        <Typography>Located in the heart of Maharashtra, this farm contains  5 acres of irrigated crop ground and woodlands. The farm contains a loamy sand soil that is highly suitable for all kinds of crops most preferably paddy, finger millet, common millet, pigeon pea and black gram. The farm is located at Old Satpati Road, Near Navoday ,Vidyalaya, Haranwadi Rd in Pālghar only in 2.3 km from the centre. The most proximate Chhatrapati Shivaji International Airport Mumbai is disposed in 67 km from the farm stay.
        </Typography>
      <br />
      <Divider>
        <Chip label="Investment highlights" />
      </Divider>
      <br />
        <Typography>
        Investment Highlights: <br />
•	9.5 years lock in period which gives stable cashflows and potential for long term appreciation as compared to other normal revenue generating assets in India. <br />
•	The property is currently managed by Amogh Virsawarkar and his spledid young team of agro specialits , with whose help the yield as well as the revenue have rosen as prior. <br />
•	Through the work of our team, the farm was able to obtain new machinery in 2017, which resulted in an immediate increase in yields <br />
•	The growth rate as well as additional incomes geneated from other assets have rosen up by 7.3% in the year 2019 alone  <br />
•	Even during the Pandemic Period of Covid-19, our businesses did not sufferlosses, and were expertly managed during a time of crisis. <br />

        </Typography>
        <br />
      <Divider>
        <Chip label="Additional Information" />
      </Divider>
      <br />
        <Typography>The farm is irrigated by three center pivots with water supplied by two wells that provide ample water to the crop acres. These soils are capable of growing a wide diversity of crops and drain very well. The farm is expected to grow by incorporating cotton as well as sericulture farming which  may boost lease income by 10%-20%.The farm has an active lease for 2020 with interest in a multi-year extension
        </Typography>
        <br />

        </Container>


        </Grid>

        
        <Grid xs={12} sm={6} md={6} lg={6}>
          <Box>
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <Grid item xs={6} sm={6} md={6} lg={6}><img className="imga" src='/images/i1.jpg'/></Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}><img className="imgb" src='/images/i2.jpg'/></Grid>          
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
            <img className="imgc" src='/images/i3.jpg'/>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <Grid item xs={6} sm={6} md={6} lg={6}><img className="imgb" src='/images/i4.jpg'/></Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}><img className="imga" src='/images/i5.jpg'/></Grid>          
            </Grid>
          </Box>
        </Grid>




      </Grid>
    </Container>
  </div>

  );
}

export default viewmore;

