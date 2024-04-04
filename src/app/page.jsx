import React from 'react';
import Header from './components/header/header';
import './global.css';

import { Public_Sans } from '@next/font/google'
import Hero from './components/hero/hero';

const publicSans = Public_Sans({
    subsets: ['latin'],
    weight: ['300']
})

export default function Homepage() {
    return (
        <html>
            <body>
                <div className={publicSans.className}>
                    <Header/>
                    <Hero/>
                </div>            
            </body>
        </html>

    );
}