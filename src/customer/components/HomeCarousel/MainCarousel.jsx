import React from 'react'
import { mainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
    const items = mainCarouselData.map((item)=> <img src={item.image} alt="" className='cursor-pointer -z-10'role='presentation'/>)

  return (
    <div>
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1500}
        infinite
    />
    </div>
  )

}

export default MainCarousel