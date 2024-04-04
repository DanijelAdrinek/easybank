import React from 'react';
import Image from 'next/image'; 
import bgIntroMobile from '$public/images/bg-intro-mobile.svg';
import phonesImg from  '$public/images/phones.png';
import styles from './hero.module.css';

const bgAltText = 'background';
const phonesAltText = 'image containing four phones close to each other';

function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={bgIntroMobile} alt={bgAltText} />
                <Image src={phonesImg} alt={phonesAltText} />
            </div>
        </div>
    );
}

export default Hero;