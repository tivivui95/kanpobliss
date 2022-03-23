/* eslint-disable import/no-anonymous-default-export */
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchAPI } from "../../lib/api";
import styles from "../../styles/18.module.css";
import Navbar, { Footer, MBFooter } from "../navbar";

// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line react/display-name
export default function ({ listRes, listDishes }) {
  const router = useRouter();
  const [listRestaurant, setListRestaurant] = useState([...listRes]);
  const [listDish, setListDish] = useState([...listDishes]);
  const [currentTab, setCurrentTab] = useState("All");

  useEffect(() => {
    if (currentTab === "All") {
      setListDish([...listDishes]);
    } else {
      let newRes = listDishes.filter(item=>item.nameResOrSpa===currentTab);
      setListDish([...newRes]);
    }
  }, [currentTab]);

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
                <div key={index} className={styles.block} onClick={()=>router.push(`/food-and-drinks/${item._id}`)}>
                  <div>
                    <h3 className={styles.heading}>{`${item.nameResOrSpa}`}</h3>
                    <h3 className={styles.text}>{item.name}</h3>
                    <h3 className={styles.note}>{item.description}</h3>
                  </div>
                  <h3 className={styles.price}>{`S$ ${item.benefit}`}</h3>
                </div>
              ))}
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
    if(findIdx.length > 0) {
      return {
        ...item,
        nameResOrSpa: findIdx[0].name,
      }
    } else {
      return {
        ...item,
      }
    }
    
  });

  return {
    props: {
      listRes,
      listDishes,
    },
  };
}
