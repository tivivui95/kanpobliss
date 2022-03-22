import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/18.module.css";

const defaultContents = [
    {
        id: 0,
        title: "Qigong",
        text: "Mind-Body Relaxation",
        author: "Fraser Lau",
      },
      {
        id: 1,
        title: "Nutrition",
        text: "Detoxing From Chemicals",
        author: "Dr.Cheryl Kam",
      },
      {
        id: 2,
        title: "Qigong",
        text: "Unify Heaven, Human & Earth",
        author: "Fraser Lau",
      },
      {
        id: 3,
        title: "Acupressure",
        text: "Bedtime Wind-down Ritual",
        author: "Re:Qi",
      },
      {
        id: 4,
        title: "Breathwork",
        text: "Humming Bee Breathwork",
        author: "Re:Qi",
      },
      {
        id: 5,
        title: "Qigong",
        text: "Six Healing Sounds",
        author: "Re:Qi",
      },
];

const Content18 = ({ Mantra }) => {
  const router = useRouter();

  const [currentTab, setCurrentTab] = useState("All");
  const listTabs = ["All", "Nutrition", "Acupressure", "Qigong", "Breathwork"];
  const [listContents, setListContents] = useState([
    {
      id: 0,
      title: "Qigong",
      text: "Mind-Body Relaxation",
      author: "Fraser Lau",
    },
    {
      id: 1,
      title: "Nutrition",
      text: "Detoxing From Chemicals",
      author: "Dr.Cheryl Kam",
    },
    {
      id: 2,
      title: "Qigong",
      text: "Unify Heaven, Human & Earth",
      author: "Fraser Lau",
    },
    {
      id: 3,
      title: "Acupressure",
      text: "Bedtime Wind-down Ritual",
      author: "Re:Qi",
    },
    {
      id: 4,
      title: "Breathwork",
      text: "Humming Bee Breathwork",
      author: "Re:Qi",
    },
    {
      id: 5,
      title: "Qigong",
      text: "Six Healing Sounds",
      author: "Re:Qi",
    },
  ]);

  useEffect(() => {
    if (currentTab === "All") {
      setListContents(defaultContents);
    } else {
      let newList = defaultContents.filter((item) => item.title === currentTab);
      setListContents(newList);
    }
  }, [currentTab]);

  return (
    <>
      <div className={styles.containbox}>
        <Navbar />
        <div className={styles.contain}>
          <div className={styles.header}>
            <Image
              src="/images/18/logo.png"
              width={106}
              height={106}
              objectFit="scale-down"
              alt=""
            />
            <h1 className={styles.text}>Welcome back, Name!</h1>
          </div>

          <div className={styles.content}>
            <div className={styles.selection}>
              {listTabs.map((item, index) => (
                <button
                  key={index}
                  className={`${styles.button} ${
                    currentTab === item ? styles.buttonActive : ""
                  }`}
                  onClick={() => setCurrentTab(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className={styles.container}>
              {listContents.map((item, index) => (
                <div
                  key={index}
                  className={styles.block}
                >
                  <div>
                    <h3 className={styles.heading}>{item.title}</h3>
                    <h3 className={styles.text}   onClick={() => {
                    if (item.id === 5) {
                      router.push(`guide-practice/details/${item.id}`);
                    } else {
                      return;
                    }
                  }}>{item.text}</h3>
                  </div>
                  <h3
                    className={styles.price}
                    onClick={() => {
                        if (item.id === 5) {
                            router.push(`guide-practice/authors/${item.id}`);
                          } else {
                            return;
                          }
                    }}
                  >
                    {item.author}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <MBFooter />
        </div>

        <div className="relative">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Content18;