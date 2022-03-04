import Link from "next/link";
import Image from "next/image";
import MainStyles from '../styles/Main.module.css'
import { useState } from "react/cjs/react.development";

export function MBFooter() {
    return (
        <>
        <div className={MainStyles.mbfooter}>
            <div className='absolute bottom-4 flex justify-self-center w-screen'>
                <div className='text-center w-screen'>©2022 Copyright all reserved by Kanpobliss</div>
            </div>
        </div>
        </>
    )
}

export function Footer() {
    return (
        <>
        <div className="w-full grid-cols-6 gap-6 pl-20 p-4 hidden sm:grid nearwhite" style={{ background: "#523922" }}>
            <div className="col-span-2">
                <Image src="/images/Logo.svg" height={45} width={145} />
            </div>
            <div>
                <ul className="nearwhite">
                    <li>
                        Body Type Assessment
                    </li>
                    <li>
                        Body Recovery Assessment
                    </li>
                    <li>
                        Wellbeing Toolkit
                    </li>
                </ul>
                
                
                
            </div>
            <div className="">
            <ul className="">
                <li>About Us</li>
                <li>Feedback</li>
                <li>Contact Us</li>
            </ul>
            </div>
            <div className="col-span-2">
            Enter Email for Subscribe
            </div>
        </div>
        </>
    )
}

export default function Navbar() {
    const [hideBar, setHideBar ] = useState('hidden');
    return (
        <>
        <div className={hideBar}>
            <div className="w-full h-full fixed" style={{zIndex: 1, background: '#B99173', opacity: 0.8}}>
                
            </div>
            <div className={MainStyles.backRec1} style={{zIndex: 2}}>
                    <div className="flow-root m-8">
                        <div className="float-right">

                        
                        <a className="mb-8" onClick={() => setHideBar('hidden')}>
                        <Image src='/images/exit.svg' width={16} height={16} alt='' />
                        </a>
                        </div>
                        <ul className="float-right text-right mt-16 nearwhite">
                            <li className="mt-8">
                            <Link href='/main'>
                            <a>
                            Body Type Assessment
                            </a>
                            </Link>
                            </li>

                            <li className="mt-8">
                            <Link href='/main'>
                            <a>
                            Body Recovery Assessment
                            </a>
                            </Link>
                            </li>
                            <li className="mt-8"><Link href='/main'>
                            <a>
                            Wellbeing Toolkit
                            </a>
                            </Link>
                            </li>
                            <li className="mt-8"><Link href='/main'>
                            <a>
                            Feedback
                            </a>
                            </Link>
                            </li>
                            <li className="mt-8"><Link href='/main'>
                            <a>
                            About Us
                            </a>
                            </Link>
                            </li>
                            <li className="mt-8"><Link href='/main'>
                            <a>
                            Logout
                            </a>
                            </Link>
                            </li>
                        </ul>
                            
                    </div>
                </div>
        </div>
            <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link href='/'>
                        <a className="flex items-center">
                            <Image src="/images/Logo.svg" height={45} width={145} />
                        </a>
                    </Link>
                    
                    <div className="w-auto inline-block" id="mobile-menu">
                        <ul className="flex flex-col pt-4 md:flex-row md:items-center md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li className={MainStyles.lighttext}>
                            <Link href='/'>
                                <a  className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">Body Type Assessment</a>
                                </Link>
                            </li>
                            <li className={MainStyles.lighttext}><Link href='/'>
                                <a className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">Body Recovery Assessmemt</a>
                                </Link>
                            </li>
                            <li className={MainStyles.lighttext}><Link href='/'>
                                <a className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">Wellbeing Toolkit</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/main'>
                                <a onClick={() => setHideBar('block')}>
                                    <button data-collapse-toggle="mobile-menu" type="button" className="inline-block pr-4" aria-controls="mobile-menu-2" aria-expanded="false">
                                        <Image src='/images/BurgerMenu.svg' width={16} height={16} />
                                    </button>
                                </a>
                                </Link>
                                
                            </li>
                        </ul>
                        
                    </div>
                    
                </div>
            </nav>
            
        </>
    )
}