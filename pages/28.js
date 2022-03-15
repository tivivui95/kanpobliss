import styles from '../styles/2245.module.css'
import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";

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
                <div className={styles.contentcover}><Navbar /></div>
                <Image src='/images/28/bg1.png' alt='' layout='fill' objectFit='cover'  />
            </div>
        </div>
        <div className={styles.container}>
            <div className='container mx-auto pt-24 p-4 pb-32'>
                <div className='text-center'>
                    <h1 className='nearwhite text-4xl'>Our Story</h1>
                    <p className='nearwhite pt-6 pb-6'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                </p>
                </div>  
            </div>
        </div>
        <div style={{ background: '#A56C50' }}>
            <div className='container mx-auto pt-12'>
                <div className='text-center nearwhite'>
                    <h1 className='text-4xl'>Our Promise</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                    <div className='p-4'>
                        <div className='w-full relative h-40'>
                            <Image src='/images/28/img1.png' layout='fill' objectFit='contain' alt='' />
                        </div>
                        <div className='pt-4 pb-4 nearwhite'>
                            <h3 className='text-2xl h-20'>Curated for the unique you</h3>

                            <p>
                            Our bodies are different so are our wellness journeys. Kanpobliss curates personalized recommendations catered to your body’s unique needs and goals, helping you define your own path towards greater wellbeing.
                            </p>
                        </div>
                        
                    </div>
                    <div className='p-4'>
                        <div className='w-full relative h-40'>
                            <Image src='/images/28/img1.png' layout='fill' objectFit='contain' alt='' />
                        </div>
                        <div className='pt-4 pb-4 nearwhite'>
                            <h3 className='text-2xl h-20'>Care for the holistic self</h3>

                            <p>
                            Drawing from the wisdom of Traditional Chinese Medicine and knowledge of modern science, we care for your mind and body as whole, and appreciate their intricate connections with your surroundings.
                            </p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='w-full relative h-40'>
                            <Image src='/images/28/img1.png' layout='fill' objectFit='contain' alt='' />
                        </div>
                        <div className='pt-4 pb-4 nearwhite'>
                            <h3 className='text-2xl h-20'>Empower your innate ability to heal and grow</h3>

                            <p>
                            Together with our multidisciplinary team of health and wellness experts, our goal is to impart you with insights and knowledge, to guide you in building habits that support personal healing and growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <div>
            <div className={styles.coverimg}>
                <div className={styles.contentcover}>
                    <div className='container mx-auto p-4 md:pt-12 pt-8'>
                    <div className='text-center text-base md:text-xl'>
                    I am self taught in TCM and this app is very useful for narrowing down issues in the body. The explanations are clear enough that someone who doesn't have experience/knowledge of TCM can use it to gain insight and be able to heal their body with lifestyle and diet changes.
                    </div>
                    <div className='relative h-2 w-full mt-2 md:mt-2 mb-2 md:mb-2'>
                    <Image src='/images/28/line.png' layout='fill' objectFit='scale-down' alt='' />
                    </div>
                    <h1 className='text-center text-3xl'>Autumn B.</h1>
                    </div>
                    <div className='relative h-2 w-full md:mt-2 mb-8'>
                    <Image src='/images/28/bar.png' layout='fill' objectFit='scale-down' alt='' />
                    </div>
                </div>
                <Image src='/images/28/bg2.png' alt='' layout='fill' objectFit='cover'  />
            </div>
        </div>
        
        <div style={{ background: '#A56C50' }}>
            <div className='container mx-auto pt-12'>
                <div className='text-center nearwhite'>
                    <h1 className='text-4xl'>Our Founder</h1>
                </div>
                <div className='grid md:grid-cols-2 gap-2'>
                    <div className='p-4 flex flex-row'>
                        <div className='w-1/2 relative h-40 mr-4'>
                            <Image src='/images/28/fd1.png' layout='fill' objectFit='contain' alt='' />
                        </div>
                        <div className='pt-4 pb-4 nearwhite'>
                            <h1 className='text-2xl'>Jun Negoro</h1>
                            <h3 className='text-xl h-10'>Co-founder</h3>
                            <p>
                            Drawing from wisdom and insights from Traditional Chinese Medicine and modern science, we treat our physical, mental and emotional self as whole.
                            </p>
                        </div>
                        
                    </div>
                    <div className='p-4 flex flex-row'>
                        <div className='w-1/2 relative h-40 mr-4'>
                            <Image src='/images/28/fd2.png' layout='fill' objectFit='contain' alt='' />
                        </div>
                        <div className='pt-4 pb-4 nearwhite'>
                            <h1 className='text-2xl'>Summer Song</h1>
                            <h3 className='text-xl h-10'>Co-founder</h3>
                            <p>
                            Drawing from wisdom and insights from Traditional Chinese Medicine and modern science, we treat our physical, mental and emotional self as whole.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>

        <div className={styles.container}>
            <div className='container mx-auto mt-32 pb-24 p-4'>
                <div className='text-center'>
                    <h1 className='nearwhite text-4xl'>Our Experts</h1>
                    
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
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

