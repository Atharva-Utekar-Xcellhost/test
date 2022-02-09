import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Timeline } from "@material-ui/lab";
import { TimelineItem } from "@material-ui/lab";
import { TimelineSeparator } from "@material-ui/lab";
import { TimelineConnector } from "@material-ui/lab";
import { TimelineContent } from "@material-ui/lab";
import { TimelineDot } from "@material-ui/lab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
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
        <Grid xs={12} sm={6} md={4} lg={4}>
          <h1 style={{ padding: 10 }}>HOW WE WORK?</h1>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Farm Selection & Entity Creation
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Investment </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Farm Management</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Distribution</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>

        <Grid
          xs={12}
          sm={6}
          md={4}
          lg={8}
          sx={{
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 0,
          }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              width: 500,
              height: 450,
              border: 1,
              boxShadow: 20,
            }}
          >
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab
                  label="Farm Selection & Entity Creation"
                  {...a11yProps(0)}
                />
                <Tab label="Investment" {...a11yProps(1)} />
                <Tab label="Farm Management" {...a11yProps(2)} />
                <Tab label="Distribution" {...a11yProps(3)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>

                Each parcel we review is of the highest quality, so we select only a small fraction of them.  <br />

                The legal title of each farm is placed into a unique entity (usually an LLC). <br/>

                A unique entity establishes a real estate contract with the land owner and is given a period of time to complete due diligence, legal work, and raise funds on KissanUdyog. 
                The typical time period for this is 30-90 days.


              </TabPanel>

              <TabPanel value={value} index={1} dir={theme.direction}>
                You purchase shares in the entity that owns a farm. This can be
                done in just minutes online. Each entity is divided into shares
                equivalent to 1/10 of an acre. So, if you buy 20 shares, your
                ownership represents the equivalent of 2 acres of land and the
                associated dividends. Our online process can be completed in
                just minutes, and you can invest 100% electronically. Or, if you
                prefer, feel free to contact us for help through the investment
                process.

              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
              <ul>
                <li>We work closely with our farmers and external managers to help with best practices, technological improvements, sustainability, and immediate access to capital.
</li>
                <li>We strive to improve our farmers' lives and ease of doing business in every way possible. Kisan Udyog farmers pay cash rent, which is a common relationship between farmers and landowners.
</li>
                <li>The rent is kept in a unique bank account held by the entity to reserve against any taxes owed or potential capital improvements until payout in December. 
</li>
                <li>We charge a flat annual administration fee of 0.75% (of overall farm value) that is typically deducted from the income of the farm.
</li>
              </ul>

              </TabPanel>
              <TabPanel value={value} index={3} dir={theme.direction}>
              <ul>
                <li>Kisan Udyog disburses excess annual income to investors. We would generally expect an unlevered yield of 3% - 5% for lower-risk properties. 
</li>
                <li>Investors in each farm receive dividends each December in addition to expected annual value appreciation. 
</li>
                <li>Any necessary tax documentation will be provided by February of the following year, well in advance of tax season.
</li>
              </ul>

              </TabPanel>
            </SwipeableViews>
          </Box>
        </Grid>
      </Grid>

      <Grid>
            <Typography
              gutterBottom
              variant="h4"
              sx={{
                maxWidth: "100%",
                fontSize: 19,
                fontWeight: 10,
                paddingLeft: 4,
                paddingTop: 3,
                marginBottom: 4,
              }}
            >
            <Typography variant="h4">What do we do?<br /></Typography>

<Typography variant="body1">
Through both our proprietary sourcing technology and strategic partnerships , we review a mix of on-market and off -market opportunities  across the Indian subcontinent. Roughly 2% of the deals that enter  our pipeline are eventually offered on our platform 

The kernel agenda of our business plan is to bridge the gap between farmers and investors and thus energize and strengthen the economy of India. The massive challenges faced by farmers are unemployment and financial hardships be it due to environmental reasons or economical issues. We plan to dispense farmers with a chance to dilate their business by incorporating investment from investors as well as get supervised assistance from our certified and trained agro specialists. For Investors our goal is to provide a reliable and high yield return asset as compared to other ubiquitous investments.
We offer an Equity based Model in which the investor invests in equity offered by the local farmer through our platform (Website). Which is managed and supervised by our highly skilled team of Agro Engineers, who provide critical insights to augment productivity. Our Business model can be further scaled by populating  additional revenue generating sources of income such as poultry, pisciculture, sericulture on the farm as well.Our Project promotes as well as espouses entrepreneurship  among the young generation of India and at the same time dispenses quality education to both farmers as well as the investors about agriculture which is the backbone of our country.
            

</Typography>
</Typography>
      </Grid>
    </Container>
  );
}
