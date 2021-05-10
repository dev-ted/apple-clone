import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { FiArrowUpRight } from 'react-icons/fi'
import '../css/homeCard.css'
import { AiFillApple } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function HomeCard({image,title,description ,className ,sup ,sub}) {
    return (
        <div className="home__card"
        style = {{ backgroundImage: `url(${image}) `}}
        >
            <div className={className}>
            <Link to="/">
            <div className="home__card__title">{<AiFillApple/>}{title}</div>
            </Link>
            <div className="home__card__description">
                <p>{description}. {!sup &&(<sup> 1</sup>)}</p> 
            </div>
            

            <div className="home__card__actions">
                <div className="learn">
                    <span>Learn more</span> <span className="span__icon"><BiChevronRight /></span>
                </div>
                <div className="try__free">
                    <span>Try it free{!sub && (<sup> 2</sup>)} </span> <span className="span__icon"><FiArrowUpRight /></span>
                </div>
            </div>

            </div>
           

            
        </div>
    )
}

export default HomeCard
