import React from "react";
import { Parallax, Background } from "react-parallax";
import { links } from './data';
import navbar from './navbar'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  color:"#fff",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "35%",
  transform: "translate(-50%,-50%)"
};

const image2 ="/images/bgImg1.jpg";


const herosection = () => {
    return(
    <div>

    {/* 
    Normal parallax
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
    </Parallax> */}

    {/* 
    Dynamic blur parallax
    <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Dynamic Blur</div>
      </div>
    </Parallax> */}




    <Parallax bgImage={image2} strength={-175} speed={20}>

      <nav className="navbar navbar-expand-lg navbar-transparent">
        <Link className="navbar-brand" href="/">
          <img src="/images/icon1.png" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navleft">
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li className="nav-item" key={id}>
                      <div className="nav-link">
                      <Link href={url}>
                      <h5 className="nav-title">{text}</h5>
                      </Link>
                      </div>

                    </li>
                  );
                })}
            </ul>
        </div>
        <Link href='/login'>
  
          <Button variant="outlined" color="success" size="medium" sx={{marginRight: 7, color:'#fff', borderColor: '#fff'}}>
            Login to Dashboard
          </Button>
        </Link>
      </nav>


   
      <div style={{ height: 500 }}>

        <div style={insideStyles}>

        <Typography variant="h3" sx={{ fontWeight: '500' }}>कृषिinvest</Typography>
        <br />
        <h2>Diversify your portfolio while supporting a farmer</h2>
        <h4>Investing online, in minutes.</h4>
        </div>
      </div>
    </Parallax>

    <div style={{ height: 25 }} />
    {/*<img src="/images/i1.png" className="img1" />*/}
    <div style={{ height: 25 }} />

    </div>
  );
  
};

export default herosection;
