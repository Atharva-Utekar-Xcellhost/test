import React from 'react';
import Hero1 from '../components/hero1'
import Hero2 from '../components/hero2'
import Hero3 from '../components/hero3'
import Card from '../components/card'
import Footer from '../components/footer'
import Info1 from '../components/info1'
import Carousel2 from '../components/alsoCarousel'
import Navbar from '../components/navbar'
import nextlink from 'next/link'


const landingPage = () => {
  return <>
    
    <Hero1  />
    <div>
        <img className="mainimgdiv" src="images/invest.png"/> 
    </div>

    <Info1  />
    <Hero2  /> 
    <Card   />  
    <Hero3  />
    <Footer />




    
    {/* 
    <iframe title="Final Draft - Page 1" width={1140} height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=6aa61cf8-366e-4411-80d6-0315a5792ce8&autoAuth=true&ctid=9dc1e20e-907e-47bc-b89a-22c1fc8c815e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameBorder={0} allowFullScreen="true" />

    <Hero1  />
    <Info1  />
    <Hero2  /> 
    <Card   />  
    <Hero3  />
    <Footer />


     */}

  </>;
};

export default landingPage;
