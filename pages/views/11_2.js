import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";

import styles from '../../styles/11.module.css';
import { useState } from "react";
import SocialLogin from "../../components/socialLogin";

const Content11_2 = ({ Mantra, onLogin }) => {
    const [ remember, onChangeRemember ] = useState(true);
    const [ wrong, onWrongLogin ] = useState("");

    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Get data from the form.
        const data = {
            email: event.target.first.value,
            password: event.target.last.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = 'http://139.99.199.153:9000/login'
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }
    
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json();
        result.result.statusCode == 200 ? onLogin(true) : onWrongLogin(result.result.message);
        console.log(result);
        alert(result.result.message)
      }

    const handleRemember = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        onChangeRemember(value);
    }

    return (
        <>

        <div className={styles.container}>
        <div className={styles.content}>
        <form onSubmit={handleSubmit}>
            <div className={styles.box}>
            <div className={styles.TextBox}><Image src="/images/11/Bigtext.png" alt='' width={300} height={80} /></div>
                <div className="CenterBox">
                    <h1 className={styles.TextHello}>Welcome Back!</h1>
                    <div className={styles.inputBox}>
                    <div className={styles.Icon}><Image src="/images/11/Group 2.png" alt='' layout="fill" objectFit="scale-down" /></div>
                        <input type="text" placeholder="Username" id="first" name="first" />
                    </div>
                    <div className={styles.inputBox}>
                        <div className={styles.Icon}><Image src="/images/11/Password.png" alt=''layout="fill" objectFit="scale-down" /></div>
                        <input type="password" placeholder="Password" id="last" name="last" />
                    </div>
                    <div className="grid grid-cols-2 w-5/6 -mt-2 mb-2 gap-2 text-xs">
                         <div className="text-left darkred">
                         {wrong ? <div>{wrong}</div> : null}
                        </div>
                        <div className="flow-root">
                            <div className="float-right nearblack">
                                <Link href={'/forgot?Mantra=' + Mantra}>
                                Forget Password
                                </Link>
                                
                            </div>
                        
                        </div>
                    </div>
                    <div className={styles.checking}>
                        <div>
                            <label className="scheckbox text-xs -ml-5">
                                <input className={styles.checkboxs} type="checkbox" checked={remember} onChange={handleRemember} />
                                <span className="scheckmark"></span>
                                <span className="pl-6 text-sm nearblack">Remember me for login</span></label>
                        </div>
                        <div>
                            
                            <label className="scheckbox text-xs -ml-5">
                            <input className={styles.checkboxs} type="checkbox" required={true} />    
                            <span className="scheckmark"></span>
                            <span className="pl-6 text-sm nearblack">
                                I agree to the Kanpobliss <a>Terms & Condtion</a> and <a>Privacy Policy</a></span></label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="greenbtn -mt-7">Sign in</button>
                <SocialLogin />
            </div>
            </form>
        </div>
        </div>
        
        </>
    )
}

export default Content11_2;