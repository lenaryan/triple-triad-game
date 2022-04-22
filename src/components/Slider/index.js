import React from 'react';
import Heading from '../Heading';
import Container from '../Container';
import Button from '../Button';
import s from './Slider.module.scss';

const Slider = () => {
    return (
        <section className={s.section}>
            <div className={s.slider}>
                <Container className={s.sliderContent}>
                    <Heading className={s.header}>Yo</Heading>
                    <Heading level={2} className={s.subheader}>Wow.Wow.Wow</Heading>
                    <div className={s.call}>
                        <Button>Wow</Button>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Slider;