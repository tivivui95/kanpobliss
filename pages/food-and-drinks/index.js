/* eslint-disable import/no-anonymous-default-export */
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../../styles/18.module.css";

// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line react/display-name
export default function ({ listRes, listDishes }) {
  console.log("nnnnnnnnn  ", listRes);
  console.log("nnnnnnnnn  ", listDishes);
  const router = useRouter();
  const [listRestaurant, setListRestaurant] = useState([...listRes]);
  const [currentTab, setCurrentTab] = useState("All");

  useEffect(() => {
    if (currentTab === "All") {
      // setListContents(defaultContents);
    } else {
      // let newList = defaultContents.filter((item) => item.title === currentTab);
      // setListContents(newList);
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
            <h1 className={styles.text}>Perfect Dishes & Drinks for {}</h1>
          </div>

          <div className={styles.content}>
            <div className={styles.selection}>
              <button
                className={`${styles.button} ${
                  currentTab === "All" ? styles.buttonActive : ""
                }`}
                onClick={() => setCurrentTab("All")}
              >
                All
              </button>
              {listRestaurant.map((item, index) => (
                <button
                  key={index}
                  className={`${styles.button} ${
                    currentTab === item.name ? styles.buttonActive : ""
                  }`}
                  onClick={() => setCurrentTab(item.name)}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className={styles.container}>
              <div className={styles.block}>
                <div>
                  <h3 className={styles.heading}>Restaurant A</h3>
                  <h3 className={styles.text}>
                    Braised Supreme Dried 15 Head Australian Xu Rong Abalone
                  </h3>
                  <h3 className={styles.note}>Contains Shellfish, Gluten</h3>
                </div>
                <h3 className={styles.price}>S$ 298.00</h3>
              </div>
              <div className={styles.block}>
                <div>
                  <h3 className={styles.heading}>Restaurant B</h3>
                  <h3 className={styles.text}>
                    Four Treasure Soup, sea cucumber, fish maw, dried Hokkaido
                    scallop, crab meat
                  </h3>
                  <h3 className={styles.note}>Contains Shellfish, Gluten</h3>
                </div>
                <h3 className={styles.price}>S$ 28.00</h3>
              </div>
              <div className={styles.block}>
                <div>
                  <h3 className={styles.heading}>Restaurant E</h3>
                  <h3 className={styles.text}>
                    Wat Tan Black Bean Beef Ho Fun
                  </h3>
                  <h3 className={styles.note}>Contains Gluten</h3>
                </div>
                <h3 className={styles.price}>S$ 32.00</h3>
              </div>
              <div className={styles.block}>
                <div>
                  <h3 className={styles.heading}>Restaurant C</h3>
                  <h3 className={styles.text}>
                    Crispy Duck <br />
                    Salad, watermelon, pomelo, cashew nut, macadamia nut,
                    shallot, spicy yuzu sauce.
                  </h3>
                  <h3 className={styles.note}>
                    Contains Gluten, Nuts or / and Peanuts
                  </h3>
                </div>
                <h3 className={styles.price}>S$ 22.00</h3>
              </div>
              <div className={styles.block}>
                <div>
                  <h3 className={styles.heading}>Restaurant D</h3>
                  <h3 className={styles.text}>
                    Market Seasonal Chinese Greens, cooked any style
                  </h3>
                  <h3 className={styles.note}>Vegetarian</h3>
                </div>
                <h3 className={styles.price}>S$ 14.00</h3>
              </div>
              <div className={styles.block}>
                <div>
                  <h3 className={styles.heading}>Restaurant G</h3>
                  <h3 className={styles.text}>Qi moving cocktail</h3>
                  <h3 className={styles.note}>Contains Gluten</h3>
                </div>
                <h3 className={styles.price}>S$ 36.00</h3>
              </div>
              <div className={styles.block}>
                <div>
                  <h3 className={styles.heading}>Restaurant A</h3>
                  <h3 className={styles.text}>
                    Braised Supreme Dried 15 Head Australian Xu Rong Abalone
                  </h3>
                  <h3 className={styles.note}>Contains Shellfish, Gluten</h3>
                </div>
                <h3 className={styles.price}>S$ 298.00</h3>
              </div>
              <div className={styles.block}>
                <div>
                  <h3 className={styles.heading}>Restaurant B</h3>
                  <h3 className={styles.text}>
                    Four Treasure Soup, sea cucumber, fish maw, dried Hokkaido
                    scallop, crab meat
                  </h3>
                  <h3 className={styles.note}>Contains Shellfish, Gluten</h3>
                </div>
                <h3 className={styles.price}>S$ 28.00</h3>
              </div>
              <div className={styles.block}>
                <div>
                  <h3 className={styles.heading}>Restaurant E</h3>
                  <h3 className={styles.text}>
                    Wat Tan Black Bean Beef Ho Fun
                  </h3>
                  <h3 className={styles.note}>Contains Gluten</h3>
                </div>
                <h3 className={styles.price}>S$ 32.00</h3>
              </div>
            </div>
          </div>

          <span className={styles.readmore}>
            <a className={styles.loadmore}>Load More</a>
          </span>
          <MBFooter />
        </div>

        <div className="relative">
          <Footer />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  // get list restaurants
  // call api return two array
  // array1: list restaurants {idRes:1, nameRes:'Name'}
  // array2: list dishes {idRes, isDish, nameRes, nameDish}

  let listRes = [
    {
      id: 1,
      name: "Restaurant 1",
    },
    {
      id: 2,
      name: "Restaurant 2",
    },
  ];

  let listDishes = [
    {
      idRes: 1,
      nameRes: "Restaurant 1",
      idDish: 11,
      nameDish: "Ga kho xa",
    },
    {
      idRes: 1,
      nameRes: "Restaurant 1",
      idDish: 12,
      nameDish: "Heo kho xa",
    },
    {
      idRes: 1,
      nameRes: "Restaurant 1",
      idDish: 13,
      nameDish: "Bo kho xa",
    },
    {
      idRes: 2,
      nameRes: "Restaurant 2",
      idDish: 11,
      nameDish: "Ga kho xa",
    },
    {
      idRes: 2,
      nameRes: "Restaurant 2",
      idDish: 12,
      nameDish: "Heo kho xa",
    },
    {
      idRes: 3,
      nameRes: "Restaurant 2",
      idDish: 13,
      nameDish: "Bo kho xa",
    },
  ];

  return {
    props: { listRes, listDishes }, // will be passed to the page component as props
  };
}
