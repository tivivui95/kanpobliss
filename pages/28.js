import styles from '../styles/2245.module.css'
import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";
import react from 'react';
import { useState , useEffect } from 'react';

const ourPromises = [
    ['Curated for the unique you', 'Our bodies are different so are our wellness journeys. Kanpobliss curates personalized recommendations catered to your body\'s unique needs and goals, helping you define your own path towards greater wellbeing.'],
    ['Care for the holistic self', 'Drawing from the wisdom of Traditional Chinese Medicine and knowledge of modern science, we care for your mind and body as whole, and appreciate their intricate connections with your surroundings.'],
    ['Empower your innate ability to heal and grow', 'Together with our multidisciplinary team of health and wellness experts, our goal is to impart you with insights and knowledge, to guide you in building habits that support personal healing and growth.']
]

const founder = [
    {
        url: '/images/28/fd1.png',
        name: 'Jun Negoro',
        sub: 'Co-founder',
        text: 'Drawing from wisdom and insights from Traditional Chinese Medicine and modern science, we treat our physical, mental and emotional self as whole.'
    },
    {
        url: '/images/28/fd2.png',
        name: 'Summer Song',
        sub: 'Co-founder',
        text: 'Drawing from wisdom and insights from Traditional Chinese Medicine and modern science, we treat our physical, mental and emotional self as whole.'
    }
]

const FirstHeader = ({data}) => {
    return (
        <>
        <h1 className='md:text-center md:text-4xl text-3xl nearwhite'>
            {data}
        </h1>
        </>
    )
}

export default function Content25() {
    return (
        <div>
        <div>
            <div className={styles.coverimg}>
                <div className={styles.contentcover}><Navbar /></div>
                <Image src='/images/28/bg1.png' alt='' layout='fill' objectFit='cover'  />
            </div>
        </div>
        <div className={styles.container}>
            <div className='container mx-auto pt-24 p-4 pb-32'>
                <div className=''>
                    <FirstHeader data='Our Story' />
                    <p className='nearwhite md:text-center pt-6 pb-6'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                </p>
                </div>  
            </div>
        </div>

        <div style={{ background: '#A56C50' }}>
            <div className='container mx-auto pt-12'>
                <FirstHeader data='Our Promise' />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                    {ourPromises.map((el, index) => (
                        <div key={index} className={index % 2 == 0 ? 'flex flex-row md:flex-col p-4' : 'flex flex-row-reverse md:flex-col p-4'}>
                            <div className='md:w-full w-96 relative h-32'>
                                <Image src='/images/28/img1.png' layout='fill' objectFit='cover' className={index % 2 == 0 ? 'rounded-sm-bl' : 'rounded-sm-br'} alt='' />
                            </div>
                            <div className='nearwhite p-2 md:mt-4 -mt-6'>
                                <h3 className='text-xl md:text-2xl pt-2 pb-2 md:h-16'>{el[0]}</h3>
                                <p className='text-xs md:text-base'>{el[1]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>

        <div>
            <div className={styles.coverimgpd}>
                <div className={styles.contentcover}>
                    <div className='container mx-auto p-4 md:pt-16 pt-8'>
                    <div className='text-center text-base md:text-2xl'>
                    I am self taught in TCM and this app is very useful for narrowing down issues in the body. The explanations are clear enough that someone who doesn't have experience/knowledge of TCM can use it to gain insight and be able to heal their body with lifestyle and diet changes.
                    </div>
                    <div className='relative h-2 w-full mt-2 md:mt-4 mb-2 md:mb-4'>
                    <Image src='/images/28/line.png' layout='fill' objectFit='scale-down' alt='' />
                    </div>
                    <h1 className='text-center text-3xl pt-8'>Autumn B.</h1>
                    </div>
                    <div className='relative h-2 w-full md:mt-2 pb-12'>
                    <Image src='/images/28/bar.png' layout='fill' objectFit='scale-down' alt='' />
                    </div>
                </div>
                <Image src='/images/28/bg2.png' alt='' layout='fill' objectFit='cover'  />
            </div>
        </div>
        
        <div style={{ background: '#A56C50' }}>
            <div className='container mx-auto p-8'>
                <FirstHeader data='Our Founder' />
                <div className='grid md:grid-cols-2 gap-2 mt-4'>
                    {founder.map((el, index) => (
                        <div key={index} className='flex flex-col md:flex-row'>
                            <div className='hidden md:relative md:block w-full h-40'>
                                <Image src={el.url} alt='' layout='fill' objectFit='scale-down' />
                            </div>
                            <div className='nearwhite'>
                                <div className='flex flex-row'>
                                    <div className='relative md:hidden w-16 h-16 mr-2'>
                                        <Image src={el.url} alt='' layout='fill' objectFit='cover' className='rounded-full' />
                                    </div>
                                    <div>
                                        <h1 className='text-xl mt-1 md:text-2xl'>{el.name}</h1>
                                        <h3 className='text-xl'>{el.sub}</h3>
                                    </div>
                                    
                                </div>
                                <div>
                                <p className='pt-2 text-sm md:text-base'>{el.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            
        </div>

        <div className={styles.container}>
            <div className='container mx-auto mt-32 pb-24 p-4'>
                <div className='md:text-center'>
                <FirstHeader data='Our Experts' />
                    
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2 text-center'>
                    <div className='p-4'>
                        <div className='w-full relative h-40'>
                            <Image src='/images/28/teach.png' layout='fill' objectFit='scale-down' alt='' />
                        </div>
                        <div className='pt-4 pb-4 nearwhite'>
                            <h1 className='text-base md:text-2xl h-10'>Fraser Lau</h1>

                            <p>
                            Qigong Teacher
                            </p>
                        </div>
                        
                    </div>
                    <div className='p-4'>
                        <div className='w-full relative h-40'>
                            <Image src='/images/28/teach.png' layout='fill' objectFit='scale-down' alt='' />
                        </div>
                        <div className='pt-4 pb-4 nearwhite'>
                            <h1 className='text-base md:text-2xl h-10'>Fraser Lau</h1>

                            <p>
                            Qigong Teacher</p>
                        </div>
                    </div>
                    <div className='hidden md:block p-4'>
                        <div className='w-full relative h-40'>
                            <Image src='/images/28/teach.png' layout='fill' objectFit='scale-down' alt='' />
                        </div>
                        <div className='pt-4 pb-4 nearwhite'>
                            <h1 className='text-base md:text-2xl h-10'>Fraser Lau</h1>

                            <p>
                            Qigong Teacher</p>
                        </div>
                    </div>
                </div>

                </div>  
            </div>
        </div>
        <MBFooter />
        <Footer />
        </div>
    )
}

