/* eslint-disable import/no-anonymous-default-export */
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchAPI } from "../../lib/api";
import styles from "../../styles/18.module.css";
import Navbar, { Footer, MBFooter } from "../navbar";

const NUMBER_LOAD = 6;

// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line react/display-name
export default function ({ listRes, listDishes }) {
  const router = useRouter();
  const [listRestaurant, setListRestaurant] = useState([...listRes]);
  const [listDish, setListDish] = useState([
    ...listDishes.slice(0, NUMBER_LOAD),
  ]);
  const [currentLoad, setCurrentLoad] = useState(1);
  const [currentTab, setCurrentTab] = useState("All");

  useEffect(() => {
    if (currentTab === "All") {
      let _dishes = setListDish([
        ...listDishes.slice(0, currentLoad * NUMBER_LOAD),
      ]);
    } else {
      let newRes = listDishes.filter(
        (item) => item.nameResOrSpa === currentTab
      );
      setListDish([...newRes]);
      setCurrentLoad(1);
    }
  }, [currentTab, currentLoad]);

  const handleLoadMore = () => {
    setCurrentLoad(currentLoad + 1);
    console.log("ooooooooooooo");
  };

  console.log("listRestaurant :>> ", listRestaurant);
  console.log("listDish :>> ", listDish);

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
              {listDish.map((item, index) => (
                <div
                  key={index}
                  className={styles.block}
                  onClick={() => router.push(`/food-and-drinks/${item._id}`)}
                >
                  <div className={styles.imageBg}>
                    <img src="/images/23/mind-body.png" alt="" />
                  </div>

                  <div style={{ position: "relative" }}>
                    <h3 className={styles.heading}>{`${item.nameResOrSpa}`}</h3>
                    <h3 className={styles.text}>{item.name}</h3>
                    <h3 className={styles.note}>{item.description}</h3>
                  </div>
                  <h3 className={styles.price}>{`S$ ${item.benefit}`}</h3>
                </div>
              ))}
              {listDish.length < listDishes.length && (
                <button className={styles.readmore} onClick={handleLoadMore}>
                  <a className={styles.loadmore}>Load More</a>
                </button>
              )}
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
}

export async function getStaticProps(context) {
  const allDishes = await fetchAPI("Restaurant/getAll");
  const allRes = await fetchAPI("Partner/getAll");

  if (allDishes.result.statusCode !== 200 || allRes.result.statusCode !== 200) {
    return {
      notFound: true,
    };
  }

  let _listRes = [...allRes.result.partners];
  let _listDishes = [...allDishes.result.restaurants];

  let listRes = _listRes.filter((item) => item.type === "Restaurant");

  let listDishes = _listDishes.map((item, index) => {
    const findIdx = listRes.filter(
      (element) => element._id === item.idResOrSpa
    );
    if (findIdx.length > 0) {
      return {
        ...item,
        nameResOrSpa: findIdx[0].name,
      };
    } else {
      return {
        ...item,
      };
    }
  });

  return {
    props: {
      listRes,
      listDishes,
    },
  };
}
