import styles from '../styles/2245.module.css'
import Image from "next/image";
import Navbar, { MBFooter, Footer } from "./navbar";
import MainStyles from '../styles/Main.module.css';
export default function Content27() {
    return (
        <>
        <div className='container mx-auto'>
            <Navbar />
            <div className='nearwhite p-4'>
                <h1 className='text-4xl'>Your feedback is important to us</h1>
                <div className='grid md:grid-cols-2 w-full'>
                    <div>
                        <div className={MainStyles.inputBox}>
                            <div className={MainStyles.Icon}><Image src='/images/27/Group 2.png' alt='' layout="fill" objectFit="scale-down" /></div>
                            <input type="text" placeholder="Jamie" className="nearwhite" />
                        </div>
                    </div>

                    <div>
                        <div className={MainStyles.inputBox}>
                            <div className={MainStyles.Icon}><Image src='/images/mail.svg' alt='' layout="fill" objectFit="scale-down" /></div>
                            <input type="email" placeholder="Jamie@gmail.com" className="nearwhite" />
                        </div>
                    </div>
                </div>
                <Image src='/images/rating.png' width={235} height={66} alt='' />
                <div>
                    <h3>Feedback</h3>
                    <textarea className='h-56'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa</textarea>
                    <button className='greenbtn'>Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}