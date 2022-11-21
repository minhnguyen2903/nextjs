import ProductCard from "components/common/ProductCard";
import SectionContainer from "components/common/sectionContainer";
import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.scss";

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
          <div className={styles.cards}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Home;
