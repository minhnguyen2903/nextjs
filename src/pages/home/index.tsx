import ProductCard from "components/common/ProductCard";
import SectionContainer from "components/common/sectionContainer";
import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "components/common/ProductCardCC/Card";

const Home = () => {
  return (
    <div>
      <SectionContainer>
        <div className={styles.section_grid}>
          <div className={styles.section_menu}>
            <div className={styles.section_menu_nav}>
              <h4 className={styles.section_menu_title}>Category menu</h4>
              <nav>
                <ul>
                  <li>
                    <Link href="/">Bakery</Link>
                  </li>
                  <li>
                    <Link href="/">Fruit and vegetables</Link>
                  </li>
                  <li>
                    <Link href="/">Meat and fish</Link>
                  </li>
                  <li>
                    <Link href="/">Meat and fish</Link>
                  </li>
                  <li>
                    <Link href="/">Kitchen</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.section_menu_action}>
              <button>More categories</button>
            </div>
          </div>
          <div className={styles.section_contents}>
            <div className={styles.section_content}>
              <div className={styles.section_content_text}>
                <h4 className={styles.banner_subfocus}>Banner subfocus</h4>
                <h3>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, suscipit?
                </h3>
              </div>
              <div className={styles.section_content_action}>
                <button>
                  Read recepies{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-right"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <polyline points="9 6 15 12 9 18"></polyline>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className={styles.section_content}>
              <div className={styles.section_content_text}>
                <h4 className={styles.banner_subfocus}>Banner subfocus</h4>
                <h3>Lorem ipsum dolor sit amet.</h3>
              </div>
              <div className={styles.section_content_action}>
                <button>Read recepies</button>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer>
        <div className={styles.section_grid}>
          <div className={styles.section_menu}>
            <div className={styles.section_menu_nav}>
              <h4 className={styles.section_menu_title}>
                Best selling products
              </h4>
              <nav>
                <ul>
                  <li>
                    <Link href="/">Kitchen</Link>
                  </li>
                  <li>
                    <Link href="/">Meat and fish</Link>
                  </li>
                  <li>
                    <Link href="/">Special nutrition</Link>
                  </li>
                  <li>
                    <Link href="/">Pharmacy</Link>
                  </li>
                  <li>
                    <Link href="/">Baby</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.section_menu_action}>
              <button>More categories</button>
            </div>
          </div>
          <div className={styles.cards}>
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="mySwiper"
            >
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer>
        <div className={styles.section_grid}>
          <div className={styles.section_menu}>
            <div className={styles.section_menu_nav}>
              <h4 className={styles.section_menu_title}>Best from Farmers</h4>
              <nav>
                <ul>
                  <li>
                    <Link href="/">Carrots</Link>
                  </li>
                  <li>
                    <Link href="/">Tomatoes</Link>
                  </li>
                  <li>
                    <Link href="/">Potatoes</Link>
                  </li>
                  <li>
                    <Link href="/">Chicken</Link>
                  </li>
                  <li>
                    <Link href="/">Pork</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.section_menu_action}>
              <button>More categories</button>
            </div>
          </div>
          <div className={styles.cards}>
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card>
                  <Card.Image
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/bfff95f0750341bf939daed70141260e_9366/Giay_NMD_V3_trang_GX9468_01_standard.jpg"
                    alt="shoe"
                  />
                  <Card.Title>Hello world</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, nostrum?
                  </Card.Text>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Home;
