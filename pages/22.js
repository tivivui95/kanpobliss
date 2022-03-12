import styles from '../styles/2245.module.css';
import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";


const username = 'Jane Doe';
const data = [
    {
        tag: 'Mindifulness',
        title: 'Morning Affirmation Meditation',
        img: '/images/25/Rectangle 19.png'
    },
    {
        tag: 'Acupressure',
        title: 'Evening Tension Relief Ritual',
        img: '/images/25/Rectangle 20.png'
    }
]

const iconsrc = [
    '/images/25/fb-green.svg',
    '/images/25/ins-green.svg',
    '/images/25/yt-green.svg',
]


export default function Content25() {
    return (
        <div>
            <div>
                <div className={styles.coverimg}>
                    <div className={styles.contentcover}>
                        <Navbar />
                        <div className='container mx-auto'>
                            <div className='p-4 text-2xl md:text-4xl nearwhite'>Self care tips for <h1>Mantra</h1>
                            </div>
                        </div>
                    </div>

                    <Image src='/images/22/IMG_0442 1.png' alt='' layout='fill' objectFit='cover' />
                </div>
            </div>
            <div className={styles.container}>
                <div className='container mx-auto pt-12 p-4'>
                    <div className='text-xl md:text-2xl nearwhite pb-6'>Zu San Li - The point of longevity</div>
                    <div className='flex md:flex-row flex-col'>
                        <div className='w-full h-96 hidden md:block relative'>
                            <Image src='/images/22/foot.png' alt='' layout='fill' objectFit='cover' />
                        </div>
                        <div className='p-3 nearwhite'>
                            One of the most frequently used points, one of the most important points to boost qi and blood. Its commonly used to
                            <ul className='p-2'>
                                <li>promote general well-being and improve immunity</li>
                                <li>alleviate gastrointestinal issues such as gastric pain, vomiting, bloating, indigestion, constipation and diarrhea</li>
                                <li>relieve pain in the knee and shin area</li>
                            </ul>
                            It is located on the leg, 4 fingers width from the bottom of your knee cap and 1 finger width towards the outer shin bone.
                            <Link href='#'><a className="greenbtn block mt-4">All Recommendations</a></Link>
                        </div>

                    </div>
                    <div className='w-full h-60 md:h-96 relative mt-6 mb-6'>
                        <Image src='/images/22/vid.png' alt='' layout='fill' objectFit='cover' />
                    </div>
                    <div className='divider'></div>
                    <div className='nearwhite'>Other Recommendations</div>
                    <div className='relative'>
                        <div className={styles.content5}>
                            <div className={styles.card}>
                                <Image src="/images/19/Card5.png" layout="fill" objectFit="contain" alt="" className={styles.card} />
                            </div>
                            <div className={styles.card}>
                                <Image src="/images/19/Card6.png" layout="fill" objectFit="contain" alt="" className={styles.card} />
                            </div>
                        </div>
                    </div>

                </div>

                <MBFooter />
                <Footer />
            </div>


        </div>
    )
}