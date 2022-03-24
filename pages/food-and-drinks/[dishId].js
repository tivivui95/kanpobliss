import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../navbar";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../../styles/19.module.css";
import { useRouter } from "next/router";
import LoadPageModal from "../../components/LoadPageModal";
import { fetchAPI } from "../../lib/api";

const DishDetail = ({ dishData, listResOther }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  console.log("dishData :>> ", dishData);
  console.log("listResOther :>> ", listResOther);

  return (
    <>
      <Navbar />
      <div className={styles.contain}>
        <div className={styles.box1}>
          <div className={styles.container1}>
            <div className={styles.img1}>
              <Image
                src="/images/19/image 7.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.content1}>
              <h1 className={styles.header1}> {dishData.name || "Name"}</h1>
              <h3 className={styles.text1}>Why we curated this for you</h3>
              <ul className={styles.ul}>
                <li>Provi des immune support</li>
                <li>Clear phlegm</li>
                <li>Stabilizes blood sugar</li>
                <li>Prevents liver damage</li>
              </ul>
            </div>
          </div>

          <div className={styles.container2}>
            <div className={styles.content2}>
              <h1
                className={styles.header2}
              >{`Enjoy it at ${dishData.nameResOrSpa}`}</h1>
              <h3 className={styles.text2}>
                Discover a dining experience built on craft, service and
                ambience. Madame Fan offers Cantonese cuisine in a contemporary
                setting.
              </h3>
              <button className={styles.book}>BOOK A SPA</button>
            </div>
            <div className={styles.img2}>
              <Image
                src="/images/19/image 8.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.container3}>
            <h1 className={styles.header3}>Other recommended dishes</h1>
            <div className={styles.content3}>
              {listResOther.map((item, index) => (
                <div
                  key={index}
                  className={styles.block}
                  onClick={() => router.push(`/food-and-drinks/${item._id}`)}
                >
                  <div>
                    <h3 className={styles.heading}>{item.nameResOrSpa}</h3>
                    <h3 className={styles.text}>{item.name}</h3>
                    <h3 className={styles.note}>{item.description}</h3>
                  </div>
                  <div className="flow-root">
                    <h3 className="float-right">{`S$ ${item.benefit}`}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.container4}>
            <h1 className={styles.header4}>Other restaurants to explore </h1>
            <div className={styles.content4}>
              <div className={styles.card}>
                <Image
                  src="/images/19/Card4.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                  className={styles.card}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/19/Card3.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.content5}>
              <div className={styles.card}>
                <Image
                  src="/images/19/Card5.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                  className={styles.card}
                />
              </div>
              <div className={styles.card}>
                <Image
                  src="/images/19/Card6.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                  className={styles.card}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <MBFooter />
      </div>
      <LoadPageModal isOpen={true} closeModal={() => setLoading(false)} />
      <Footer />
    </>
  );
};

export default DishDetail;

export async function getStaticPaths() {
  const allDishes = await fetchAPI("Restaurant/getAll");

  if (allDishes.result.statusCode !== 200) {
    return {
      notFound: true,
    };
  }
  const paths = allDishes.result.restaurants.map((item) => {
    return {
      params: {
        dishId: `${item._id}`,
      },
    };
  });

  return {
    paths: [...paths],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
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

  let _dishData = listDishes.filter((item) => item._id === params.dishId);
  let dishData;
  let listResOther = [];
  if (_dishData.length > 0) {
    dishData = { ..._dishData[0] };
    let listResOtherTemp1 = listDishes.filter(
      (item) => item.idResOrSpa === _dishData[0].idResOrSpa
    );
    let listResOtherTemp = listResOtherTemp1.filter(
      (item) => item._id !== _dishData[0]._id
    );

    if (listResOtherTemp.length > 2) {
      listResOther.push(listResOtherTemp[0]);
      listResOther.push(listResOtherTemp[1]);
    } else {
      listResOther = [...listResOtherTemp];
    }
  } else {
    dishData = {};
    listResOther = [];
  }

  return {
    props: { dishData, listResOther },
  };
}
