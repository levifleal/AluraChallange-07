import React from 'react'
import { Carousel } from 'react-bootstrap'

//imagens
//desk
import firstImgDesk from '../assets/desktop/banner1.png'
import secondImgDesk from '../assets/desktop/banner2.png'
import thirdImgDesk from '../assets/desktop/banner3.png'
//tablet
import firstImgTablet from '../assets/tablet/banner1.png'
import secondImgTablet from '../assets/tablet/banner2.png'
import thirdImgTablet from '../assets/tablet/banner3.png'
//phone
import firstImgMobile from '../assets/mobile/banner1.png'
import secondImgMobile from '../assets/mobile/banner2.png'
import thirdImgMobile from '../assets/mobile/banner3.png'




let BannerCarrosel = () => {
  return (
    <>
        <Carousel fade>
            <Carousel.Item interval={5000}>
                <picture >
                    <source media="(min-width:768px)" srcSet={firstImgDesk} />
                    <source media="(min-width:375px)" srcSet={firstImgTablet} />
                    <source media="(max-width:375px)" srcSet={firstImgMobile} />
                    <img className='w-100' src={firstImgDesk} alt="" />
                </picture>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <picture> 
                    <source media="(min-width:768px)" srcSet={secondImgDesk} />
                    <source media="(min-width:375px)" srcSet={secondImgTablet} />
                    <source media="(max-width:375px)" srcSet={secondImgMobile} />
                    <img className='w-100'  src={secondImgDesk} alt="" />
                </picture>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <picture>
                    <source media="(min-width:768px)" srcSet={thirdImgDesk} />
                    <source media="(min-width:375px)" srcSet={thirdImgTablet} />
                    <source media="(max-width:375px)" srcSet={thirdImgMobile} />
                    <img className='w-100'  src={thirdImgDesk} alt="" />
                </picture>
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default BannerCarrosel