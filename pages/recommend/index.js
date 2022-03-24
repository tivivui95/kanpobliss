import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/17.module.css";

const Recommend = ({ Name }) => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className={styles.contain}>
        <div className={styles.box}>
          <div className={styles.heading}>
            {/* <img className={styles.logo" src="assets17/logo.png}> */}
            <Image
              src="/images/17/logo.png"
              width={140}
              height={140}
              objectFit="scale-down"
              alt=""
            />
            <div className={styles.infor}>
              <h1 className={styles.hello}>Hello, {Name}!</h1>
              <h1 className={styles.bio}>
                Here&apos;re the recomnendations for you to live your wellness
                mantra
              </h1>
            </div>
          </div>
          <div className={styles.choose}>Choose from one of the following</div>
          <div className={styles.container}>
            <div
              className={styles.block}
              onClick={() => router.push("/food-and-drinks")}
            >
              <Image
                src="/images/17/image 7.png"
                width={360}
                height={405}
                alt=""
                objectFit="scale-down"
              />
            </div>
            <div
              className={styles.block}
              onClick={() => router.push("/fitness")}
            >
              <Image
                src="/images/17/image 8.png"
                width={360}
                height={405}
                alt=""
                objectFit="scale-down"
              />
            </div>

            <div
              className={styles.block}
              onClick={() => router.push("/self-care")}
            >
              <Image
                src="/images/17/image 6.png"
                width={360}
                height={405}
                alt=""
                objectFit="scale-down"
              />
            </div>

            <div
              className={styles.block}
              onClick={() => router.push("/spa")}
            >
              <Image
                src="/images/17/image 5.png"
                width={360}
                height={405}
                alt=""
                objectFit="scale-down"
              />
            </div>
          </div>
          <div className={styles.slider}>
            <div className={styles.green}></div>
            <div className={styles.white}></div>
          </div>
        </div>
      </div>
      <MBFooter />
      <Footer />
    </>
  );
};

export default Recommend;
