import React from 'react';
import style from './Slider.module.css';
import Heading from '../Heading';

const Slider = () => {
    return (
        <section className={style.section}>
            <div className={style.slider}>
                <div className={style.container + ' ' + style.sliderContent}>
                <Heading />
                <h2 className={style.subheader}>Wow.Wow.Wow</h2>
                <div className={style.call}>
                    <button className={style.button}>Wow</button>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Slider;