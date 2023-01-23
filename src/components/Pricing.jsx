import React, { Fragment,useEffect } from 'react'
import {BiCheck} from 'react-icons/bi'
import '../style/pricing.css'
import Aos from 'aos'
import "aos/dist/aos.css"

const Pricing = () => {
   //Animation Scroll
   useEffect(() =>{
    Aos.init({duration:2000});
  }, [])
  return (
    <Fragment>
      <div className="container services__container">
        {/*  UI/UX */}
        <article className="service" data-aos="fade-right">
          <div className="services__head">
            <h3>Basic</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Unlimited movies, TV shows, and mobile games</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Watch on 1 supported device at a time</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Ad-free TV shows and movies</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Download on 1 supported device at a time</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Watch in HD</p>
            </li>
          </ul>
          <div className='button_btn'>
            <button className='button__btn'>Buy Now</button>
          </div>
        </article>

        {/* Premium*/}
        <article className="service" data-aos="fade-up">
          <div className="services__head" >
            <h3>Premium</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Watch on 4 supported devices at a time</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Unlimited movies, TV shows, and mobile games</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Ad-free TV shows and movies</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Download on 4 supported devices at a time</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Watch in Ultra HD</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
          <div className='button_btn'>
            <button className='button__btn'>Buy Now</button>
          </div>
        </article>

        {/* Standard*/}
        <article className="service" data-aos="fade-left">
          <div className="services__head">
            <h3>Standard</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Watch on 2 supported devices at a time</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Unlimited movies, TV shows, and mobile games</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ad-free TV shows and movies</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Download on 2 supported devices at a time</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Watch in Full HD</p>
            </li>
          </ul>
          <div className='button_btn'>
            <button className='button__btn'>Buy Now</button>
          </div>
        </article>
      </div>
    </Fragment>
  )
}

export default Pricing