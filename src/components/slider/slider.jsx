import cls from './styles.module.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { TbChevronRight, TbChevronLeft } from 'react-icons/tb';
import clsx from 'clsx';

const properties = {
    prevArrow: <button className={clsx(cls.sliderBtn, cls.prev)}><TbChevronLeft color="#323232" size={24} /></button>,
    nextArrow: <button className={clsx(cls.sliderBtn, cls.next)}><TbChevronRight color="#323232" size={24} /></button>
}

export const Slideshow = ({ slideImages }) => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
         {slideImages?.map((slideImage, index)=> (
            <div key={index}>
              <div className={cls.sliderImage} style={{ 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}