import React from 'react'
import Section from './Section'
import '../css/home.css'
import { AiFillApple } from 'react-icons/ai'
import HomeCard from './HomeCard'
import Footer from './Footer'

function MobileHome() {
    return (
        <div className="home">
        <Section
        
        title="iPhone 12"
        subtitle = "Blast Past Blast"
        link = '/iphone12'
        image = 'https://i.ibb.co/WpczLn9/apple-iphone-12-new-design-geo-10132020-jpg-og-removebg-preview.png' 
        />

        <Section
        background = 'dark'
        imageBackground =  'image__background'
        title = "iPhone 12 Pro"
        color = "white__text"
        subtitle = {`It's a leap year`}
        image = 'https://i.ibb.co/1nTMCs1/i-Phone-12-Pro-1-removebg-preview.png'
        />
            <Section
        background = 'dark'
        imageBackground =  'image__background watch'
        title = "WATCH"
        link = '/watch'
        small = "series 6"
        icon = {<AiFillApple/>}
        color = "white__text"
        subtitle = 'The future of health is in your wrist'
        image = 'https://i.ibb.co/5j417mT/apple-watch-series-6-1-9-removebg-preview.png'
        />
       
       <div className="home__grid">
      <Section
     
        title="iPad Air"
        subtitle="Powerful. Colorful . Wonderful"
        link="/iphone12"
        color = 'grey'
        image="https://dhlm2eb86cbhs.cloudfront.net/public/thumbs/news/2020/09/33201/20200916_140125_0000_425_735.png"
      />
      <Section
      
        title="AirPods Max"
        
        link="/iphone12"
        image="https://i.ibb.co/NKqp15x/airpods-max-hero-select-202011-FMT-WHH-removebg-preview.png"
      />
      </div>
      <div className="home__cards">
        <HomeCard
          className="bottom"
          title="TV+"
          sub
          description="get one year of apple TV+ free when you buy an apple device"
          image="https://i.ibb.co/PxTkrJ0/promo-tile-tv-plus-january-multi-show-exe3n6u00l8i-xlarge.jpg"
        />
        <HomeCard
          className="top"
          title="Arcade"
          sup
          description="get one year of apple TV+ free when you buy an apple device"
          image="https://i.ibb.co/KNs3j5W/tile-cauwwcyyn9hy-large.jpg"
        />
      </div>
      <div className="home__footer">
        <div className="home__footer__content">
        <div className="home__footer__text">
        <p>1. Apple TV+ is R84.99/month after free trial. One subscription per Family Sharing group. Offer valid for three months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.</p>
        <p>2. R84.99/month after free trial. One subscription per Family Sharing group. Offer valid for three months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.</p>
        <p>Not all straps available in all regions.</p>
        </div>
        

        <Footer />
        </div>
        
       
      </div>
        
        </div>
    )
}

export default MobileHome
