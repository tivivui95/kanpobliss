import Navbar, { MBFooter, Footer } from "./navbar";
import MainStyles from '../styles/Main.module.css'
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarouselReact from "embla-carousel-react";
import EmblaStyles from "../styles/embla.module.css";
import Autoplay from 'embla-carousel-autoplay';
import { useState } from 'react';
import Link from "next/link";

const IntroDrawer = ({ text, pos }) => {
    return (
        <>

        </>
    )
}

const FirstContent = () => {
    return (
        <>
            <div className="flex flex-col w-40 md:w-full">
                <Link href='/body-type'>
                    <a>
                        <div className="w-full block h-56 md:h-80 relative md:hidden">
                            <Image src='/images/4/Body Type.png' alt='' height={100} width='80%' objectFit="cover" className={MainStyles.roundedcustomfull} />
                        </div>
                        <div className="w-full hidden md:block h-56 md:h-80 relative">
                            <Image src='/images/4/Body Type.png' alt='' layout="fill" objectFit="cover" className={MainStyles.roundedcustomfull} />
                        </div>
                        <h1 className="nearwhite mt-4">Body Constitution</h1>
                        <p className={MainStyles.content}>Discover your unique body through our assessment. Learn how to atttend to its needs for greater wellbeing!</p>
                    </a>
                </Link>
            </div>
        </>
    )
}

const SecondContent = () => {
    return (
        <>
            <div className="flex flex-col w-40 md:w-full">
                <div className="w-full h-96 md:h-96 relative rounded-3xl md:hidden">
                    <Image src='/images/4/image 2.png' alt='' height={384} width='120%' objectFit="cover" className="rounded-3xl" />
                </div>
                <div className="w-full h-96 md:h-96 relative hidden md:block">
                    <Image src='/images/4/image 2.png' alt='' layout="fill" objectFit="cover" className="rounded-3xl" />
                </div>
                <h1 className="nearwhite md:mt-80 w-80 md:ml-4 md:text-2xl md:w-full md:pt-6  md:rotate-0 rotate-90 -ml-36 mt-40 absolute z-20">Body Recovery</h1>
                {/* <p className={MainStyles.content}>Recover from jet-lag or nourish an upset stomach? Get back to feeling your best!</p> */}
            </div>

        </>
    )
}

const ThirdContent = () => {
    return (
        <>
            <div className="flex flex-col w-40 md:w-full">
                <div className="w-full block h-96 md:h-96 relative md:hidden">
                    <Image src='/images/4/image 4.png' alt='' height={384} width='120%' objectFit="cover" className="rounded-3xl" />
                </div>
                <div className="w-full h-96 md:h-96 relative hidden md:block">
                    <Image src='/images/4/image 4.png' alt='' layout="fill" objectFit="cover" className="rounded-3xl" />
                </div>
                <h1 className="nearwhite md:mt-80 w-80 md:rotate-0 md:ml-4 md:text-2xl md:w-full md:pt-6  rotate-90 -ml-36 mt-40 absolute z-20">Wellbeing Toolkit</h1>
                {/* <p className={MainStyles.content}>Tools to help you move one step closer to your wellbeing goals</p> */}
            </div>

        </>
    )
}

function MainImageSlider() {
    const [viewportRef, embla] = useEmblaCarousel({
        align: "start",
        skipSnaps: false
    });
    return (
        <>

            <div className={EmblaStyles.embla}>
                <div className={EmblaStyles.embla__viewport} ref={viewportRef}>
                    <div className={EmblaStyles.embla__container}>
                        <div className={EmblaStyles.embla__slide} key={0}>
                            <div className={EmblaStyles.embla__slide__inner}>
                                <FirstContent />
                            </div>
                        </div>
                        <div className={EmblaStyles.embla__slide} key={1}>
                            <div className={EmblaStyles.embla__slide__inner}>
                                <SecondContent />
                            </div>
                        </div>
                        <div className={EmblaStyles.embla__slide} key={2}>
                            <div className={EmblaStyles.embla__slide__inner}>
                                <ThirdContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Content() {
    return (
        <>
            <div className="ml-12 mb-4 mt-6 md:container md:mx-auto md:pl-8 md:pr-8">
                <Image src='/images/image 14.png' className={MainStyles.moonimg} width={100} height={80} objectFit='scale-down' alt="" />
                <div className={MainStyles.head1}><h1>Welcome</h1></div>
                <div className={MainStyles.head2}>How would you like to get started?</div>
                <div className={MainStyles.space}></div>
                <MainImageSlider />
            </div>

        </>
    )
}

export default function Main() {
    return (
        <>
            <div className={MainStyles.container}>
                <Navbar />
                <Content />
                <MBFooter />
                <Footer />

            </div>

        </>

    )
}