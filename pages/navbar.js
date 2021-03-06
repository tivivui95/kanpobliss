import Link from "next/link";
import Image from "next/image";
import MainStyles from '../styles/Main.module.css'
import { useState } from "react"

export function MBFooter() {
    return (
        <>
            <div className={MainStyles.mbfooter}>
                <div className='relative pb-4 mt-12 m-0 flex justify-self-center w-full'>
                    <div className='text-center w-screen text-xs'>©2022 Copyright all reserved by Kanpobliss</div>
                </div>
            </div>
        </>
    )
}

export function Footer() {
    return (
        <>
            <div className="w-full grid-cols-6 gap-6 pl-20 p-4 pt-8 pb-8 hidden md:grid nearwhite text-sm" style={{ background: "#523922" }}>
                <div className="col-span-2">
                    <Image src="/images/Logo.svg" height={60} width={180} alt='' />
                    <div className="flex flex-row">
                        <div className="pr-4"><Image src='/images/ins.svg' height={28} width={28} alt='Instagram' /></div>
                        <div className="pr-4"><Image src='/images/fb.svg' height={28} width={28} alt='Facebook' /></div>
                        <div className="pr-4"><Image src='/images/yt.svg' height={28} width={28} alt='Youtube' /></div>
                    </div>
                </div>
                <div>
                    <ul className="nearwhite ftpad">
                        <li>
                            <Link href='/quiz'>
                                Body Constitution
                        </Link>

                        </li>
                        <li>
                            Body Recovery
                    </li>
                        <li>
                            Guided Practices
                    </li>
                    </ul>
                </div>
                <div className="">
                    <ul className="ftpad">
                        <li>My Profile</li>
                        <li>About Us</li>
                        <li>Feedback</li>
                    </ul>
                </div>
                <div className="col-span-2">
                    <div className={MainStyles.inputBox}>
                        <div className={MainStyles.Icon}><Image src='/images/mail.svg' alt='' layout="fill" objectFit="scale-down" /></div>
                        <input type="email" placeholder="Enter Email" className="nearwhite" />
                    </div>
                    <div className="subbtn ml-4">SUBSCRIBE</div>
                </div>
            </div>
            <div className="w-full  pl-20 p-4 pt-8 hidden md:flow-root nearwhite text-xs" style={{ background: "#523922" }}>
                <div className="float-left flex flex-row">
                    <div className="pr-6">Terms and Conditions</div>
                    <div className="pr-6">Privacy Policy</div>
                    <div className="pr-6">Disclaimer</div>
                </div>
                <div className="float-right pr-24">
                    ©2022 Copyright all reserved by Kanpobliss
            </div>
            </div>
        </>
    )
}

export default function Navbar() {
    const [hideBar, setHideBar] = useState('hidden');
    return (
        <>
            <div className={hideBar}>
                <div className="w-full h-full fixed" style={{ zIndex: 1, background: '#B99173', opacity: 0.8 }}>

                </div>
                <div className={MainStyles.backRec1} style={{ zIndex: 2 }}>
                    <div className="flow-root m-8">
                        <div className="float-right">


                            <a className="mb-8" onClick={() => setHideBar('hidden')}>
                                <Image src='/images/exit.svg' width={16} height={16} alt='' />
                            </a>
                        </div>
                        <ul className="float-right text-right mt-16 nearwhite">
                            <li className="mt-8">
                                <Link href='/body-type'>
                                    <a>
                                        Body Constitution
                            </a>
                                </Link>
                            </li>

                            <li className="mt-8">
                                <Link href='/quiz'>
                                    <a>
                                        Body Recovery
                            </a>
                                </Link>
                            </li>
                            <li className="mt-8">
                                <Link href='/guidedpractice'>
                                    <a>
                                        Guided Practices
                            </a>
                                </Link>
                            </li>
                            <li className="mt-8">
                                <Link href='/myprofile'>
                                    <a>
                                        My Profile
                            </a>
                                </Link>
                            </li>
                            <li className="mt-8"><Link href='/about-us'>
                                <a>
                                    About Us
                            </a>
                            </Link>
                            </li>
                            <li className="mt-8"><Link href='/feedback'>
                                <a>
                                    Feedback
                            </a>
                            </Link>
                            </li>
                            <li className="mt-8"><Link href='/signin'>
                                <a>
                                    Sign Out
                            </a>
                            </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded" style={{ marginBottom: "5.0606rem" }}>
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link href='/'>
                        <a className="md:flex items-center md:relative hidden w-56 h-10 mt-12">
                            <Image src="/images/Logo.svg" layout="fill" objectFit="scale-down" alt='' />
                        </a>
                    </Link>

                    <div className="w-auto inline-block md:relative absolute right-2 top-4" id="mobile-menu">
                        <ul className="flex flex-col pt-4 md:flex-row md:items-center md:space-x-8 md:mt-0 md:text-base md:font-medium">
                            <li className={MainStyles.lighttext}>
                                <Link href='/quiz'>
                                    <a className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">Body Constitution</a>
                                </Link>
                            </li>
                            <li className={MainStyles.lighttext}><Link href='#'>
                                <a className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">Body Recovery</a>
                            </Link>
                            </li>
                            <li className={MainStyles.lighttext}><Link href='#'>
                                <a className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">Guided Practices</a>
                            </Link>
                            </li>
                            <li>
                                <Link href='#'>
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