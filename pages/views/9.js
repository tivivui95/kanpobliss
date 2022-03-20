import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import styles from '../../styles/6p.module.css';
import MainStyles from '../../styles/Main.module.css';
import { useState } from "react";

export default function Content9() {
    const [age, onChangeAge] = useState('Choose your age range:');
    const [gender, onChangeGender] = useState(0);
    const [check1st, on1stChecked] = useState(false);
    const handleAge = (event) => {
        onChangeAge(event.target.value)
    }
    const handleGender = (event) => {
        onChangeGender(event.target.value)
    }
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        on1stChecked(value);
    }
    return (
        <>
        <Navbar />
            <div className={styles.container}>

                
                <div className="container mx-auto mt-8 mb-8 grid justify-items-center relative ">

                    <div className={styles.contain}>
                        <div className={styles.head2}>Tell us more about you </div>
                        <div className="grid md:grid-cols-2 gap-2 w-full">
                            <div>
                                <div className={styles.inputBox}>
                                    <div className={styles.Icon}><Image src='/images/9/Age.png' alt='' layout="fill" objectFit="scale-down" /></div>
                                    <label>
                                        <select value={age} onChange={handleAge}>
                                            <option value="0">Choose your age range:</option>
                                            <option value="grapefruit">18-25</option>
                                            <option value="lime">25-35</option>
                                            <option value="coconut">35-55</option>
                                            <option value="mango">55+</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className={styles.inputBox}>
                                    <div className={styles.Icon}><Image src='/images/9/Gender.png' alt='' layout="fill" objectFit="scale-down" /></div>
                                    <label>
                                        <select value={gender} onChange={handleGender}>
                                            <option value={0}>Choose your gender:</option>
                                            <option value={1}>Male</option>
                                            <option value={2}>Female</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="test-base brown">*What are your current wellbeing goals?</div>
                            <label className="checkbox text-xs -ml-4">
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={check1st}
                                    onChange={handleInputChange}
                                />
                                <span className="checkmark"></span>
                                <span className="labelcheck text-sm">&#160; &#160; &#160;
                                Stress management</span>
                            </label>
                            <label className="checkbox text-xs -ml-4">
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={check1st}
                                    onChange={handleInputChange}
                                />
                                <span className="checkmark"></span>
                                <span className="labelcheck text-sm">&#160; &#160; &#160;
                                Diet & weight management</span>
                            </label>
                            <textarea value='Others' onChange={handleInputChange} />
                        </div>
                        <div className={styles.submit}>Submit Answers</div>
                        <br />
                    </div>
                    <div className="md:mt-4">
                        <Image src='/images/6/next.png' alt="" width={420} height={40} />
                    </div>

                </div>

                <Footer />
                <MBFooter />
            </div>
        </>
    )
}